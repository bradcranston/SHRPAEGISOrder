# IN1.16 Insured Name Field - HL7 XPN Format Fix

## Issue Fixed
The IN1.16 "Name Of Insured" field in the insurance segment was not properly formatted according to HL7 XPN (Extended Person Name) standard, which requires caret (^) separators between name components.

## Changes Made

### 1. Updated HL7 Export Logic
**File:** `src/index.js`
- **Before:** `esc(getVal('display-IN116'))` (single field)
- **After:** `formatXPN(getVal('display-IN116family'), getVal('display-IN116given'), getVal('display-IN116middle'))` (XPN format)

### 2. Updated Insurance Modal Form
**File:** `index.html`
- **Before:** Single "Insured Name" field (`name="IN1.16"`)
- **After:** Three separate fields:
  - Insured Last Name (`name="IN1.16_family"`)
  - Insured First Name (`name="IN1.16_given"`)
  - Insured Middle Name (`name="IN1.16_middle"`)

### 3. Updated sectionFields Configuration
**File:** `src/index.js`
The `sectionFields.insuranceSection` already had the correct field mappings:
- `IN1_16_family` for last name
- `IN1_16_given` for first name
- `IN1_16_middle` for middle name

### 4. Added Backward Compatibility
**File:** `src/index.js`
Added logic to `populateFormFromJSON()` to handle old format:
```javascript
// Handle backward compatibility for old IN1_16 format (full insured name)
if (data.IN1_16 && typeof data.IN1_16 === 'string' && !data.IN1_16_family && !data.IN1_16_given) {
  const fullName = data.IN1_16.trim();
  const nameParts = fullName.split(/\s+/);
  if (nameParts.length >= 2) {
    data.IN1_16_family = nameParts[nameParts.length - 1]; // Last word as last name
    data.IN1_16_given = nameParts[0]; // First word as first name
    if (nameParts.length > 2) {
      // Everything in between as middle name
      data.IN1_16_middle = nameParts.slice(1, -1).join(' ');
    }
  } else if (nameParts.length === 1) {
    data.IN1_16_family = fullName;
  }
  // Remove the old field
  delete data.IN1_16;
}
```

## Result

### Before Fix
```
IN1|1|PH17236|4X0012|DigiMark|P.O. Box 112233^^Big Hill^TN^37171|||117019172||||||||GAMGEE SAMWISE S|E|198907086000|...
```

### After Fix (HL7 XPN Format)
```
IN1|1|PH17236|4X0012|DigiMark|P.O. Box 112233^^Big Hill^TN^37171|||117019172||||||||GAMGEE^SAMWISE^S|E|198907086000|...
```

## HL7 XPN Format Standard
The XPN (Extended Person Name) format uses caret (^) separators:
- **Format:** `Family^Given^Middle^Suffix^Prefix`
- **Example:** `GAMGEE^SAMWISE^S` (family name^given name^middle name)

## Testing
- Created `test_in1_names.html` for specific IN1.16 name field testing
- Updated `hl7_fixes_test.html` documentation
- All validation and form handling works with the new separate name fields
- Backward compatibility ensures old JSON data still imports correctly

# Date Format Fix - Remove Dashes from HL7 Date Fields

## Issue Fixed
All date fields in HL7 export were including dashes (e.g., "1955-05-07") instead of the required HL7 format without dashes (e.g., "19550507").

## Changes Made

### 1. Added Date-Only Formatter
**File:** `src/index.js`
```javascript
// Format date only (YYYYMMDD) for DOB and other date-only fields
function formatHL7DateOnly(dt) {
  if (!dt) return '';
  let d = new Date(dt);
  if (isNaN(d.getTime())) {
    // Try to parse as "YYYY-MM-DD" format
    const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/.exec(dt);
    if (m) {
      return m[1] + m[2] + m[3];
    }
    return '';
  }
  const pad = n => n.toString().padStart(2, '0');
  return (
    d.getFullYear().toString() +
    pad(d.getMonth() + 1) +
    pad(d.getDate())
  );
}
```

### 2. Updated Date Field Formatting
**File:** `src/index.js`

#### Patient DOB (PID.7)
- **Before:** `esc(getVal('display-PID7'))` 
- **After:** `formatHL7DateOnly(getVal('display-PID7'))`

#### Insured DOB (IN1.18)
- **Before:** `esc(getVal('display-IN118'))`
- **After:** `formatHL7DateOnly(getVal('display-IN118'))`

### 3. Existing DateTime Fields Already Correct
The following fields were already using `formatHL7Date()` correctly:
- MSH.7 (Message Date/Time): `formatHL7Date(msh7raw)` → YYYYMMDDHHMMSS
- OBR.7 (Collection Date/Time): `formatHL7Date(getVal('display-OBR7'))` → YYYYMMDDHHMMSS

## Result

### Before Fix
```
PID|1|...|1955-05-07|...     (Date with dashes)
IN1|1|...|1975-05-05|...     (Date with dashes)
```

### After Fix
```
PID|1|...|19550507|...       (Date without dashes)
IN1|1|...|19750505|...       (Date without dashes)
```

## HL7 Date Format Standards

### Date-Only Fields (YYYYMMDD)
- PID.7 (Patient DOB): `19550507`
- IN1.18 (Insured DOB): `19750505`

### Date/Time Fields (YYYYMMDDHHMMSS)
- MSH.7 (Message Date/Time): `20240618123000`
- OBR.7 (Collection Date/Time): `20240618143000`

## Testing
- Created `test_date_format.html` for comprehensive date format testing
- All date fields now properly format without dashes according to HL7 standards
- Both date-only and date/time fields follow correct HL7 formatting rules

## Status: ✅ COMPLETE
All HL7 date fields now properly format without dashes according to HL7 standards.

## Status: ✅ COMPLETE
The IN1.16 insured name field now properly exports in HL7 XPN format with caret separators, meets the documentation requirements, and maintains backward compatibility.

# Name Fields with Carets Fix - GT1, PV1, and OBR

## Issue Fixed
The GT1.3 (Guarantor Name), PV1.8 (Referring Doctor), and OBR.16 (Ordering Provider) fields were not properly formatted with carets (^) according to HL7 XPN and XCN standards.

## Changes Made

### 1. Added Generic Name Parsing Function
**File:** `src/index.js`
```javascript
// Format a full name string into XPN format by parsing it
function formatNameWithCarets(fullName) {
  // Handles multiple name formats:
  // - "Dr. John Michael Smith Jr." → "Smith^John^Michael^Jr^Dr" 
  // - "Smith, John Michael" → "Smith^John^Michael"
  // - "John Smith" → "Smith^John"
}
```

### 2. Updated GT1.3 Guarantor Name
**File:** `src/index.js`
- **Before:** `esc(getVal('display-GT13'))`
- **After:** `formatNameWithCarets(getVal('display-GT13'))`

### 3. Updated PV1.8 Referring Doctor
**File:** `src/index.js`
- **Before:** `esc(getVal('display-PV18'))`
- **After:** `formatNameWithCarets(getVal('display-PV18'))`

### 4. Enhanced OBR.16 Ordering Provider (Already Fixed)
**File:** `src/index.js`
- Already using `formatOrderingProvider()` which formats with XCN standard
- Format: `NPI^LastName^FirstName^MiddleInitial^^^^^NPI`

## Name Parsing Logic

### Supported Input Formats
1. **Comma-separated:** "Last, First Middle" → "Last^First^Middle"
2. **Space-separated with prefix/suffix:** "Dr. John Michael Smith Jr." → "Smith^John^Michael^Jr^Dr"
3. **Simple format:** "John Smith" → "Smith^John"

### Prefix/Suffix Recognition
- **Prefixes:** Dr, Dr., Mr, Mr., Mrs, Mrs., Ms, Ms., Miss, Prof, Prof.
- **Suffixes:** Jr, Jr., Sr, Sr., II, III, IV, V, MD, PhD, RN, NP

## Result

### Before Fix
```
GT1|1||Jane Doe||...                    (No carets)
PV1|1||||||Dr. Smith                    (No carets)
OBR|1|...|1354275899^Clark^Allan^^^^NPI (Already correct)
```

### After Fix
```
GT1|1||Doe^Jane||...                         (XPN format)
PV1|1||||||Smith^^^Dr                        (XPN format)
OBR|1|...|1354275899^Clark^Allan^^^^NPI      (XCN format - unchanged)
```

## HL7 Format Standards

### XPN (Extended Person Name) - GT1.3, PV1.8
- **Format:** `Family^Given^Middle^Suffix^Prefix`
- **Example:** `Smith^John^Michael^Jr^Dr`

### XCN (Extended Composite ID Number and Name) - OBR.16
- **Format:** `ID^Family^Given^Middle^^^^^AssigningAuthority`
- **Example:** `1354275899^Clark^Allan^^^^NPI`

## Testing
- Created `test_name_carets.html` for comprehensive name formatting testing
- Tests multiple name input formats and verifies proper caret formatting
- All name fields now conform to HL7 XPN/XCN standards

## Status: ✅ COMPLETE
All name fields (GT1.3, PV1.8, OBR.16) now properly format with carets according to HL7 standards and support intelligent name parsing for various input formats.

# DG1.3 Diagnosis Code CWE Format Fix

## Issue Fixed
The DG1.3 diagnosis code field was not properly formatted according to HL7 CWE (Coded with Exceptions) standard, which requires the format: `<Identifier>^<Text>^<Name of Coding System>`.

## Changes Made

### 1. Added CWE Formatting Function
**File:** `src/index.js`
```javascript
// Format diagnosis code in CWE format for DG1.3
// CWE: <Identifier>^<Text>^<Name of Coding System>
function formatDiagnosisCode(diagnosisInput) {
  // Handles multiple input formats:
  // - "Z79.899" → "Z79.899^^I10" (code only)
  // - "Z79.899^Drug therapy" → "Z79.899^Drug therapy^I10" (code + description)
  // - "Z79.899^Drug therapy^I10" → "Z79.899^Drug therapy^I10" (complete CWE)
}
```

### 2. Updated DG1.3 Field Formatting
**File:** `src/index.js`
- **Before:** `esc(getVal('display-DG13'))`
- **After:** `formatDiagnosisCode(getVal('display-DG13'))`

### 3. Enhanced UI Guidance
**File:** `index.html`
- Added placeholder text with format example
- Added helper text explaining the CWE format
- Improved user guidance for entering diagnosis codes

## CWE Format Specification

### Structure
- **Format:** `<Identifier (ST)>^<Text (ST)>^<Name of Coding System (ID)>`
- **Example:** `Z79.899^Other long term (current) drug therapy^I10`

### Coding System
- **I10:** ICD-10 codes (from HL7 Table 396 Coding System)
- **Source:** ICD-10 codes published by CMS
- **Reference:** HL7 Table 51 directs to this coding system

### Supported Input Formats

1. **Code Only:**
   - Input: `"Z79.899"`
   - Output: `"Z79.899^^I10"`

2. **Code + Description:**
   - Input: `"Z79.899^Other long term drug therapy"`
   - Output: `"Z79.899^Other long term drug therapy^I10"`

3. **Complete CWE:**
   - Input: `"Z79.899^Other long term (current) drug therapy^I10"`
   - Output: `"Z79.899^Other long term (current) drug therapy^I10"` (unchanged)

4. **Empty Input:**
   - Input: `""` or `null`
   - Output: `""` (empty string)

## Result

### Before Fix
```
DG1|1||Opioid Dependence                    (Plain text, no structure)
```

### After Fix
```
DG1|1||Z79.899^Other long term (current) drug therapy^I10    (CWE format)
```

## HL7 Standards Compliance

### CWE Data Type
- **Definition:** Coded with Exceptions
- **Purpose:** Allows for coded values with optional alternative text
- **Structure:** Identifier^Text^CodingSystem^AlternateIdentifier^AlternateText^AlternateCodingSystem

### Field Usage
- **DG1.3:** Diagnosis Code
- **Data Type:** CWE
- **Required Components:** Identifier (code), Text (description), Name of Coding System (I10)

### Validation Rules
- Identifier is required (ICD-10 code)
- Text description is optional but recommended
- Coding system defaults to "I10" for ICD-10 codes
- Special characters are properly escaped using HL7 encoding rules

## Testing
- Created `test_dg1_format.html` for comprehensive CWE format testing
- Tests all supported input formats and validates proper output
- Verifies HL7 character escaping and format compliance

## Status: ✅ COMPLETE
The DG1.3 diagnosis code field now properly formats according to HL7 CWE standard with intelligent parsing of various input formats and automatic coding system assignment.
