const sectionFields = {
  aegisLabSection: [
    { label: 'Client ID', name: 'MSH_4', type: 'text', required: true },
    { label: 'Date and Time', name: 'MSH_7', type: 'datetime-local', required: true },
    { label: 'Order Number', name: 'MSH_10', type: 'text', required: true },
  ],
  patientSection: [
    { label: 'Patient ID', name: 'PID_2', type: 'text', required: true },
    { label: 'Patient ID Type', name: 'PID_2_5', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'MR', label: 'Medical Record Number' },
      { value: 'SS', label: 'Social Security Number' },
      { value: 'DL', label: 'Driver\'s License' },
      { value: 'PI', label: 'Patient Internal Identifier' },
    ] },
    { label: 'Patient Name', name: 'PID_5', type: 'text', required: true },
    { label: 'DOB', name: 'PID_7', type: 'date', required: true },
    { label: 'Administrative Sex', name: 'PID_8', type: 'select', required: true, options: [
      { value: '', label: 'Select' },
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
      { value: 'O', label: 'Other' },
    ] },
    { label: 'Race', name: 'PID_10', type: 'text' },
    { label: 'Address', name: 'PID_11_address', type: 'text', required: true },
    { label: 'Address 2', name: 'PID_11_address2', type: 'text' },
    { label: 'City', name: 'PID_11_city', type: 'text', required: true },
    { label: 'State', name: 'PID_11_state', type: 'text', required: true },
    { label: 'Zip Code', name: 'PID_11_zip', type: 'text', required: true },
    { label: 'Phone Number', name: 'PID_13', type: 'text', required: true },
    { label: 'SSN', name: 'PID_19', type: 'text' },
    { label: 'Ethnic Group', name: 'PID_22', type: 'text' },
  ],
  providerSection: [
    { label: 'Referring Doctor', name: 'PV1_8', type: 'text' },
    { label: 'Ordering Provider', name: 'OBR_16', type: 'text' },
    { label: 'Collection Date/Time', name: 'OBR_7', type: 'datetime-local' },
    { label: 'Specimen Source', name: 'OBR_15', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'URINE', label: 'Urine' },
      { value: 'BLOOD', label: 'Blood' },
      { value: 'SALIVA', label: 'Oral Fluid/Saliva' },
      { value: 'HAIR', label: 'Hair' },
      { value: 'NAIL', label: 'Nail' },
      { value: 'OTHER', label: 'Other' },
    ] },
    { label: 'Specimen Matrix Code', name: 'OBR_15_1', type: 'text' },
    { label: 'Bill Codes/Diagnosis Code', name: 'DG1_3', type: 'text' },
    { label: 'Bill Type', name: 'IN1_47', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'C', label: 'Direct Bill (C)' },
      { value: 'P', label: 'Patient Bill (P)' },
      { value: 'T', label: 'Third Party (T)' },
    ] },
  ],
  insuranceSection: [
    { label: 'Insurance Company ID', name: 'IN1_3', type: 'text' },
    { label: 'Insurance Company Name', name: 'IN1_4', type: 'text' },
    { label: 'Insurance Company Address', name: 'IN1_5_address', type: 'text' },
    { label: 'Address 2', name: 'IN1_5_address2', type: 'text' },
    { label: 'City', name: 'IN1_5_city', type: 'text' },
    { label: 'State', name: 'IN1_5_state', type: 'text' },
    { label: 'Zip Code', name: 'IN1_5_zip', type: 'text' },
    { label: 'Insured Name', name: 'IN1_16', type: 'text' },
    { label: `Insured's Relationship to Patient`, name: 'IN1_17', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'SEL', label: 'Self' },
      { value: 'SPO', label: 'Spouse' },
      { value: 'CHD', label: 'Child' },
      { value: 'OTH', label: 'Other' },
    ] },
    { label: `Insured's DOB`, name: 'IN1_18', type: 'date' },
    { label: `Insured's Address`, name: 'IN1_19_address', type: 'text' },
    { label: 'Address 2', name: 'IN1_19_address2', type: 'text' },
    { label: 'City', name: 'IN1_19_city', type: 'text' },
    { label: 'State', name: 'IN1_19_state', type: 'text' },
    { label: 'Zip Code', name: 'IN1_19_zip', type: 'text' },
    { label: 'Policy Number', name: 'IN1_36', type: 'text' },
    { label: `Insured's Administrative Sex`, name: 'IN1_43', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
      { value: 'O', label: 'Other' },
    ] },
  ],
  guarantorSection: [
    { label: 'Guarantor Name', name: 'GT1_3', type: 'text' },
    { label: 'Guarantor Address', name: 'GT1_5_address', type: 'text' },
    { label: 'Address 2', name: 'GT1_5_address2', type: 'text' },
    { label: 'City', name: 'GT1_5_city', type: 'text' },
    { label: 'State', name: 'GT1_5_state', type: 'text' },
    { label: 'Zip Code', name: 'GT1_5_zip', type: 'text' },
    { label: 'Guarantor Phone Number', name: 'GT1_6', type: 'text' },
  ],
};

function toggleSectionEdit(sectionId) {
  const modal = document.getElementById('editModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  modalTitle.textContent = document.querySelector(`#${sectionId} h2`).textContent;
  modalContent.innerHTML = '';
  const fields = sectionFields[sectionId];
  fields.forEach(field => {
    let value = document.getElementById('display-' + field.name.replace(/\./g, '').replace(/_/g, '')).textContent || '';
    if (field.type === 'select') {
      let select = document.createElement('select');
      select.name = field.name;
      select.className = 'mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500';
      field.options.forEach(opt => {
        let option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (value === opt.value) option.selected = true;
        select.appendChild(option);
      });
      modalContent.appendChild(labelWrap(field.label, select));
    } else {
      let input = document.createElement('input');
      input.type = field.type;
      input.name = field.name;
      input.value = value;
      input.required = !!field.required;
      input.className = 'mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm';
      modalContent.appendChild(labelWrap(field.label, input));
    }
  });
  modal.classList.remove('hidden');
  document.getElementById('saveModalBtn').onclick = function() { saveSection(sectionId); };
}

function labelWrap(label, el) {
  let wrapper = document.createElement('label');
  wrapper.className = 'block mb-2';
  wrapper.textContent = label;
  wrapper.appendChild(el);
  return wrapper;
}

document.getElementById('closeModalBtn').onclick = function() {
  document.getElementById('editModal').classList.add('hidden');
};

document.getElementById('editModal').addEventListener('click', function(e) {
  if (e.target === this) this.classList.add('hidden');
});

function saveSection(sectionId) {
  const modal = document.getElementById('editModal');
  const modalContent = document.getElementById('modalContent');
  const fields = sectionFields[sectionId];
  fields.forEach(field => {
    let input = modalContent.querySelector(`[name='${field.name}']`);
    let displaySpan = document.getElementById('display-' + field.name.replace(/\./g, '').replace(/_/g, ''));
    if (displaySpan) displaySpan.textContent = input.value;
  });
  modal.classList.add('hidden');
}

/**
 * Populates the form display fields and modal inputs from a JSON object.
 * @param {Object} data - Keys should use _ instead of . (e.g., 'PID_5', 'IN1_5_address').
 */
function getAllDisplayFieldKeys() {
  // Collect all display fields from sectionFields
  let keys = [];
  Object.values(sectionFields).forEach(fields => {
    fields.forEach(field => {
      keys.push(field.name.replace(/\./g, '').replace(/_/g, ''));
    });
  });
  return keys;
}

function populateFormFromJSON(json) {
  const data = typeof json === 'string' ? JSON.parse(json) : json;
  if (!data || typeof data !== 'object') return;
  
  // Enhanced field mapping function
  function findValueForField(data, fieldName) {
    // Try multiple key formats for better compatibility
    const possibleKeys = [
      fieldName, // exact match (already in underscore format)
      fieldName.replace(/_/g, '.'), // convert underscores to dots
      fieldName.replace(/\./g, '_'), // convert dots to underscores
      fieldName.replace(/\./g, ''), // remove dots
      fieldName.replace(/_/g, ''), // remove underscores
    ];
    
    for (const key of possibleKeys) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        return data[key];
      }
    }
    
    return undefined;
  }
  
  // Populate display spans for all fields
  Object.values(sectionFields).forEach(section => {
    section.forEach(field => {
      const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
      const displaySpan = document.getElementById(displayId);
      if (displaySpan) {
        const value = findValueForField(data, field.name);
        if (value !== undefined) {
          displaySpan.textContent = value;
        }
      }
    });
  });
  
  // Populate modal inputs (if open or for next open)
  const allModalInputs = document.querySelectorAll('#editModal input, #editModal select');
  allModalInputs.forEach(input => {
    const value = findValueForField(data, input.name);
    if (value !== undefined) {
      input.value = value;
    }
  });
  // --- OBR/OBX dynamic population ---
  const obrContainer = document.getElementById('obrContainer');
  if (obrContainer) obrContainer.innerHTML = '';
  // Find all OBR indices
  const obrIndices = Array.from(new Set(Object.keys(data)
    .filter(k => /^OBR\d+_OrderCode$/.test(k))
    .map(k => k.match(/^OBR(\d+)_OrderCode$/)[1])));
  obrIndices.forEach(idx => {
    if (typeof window.addOBR === 'function') window.addOBR();
    const obrSections = document.querySelectorAll('.obr-section');
    const obrSection = obrSections[obrSections.length - 1];
    if (!obrSection) return;
    const orderCodeInput = obrSection.querySelector('input[name="OrderCode"]');
    const orderDescInput = obrSection.querySelector('input[name="OrderDescription"]');
    if (orderCodeInput) {
      orderCodeInput.value = data[`OBR${idx}_OrderCode`] || '';
      orderCodeInput.dispatchEvent(new Event('input', { bubbles: true }));
      orderCodeInput.dispatchEvent(new Event('blur', { bubbles: true }));
    }
    if (orderDescInput) {
      setTimeout(() => {
        orderDescInput.value = data[`OBR${idx}_OrderDescription`] || '';
        orderDescInput.dispatchEvent(new Event('input', { bubbles: true }));
      }, 50);
    }
    if (orderCodeInput && typeof orderCodeInput.dispatchEvent === 'function') {
      orderCodeInput.dispatchEvent(new Event('input', { bubbles: true }));
      orderCodeInput.dispatchEvent(new Event('blur', { bubbles: true }));
    }
    // OBX for this OBR
    // --- Begin robust OBX restoration logic ---
    const obxNums = Object.keys(data)
      .filter(k => k.startsWith(`OBR${idx}_OBX`) && k.match(new RegExp(`^OBR${idx}_OBX(\\d+)_Question$`)))
      .map(k => k.match(new RegExp(`^OBR${idx}_OBX(\\d+)_Question$`))[1])
      .sort((a, b) => Number(a) - Number(b));
    const addObxBtn = obrSection.querySelector('button[onclick^="addOBX"]');
    if (addObxBtn) {
      if (obxNums.length > 0) {
        addObxBtn.classList.remove('hidden');
        addObxBtn.disabled = false;
        addObxBtn.style.display = '';
      } else {
        addObxBtn.classList.add('hidden');
        addObxBtn.disabled = true;
        addObxBtn.style.display = 'none';
      }
    }
    obxNums.forEach(obxNum => {
      // Try multiple approaches to add OBX section
      let obxSection = null;
      
      // Approach 1: Use addOBXForAoe if available
      const orderCode = data[`OBR${idx}_OrderCode`];
      const aoeQuestion = data[`OBR${idx}_OBX${obxNum}_Question`];
      let aoeObj = null;
      if (window.aoeQuestions && orderCode && aoeQuestion) {
        aoeObj = window.aoeQuestions.find(q => q.orderCode === orderCode && q.aoeQuestion === aoeQuestion);
      }
      if (aoeObj && obrSection.addOBXForAoe) {
        obrSection.addOBXForAoe(aoeObj);
        const obxSections = obrSection.querySelectorAll('.obx-section');
        obxSection = obxSections[obxSections.length - 1];
      }
      
      // Approach 2: Click add button if available
      if (!obxSection && addObxBtn) {
        addObxBtn.click();
        const obxSections = obrSection.querySelectorAll('.obx-section');
        obxSection = obxSections[obxSections.length - 1];
      }
      
      // Approach 3: Manually create OBX from template
      if (!obxSection) {
        const obxTemplate = document.getElementById('obxTemplate');
        if (obxTemplate) {
          const obxContainer = obrSection.querySelector('.obxContainer');
          if (obxContainer) {
            const obxClone = obxTemplate.content.cloneNode(true);
            obxContainer.appendChild(obxClone);
            const obxSections = obrSection.querySelectorAll('.obx-section');
            obxSection = obxSections[obxSections.length - 1];
          }
        }
      }
      
      // Populate the OBX section if we have one
      if (obxSection) {
        const qInput = obxSection.querySelector('input[name="Question"]');
        const aInput = obxSection.querySelector('input[name="Answer"]');
        if (qInput) qInput.value = data[`OBR${idx}_OBX${obxNum}_Question`] || '';
        if (aInput) aInput.value = data[`OBR${idx}_OBX${obxNum}_Answer`] || '';
        
        // Set the aoeId if we have the aoeObj
        if (aoeObj && aoeObj.aoeId) {
          obxSection.setAttribute('data-aoeid', aoeObj.aoeId);
        }
      }
    });
    // --- End robust OBX restoration logic ---
    // --- Retrigger UI show/hide logic for OBR/OBX ---
    if (typeof window.updateObrObxUi === 'function') {
      window.updateObrObxUi(obrSection);
    } else {
      // Fallback: dispatch a custom event or force reflow if needed
      obrSection.dispatchEvent(new Event('uiupdate', { bubbles: true }));
    }
  });
  // After all OBR/OBX, retrigger global UI update if available
  if (typeof window.updateObrObxUiGlobal === 'function') {
    window.updateObrObxUiGlobal();
  }
}

// --- update exportHL7ForFileMaker ---
window.exportHL7ForFileMaker = function exportHL7ForFileMaker() {
  // Validate form before export
  const validation = validateForm();
  if (!validation.isValid) {
    console.error('Cannot export HL7 - validation failed:', validation.errors);
    alert('Cannot export data - please fix validation errors first');
    return;
  }
  
  // Helper to escape HL7 special chars
  function esc(val) {
    return (val || '').replace(/\|/g, '\\F\\').replace(/\^/g, '\\S\\').replace(/~/g, '\\R\\').replace(/&/g, '\\T\\');
  }
  // Get display value by id
  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.textContent.trim() : '';
  }
  // Format date/time as YYYYMMDDHH24MI (e.g., 20120917125209)
  function formatHL7Date(dt) {
    if (!dt) return '';
    // Accepts ISO, local, or FileMaker style
    let d = new Date(dt);
    if (isNaN(d.getTime())) {
      // Try to parse as "YYYY-MM-DDTHH:MM" (HTML datetime-local)
      const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})[T ]([0-9]{2}):([0-9]{2})/.exec(dt);
      if (m) {
        return m[1] + m[2] + m[3] + m[4] + m[5] + '00';
      }
      return '';
    }
    const pad = n => n.toString().padStart(2, '0');
    return (
      d.getFullYear().toString() +
      pad(d.getMonth() + 1) +
      pad(d.getDate()) +
      pad(d.getHours()) +
      pad(d.getMinutes()) +
      pad(d.getSeconds())
    );
  }
  // MSH
  const msh4 = getVal('display-MSH4');
  const msh7raw = getVal('display-MSH7');
  const msh7 = formatHL7Date(msh7raw);
  const msh10 = getVal('display-MSH10') || '1'; // Default to '1' if empty
  const msh = `MSH|^~\\&|Aegis|${esc(msh4)}|FileMaker|FM|${esc(msh7)}||ORM^O01|${esc(msh10)}|P|2.3.1`;
  /*
  // SAMPLE JSON FOR ROUND-TRIP TESTING:
  {
    "MSH_4": "12345",
    "MSH_7": "20240618123000",
    "MSH_10": "ORD123456",
    "PID_2": "P123456",
    "PID_2_5": "MR",
    "PID_5": "John Doe",
    "PID_7": "1980-01-01",
    "PID_8": "M",
    "PID_10": "White",
    "PID_11_address": "123 Main St",
    "PID_11_address2": "Apt 4B",
    "PID_11_city": "Nashville",
    "PID_11_state": "TN",
    "PID_11_zip": "37201",
    "PID_13": "615-555-1234",
    "PID_19": "123-45-6789",
    "PID_22": "Not Hispanic or Latino",
    "PV1_8": "Dr. Smith",
    "OBR_16": "Dr. Jones",
    "OBR_7": "2024-06-18T14:30",
    "OBR_15": "URINE",
    "OBR_15_1": "URN",
    "DG1_3": "Z123.4",
    "IN1_47": "C",
    "IN1_3": "INS123",
    "IN1_4": "Best Insurance",
    "IN1_5_address": "456 Insurance Ave",
    "IN1_5_address2": "Suite 200",
    "IN1_5_city": "Nashville",
    "IN1_5_state": "TN",
    "IN1_5_zip": "37202",
    "IN1_16": "Jane Doe",
    "IN1_17": "SPO",
    "IN1_18": "1975-05-05",
    "IN1_19_address": "789 Spouse Rd",
    "IN1_19_address2": "",
    "IN1_19_city": "Nashville",
    "IN1_19_state": "TN",
    "IN1_19_zip": "37203",
    "IN1_36": "POL987654",
    "IN1_43": "F",
    "GT1_3": "Jane Doe",
    "GT1_5_address": "789 Spouse Rd",
    "GT1_5_address2": "",
    "GT1_5_city": "Nashville",
    "GT1_5_state": "TN",
    "GT1_5_zip": "37203",
    "GT1_6": "615-555-9876",
    "OBR1_OrderCode": "30000B",
    "OBR1_OrderDescription": "Drug-Drug Interaction (DDI) - Blood",
    "OBR1_OBX1_Question": "1 - Prescribed Medication(s) to be tested (Blood)",
    "OBR1_OBX1_Answer": "Brexpiprazole PRN"
  }
  */
  const pid = [
    'PID',
    '1', // 1: Set ID
    esc(getVal('display-PID2')) + '^^^' + esc(getVal('display-PID25')), // 2: Patient ID with type
    '', // 3: Patient Identifier List
    '', // 4: Alt Patient ID
    esc(getVal('display-PID5')), // 5: Patient Name
    '', // 6: Mother's Maiden Name
    esc(getVal('display-PID7')), // 7: DOB
    esc(getVal('display-PID8')), // 8: Administrative Sex
    '', // 9: Patient Alias
    esc(getVal('display-PID10')), // 10: Race
    esc(getVal('display-PID11address')) + '^' + esc(getVal('display-PID11address2')) + '^' + esc(getVal('display-PID11city')) + '^' + esc(getVal('display-PID11state')) + '^' + esc(getVal('display-PID11zip')), // 11: Address
    '', // 12: County
    esc(getVal('display-PID13')), // 13: Phone Number
    '', // 14: Phone Business
    '', // 15: Primary Language
    '', // 16: Marital Status
    '', // 17: Religion
    '', // 18: Patient Account Number
    esc(getVal('display-PID19')), // 19: SSN
    '', // 20: Driver's License
    '', // 21: Mother's Identifier
    esc(getVal('display-PID22')), // 22: Ethnic Group
  ].join('|');
  // IN1 (Insurance)
  const in1 = [
    'IN1',
    '1', // 1: Set ID
    esc(getVal('display-IN13')),
    esc(getVal('display-IN14')),
    esc(getVal('display-IN15address')) + '^' + esc(getVal('display-IN15address2')) + '^' + esc(getVal('display-IN15city')) + '^' + esc(getVal('display-IN15state')) + '^' + esc(getVal('display-IN15zip')),
    '', // 6: Phone
    '', // 7: Group Number
    '', // 8: Group Name
    '', // 9: Insured's Group Emp ID
    '', // 10: Insured's Group Emp Name
    '', // 11: Plan Effective Date
    '', // 12: Plan Expiration Date
    esc(getVal('display-IN116')),
    esc(getVal('display-IN117')),
    esc(getVal('display-IN118')),
    esc(getVal('display-IN119address')) + '^' + esc(getVal('display-IN119address2')) + '^' + esc(getVal('display-IN119city')) + '^' + esc(getVal('display-IN119state')) + '^' + esc(getVal('display-IN119zip')),
    '', // 17: Assignment of Benefits
    '', // 18: Coordination of Benefits
    '', // 19: Coord of Benefits Priority
    '', // 20: Notice of Admission Flag
    '', // 21: Notice of Admission Date
    '', // 22: Report of Eligibility Flag
    '', // 23: Report of Eligibility Date
    '', // 24: Release Information Code
    '', // 25: Pre-Admit Cert
    '', // 26: Verification Date/Time
    '', // 27: Verification By
    '', // 28: Type of Agreement Code
    '', // 29: Billing Status
    '', // 30: Lifetime Reserve Days
    '', // 31: Delay Before L.R. Days
    '', // 32: Company Plan Code
    '', // 33: Policy Number
    esc(getVal('display-IN136')),
    '', // 35: Policy Deductible
    '', // 36: Policy Limit Amount
    '', // 37: Policy Limit Days
    '', // 38: Room Rate Semi-Private
    '', // 39: Room Rate Private
    esc(getVal('display-IN143')),
    '', // 41: Insured's Employer Address
    '', // 42: Verification Status
    '', // 43: Prior Insurance Plan ID
    esc(getVal('display-IN147')),
  ].join('|');
  // GT1 (Guarantor)
  const gt1 = [
    'GT1',
    '1', // 1: Set ID
    esc(getVal('display-GT13')),
    esc(getVal('display-GT15address')) + '^' + esc(getVal('display-GT15address2')) + '^' + esc(getVal('display-GT15city')) + '^' + esc(getVal('display-GT15state')) + '^' + esc(getVal('display-GT15zip')),
    '', // 5: Phone
    esc(getVal('display-GT16')),
  ].join('|');
  // OBR/OBX (dynamic)
  const obrSections = document.querySelectorAll('.obr-section');
  let obrObxSegments = [];
  obrSections.forEach((obrSection, i) => {
    const orderCode = obrSection.querySelector('input[name="OrderCode"]').value;
    const orderDesc = obrSection.querySelector('input[name="OrderDescription"]').value;
    const collectionDateTime = formatHL7Date(getVal('display-OBR7'));
    const specimenSource = getVal('display-OBR15');
    const specimenMatrixCode = getVal('display-OBR151');
    const orderingProvider = getVal('display-OBR16');
    
    // OBR: OBR|1|...|orderCode^orderDesc|collectionDateTime|||specimenSource^specimenMatrixCode||||||||orderingProvider
    const obr = [
      'OBR',
      i+1, // Set ID
      '', // Placer Order Number
      '', // Filler Order Number
      '', // Universal Service ID
      esc(orderCode) + '^' + esc(orderDesc), // Universal Service ID
      '', // Priority
      esc(collectionDateTime), // Requested Date/Time
      '', // Observation Date/Time
      '', // Observation End Date/Time
      '', // Collection Volume
      '', // Collector Identifier
      '', // Specimen Action Code
      '', // Danger Code
      '', // Relevant Clinical Info
      esc(specimenSource) + (specimenMatrixCode ? '^' + esc(specimenMatrixCode) : ''), // Specimen Source
      esc(orderingProvider), // Ordering Provider
    ].join('|');
    obrObxSegments.push(obr);
    // OBX (AOE) for this OBR
    const obxSections = obrSection.querySelectorAll('.obx-section');
    obxSections.forEach((obxSection, j) => {
      let aInput = obxSection.querySelector('input[name="Answer"]');
      let answer = aInput ? aInput.value : '';
      let aoeId = obxSection.getAttribute('data-aoeid') || '';
      // OBX: OBX|1|ST|aoeId||answer
      const obx = [
        'OBX',
        j+1,
        'ST',
        aoeId,
        '',
        esc(answer),
      ].join('|');
      obrObxSegments.push(obx);
    });
  });
  // PV1 (Provider)
  const pv1 = [
    'PV1',
    '1', '', '', '', '', '',
    esc(getVal('display-PV18')),
  ].join('|');
  // DG1 (Diagnosis)
  const dg1 = [
    'DG1',
    '1', '',
    esc(getVal('display-DG13')),
  ].join('|');
  // Compose HL7 message
  const hl7 = [msh, pid, in1, gt1, pv1, dg1, ...obrObxSegments].join('\r');
  // Call FileMaker script if available
  if (window.FileMaker && typeof window.FileMaker.PerformScript === 'function') {
    window.FileMaker.PerformScript('ImportHL7FromWeb', hl7);
  } else {
    alert('HL7 message generated (FileMaker not detected):\n' + hl7);
  }
};

/**
 * Exports all form data as JSON (flat, underscore keys) and calls a FileMaker script.
 * The FileMaker script name is 'ImportJSONFromWeb'.
 */
window.exportJSONForFileMaker = function exportJSONForFileMaker() {
  // Validate form before export
  const validation = validateForm();
  if (!validation.isValid) {
    console.error('Cannot export JSON - validation failed:', validation.errors);
    alert('Cannot export data - please fix validation errors first');
    return;
  }
  
  const data = {};
  
  // Collect all display fields using the sectionFields definition
  Object.values(sectionFields).forEach(section => {
    section.forEach(field => {
      const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
      const span = document.getElementById(displayId);
      if (span) {
        // Field name is already in the correct underscore format
        data[field.name] = span.textContent.trim();
      }
    });
  });
  
  // Add OBR/OBX dynamic data (flattened as OBR1_OrderCode, OBR1_OBX1_Question, etc.)
  let obrSections = document.querySelectorAll('.obr-section');
  obrSections.forEach((obrSection, i) => {
    const obrIdx = i + 1;
    const orderCode = obrSection.querySelector('input[name="OrderCode"]').value;
    const orderDesc = obrSection.querySelector('input[name="OrderDescription"]').value;
    data[`OBR${obrIdx}_OrderCode`] = orderCode;
    data[`OBR${obrIdx}_OrderDescription`] = orderDesc;
    // OBX (AOE) for this OBR
    const obxSections = obrSection.querySelectorAll('.obx-section');
    obxSections.forEach((obxSection, j) => {
      const obxIdx = j + 1;
      let qInput = obxSection.querySelector('input[name="Question"]');
      let aInput = obxSection.querySelector('input[name="Answer"]');
      let question = qInput ? qInput.value : '';
      let answer = aInput ? aInput.value : '';
      data[`OBR${obrIdx}_OBX${obxIdx}_Question`] = question;
      data[`OBR${obrIdx}_OBX${obxIdx}_Answer`] = answer;
    });
  });
  const json = JSON.stringify(data);
  if (window.FileMaker && typeof window.FileMaker.PerformScript === 'function') {
    window.FileMaker.PerformScript('ImportJSONFromWeb', json);
  } else {
    alert('JSON generated (FileMaker not detected):\n' + json);
  }
};

/**
 * Test function to validate round-trip JSON import/export
 */
window.testRoundTrip = function testRoundTrip() {
  const sampleData = {
    "MSH_4": "12345",
    "MSH_7": "2024-06-18T12:30",
    "MSH_10": "ORD123456",
    "PID_2": "P123456",
    "PID_2_5": "MR",
    "PID_5": "John Doe",
    "PID_7": "1980-01-01",
    "PID_8": "M",
    "PID_10": "White",
    "PID_11_address": "123 Main St",
    "PID_11_address2": "Apt 4B",
    "PID_11_city": "Nashville",
    "PID_11_state": "TN",
    "PID_11_zip": "37201",
    "PID_13": "615-555-1234",
    "PID_19": "123-45-6789",
    "PID_22": "Not Hispanic or Latino",
    "PV1_8": "Dr. Smith",
    "OBR_16": "Dr. Jones",
    "OBR_7": "2024-06-18T14:30",
    "OBR_15": "URINE",
    "OBR_15_1": "URN",
    "DG1_3": "Z123.4",
    "IN1_47": "C",
    "IN1_3": "INS123",
    "IN1_4": "Best Insurance",
    "IN1_5_address": "456 Insurance Ave",
    "IN1_5_address2": "Suite 200",
    "IN1_5_city": "Nashville",
    "IN1_5_state": "TN",
    "IN1_5_zip": "37202",
    "IN1_16": "Jane Doe",
    "IN1_17": "SPO",
    "IN1_18": "1975-05-05",
    "IN1_19_address": "789 Spouse Rd",
    "IN1_19_address2": "",
    "IN1_19_city": "Nashville",
    "IN1_19_state": "TN",
    "IN1_19_zip": "37203",
    "IN1_36": "POL987654",
    "IN1_43": "F",
    "GT1_3": "Jane Doe",
    "GT1_5_address": "789 Spouse Rd",
    "GT1_5_address2": "",
    "GT1_5_city": "Nashville",
    "GT1_5_state": "TN",
    "GT1_5_zip": "37203",
    "GT1_6": "615-555-9876",
    "OBR1_OrderCode": "30000B",
    "OBR1_OrderDescription": "Drug-Drug Interaction (DDI) - Blood",
    "OBR1_OBX1_Question": "1 - Prescribed Medication(s) to be tested (Blood)",
    "OBR1_OBX1_Answer": "Brexpiprazole PRN"
  };
  
  console.log('Testing round-trip functionality...');
  
  // Step 1: Clear the form
  clearForm();
  
  // Step 2: Import test data
  populateFormFromJSON(sampleData);
  
  // Step 3: Export and compare
  setTimeout(() => {
    const exportedData = exportJSONData();
    console.log('Original data keys:', Object.keys(sampleData).length);
    console.log('Exported data keys:', Object.keys(exportedData).length);
    
    // Check for missing fields
    const missingFields = [];
    Object.keys(sampleData).forEach(key => {
      if (!exportedData[key] && sampleData[key] !== '') {
        missingFields.push(key);
      }
    });
    
    if (missingFields.length > 0) {
      console.warn('Missing fields in export:', missingFields);
    } else {
      console.log('✓ All fields successfully imported and exported');
    }
    
    // Check for extra fields
    const extraFields = [];
    Object.keys(exportedData).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(sampleData, key) && exportedData[key] !== '') {
        extraFields.push(key);
      }
    });
    
    if (extraFields.length > 0) {
      console.log('Extra fields in export:', extraFields);
    }
    
    return { original: sampleData, exported: exportedData, missing: missingFields, extra: extraFields };
  }, 1000);
};

/**
 * Calls FileMaker script to cancel the lab order
 */
window.cancelLabOrder = function cancelLabOrder() {
  // Confirm the cancellation with the user
  if (confirm('Are you sure you want to cancel this lab order? This action cannot be undone.')) {
    try {
      // Call the FileMaker script
      if (window.FileMaker && window.FileMaker.PerformScript) {
        window.FileMaker.PerformScript('CancelLabOrder');
        console.log('FileMaker script "CancelLabOrder" executed successfully');
      } else {
        // For testing/development when not in FileMaker
        console.log('FileMaker script "CancelLabOrder" would be called here');
        alert('Cancel order request sent to FileMaker');
      }
    } catch (error) {
      console.error('Error calling FileMaker script "CancelLabOrder":', error);
      alert('Error canceling order. Please try again.');
    }
  }
}

/**
 * Clear all form fields
 */
window.clearForm = function clearForm() {
  // Clear all display spans
  getAllDisplayFieldKeys().forEach(key => {
    const displaySpan = document.getElementById('display-' + key);
    if (displaySpan) {
      displaySpan.textContent = '';
    }
  });
  
  // Clear modal inputs
  const allModalInputs = document.querySelectorAll('#editModal input, #editModal select');
  allModalInputs.forEach(input => {
    input.value = '';
  });
  
  // Clear OBR/OBX sections
  const obrContainer = document.getElementById('obrContainer');
  if (obrContainer) {
    obrContainer.innerHTML = '';
  }
  
  console.log('Form cleared');
};

/**
 * Export JSON data without calling FileMaker (for testing)
 */
window.exportJSONData = function exportJSONData() {
  const data = {};
  
  // Collect all display fields using the sectionFields definition
  Object.values(sectionFields).forEach(section => {
    section.forEach(field => {
      const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
      const span = document.getElementById(displayId);
      if (span) {
        // Field name is already in the correct underscore format
        data[field.name] = span.textContent.trim();
      }
    });
  });
  
  // Add OBR/OBX dynamic data
  let obrSections = document.querySelectorAll('.obr-section');
  obrSections.forEach((obrSection, i) => {
    const obrIdx = i + 1;
    const orderCode = obrSection.querySelector('input[name="OrderCode"]').value;
    const orderDesc = obrSection.querySelector('input[name="OrderDescription"]').value;
    data[`OBR${obrIdx}_OrderCode`] = orderCode;
    data[`OBR${obrIdx}_OrderDescription`] = orderDesc;
    
    // OBX (AOE) for this OBR
    const obxSections = obrSection.querySelectorAll('.obx-section');
    obxSections.forEach((obxSection, j) => {
      const obxIdx = j + 1;
      let qInput = obxSection.querySelector('input[name="Question"]');
      let aInput = obxSection.querySelector('input[name="Answer"]');
      let question = qInput ? qInput.value : '';
      let answer = aInput ? aInput.value : '';
      data[`OBR${obrIdx}_OBX${obxIdx}_Question`] = question;
      data[`OBR${obrIdx}_OBX${obxIdx}_Answer`] = answer;
    });
  });
  
  return data;
};

// Export functions to window for global access
window.toggleSectionEdit = toggleSectionEdit;
window.populateFormFromJSON = populateFormFromJSON;

// Make aoeQuestions available globally for HL7 export
import aoeQuestions from './aoequestions.json';
window.aoeQuestions = aoeQuestions;

/**
 * Verify all fields from the mapping table are present in the UI and functions
 */
window.verifyFieldMapping = function verifyFieldMapping() {
  const mappingTable = [
    { label: 'Aegis Lab Information', field: 'aegisLabSection', hl7: 'MSH', subfields: null },
    { label: 'Client ID', field: 'MSH.4', hl7: 'MSH.4', subfields: null },
    { label: 'Date and Time', field: 'MSH.7', hl7: 'MSH.7', subfields: null },
    { label: 'Order Number', field: 'MSH.10', hl7: 'MSH.10', subfields: null },
    { label: 'Patient Address', field: 'PID.11', hl7: 'PID.11', subfields: ['address', 'address2', 'city', 'state', 'zip'] },
    { label: 'Patient Phone Number', field: 'PID.13', hl7: 'PID.13', subfields: null },
    { label: 'Patient ID', field: 'PID.2', hl7: 'PID.2/PID.3', subfields: null },
    { label: 'Patient ID Type', field: 'PID.2.5', hl7: 'PID.2.5', subfields: null },
    { label: 'Patient Name', field: 'PID.5', hl7: 'PID.5', subfields: null },
    { label: 'Patient DOB', field: 'PID.7', hl7: 'PID.7', subfields: null },
    { label: 'Patient Administrative Sex', field: 'PID.8', hl7: 'PID.8', subfields: null },
    { label: 'Patient Race', field: 'PID.10', hl7: 'PID.10', subfields: null },
    { label: 'SSN - Patient', field: 'PID.19', hl7: 'PID.19', subfields: null },
    { label: 'Patient Ethnic Group', field: 'PID.22', hl7: 'PID.22', subfields: null },
    { label: 'Referring Doctor', field: 'PV1.8', hl7: 'PV1.8', subfields: null },
    { label: 'Ordering Provider', field: 'OBR.16', hl7: 'OBR.16', subfields: null },
    { label: 'Collection Date and Time', field: 'OBR.7', hl7: 'OBR.7', subfields: null },
    { label: 'Specimen Matrix Code (Source)', field: 'OBR.15', hl7: 'OBR.15', subfields: null },
    { label: 'Specimen Matrix Code', field: 'OBR.15.1', hl7: 'OBR.15.1', subfields: null },
    { label: 'Bill Codes/Diagnosis Code', field: 'DG1.3', hl7: 'DG1.3', subfields: null },
    { label: 'Bill Type', field: 'IN1.47', hl7: 'IN1.47', subfields: null },
    { label: 'Insurance Company ID', field: 'IN1.3', hl7: 'IN1.3', subfields: null },
    { label: 'Insurance Company name', field: 'IN1.4', hl7: 'IN1.4', subfields: null },
    { label: 'Insurance Company Address', field: 'IN1.5', hl7: 'IN1.5', subfields: ['address', 'address2', 'city', 'state', 'zip'] },
    { label: 'Insured Name', field: 'IN1.16', hl7: 'IN1.16', subfields: null },
    { label: 'Insured\'s Relationship to the Patient', field: 'IN1.17', hl7: 'IN1.17', subfields: null },
    { label: 'Insured\'s DOB', field: 'IN1.18', hl7: 'IN1.18', subfields: null },
    { label: 'Insured\'s Address', field: 'IN1.19', hl7: 'IN1.19', subfields: ['address', 'address2', 'city', 'state', 'zip'] },
    { label: 'Policy Number', field: 'IN1.36', hl7: 'IN1.36', subfields: null },
    { label: 'Insured\'s Administrative Sex', field: 'IN1.43', hl7: 'IN1.43', subfields: null },
    { label: 'Guarantor Name', field: 'GT1.3', hl7: 'GT1.3', subfields: null },
    { label: 'Guarantor Address', field: 'GT1.5', hl7: 'GT1.5', subfields: ['address', 'address2', 'city', 'state', 'zip'] },
    { label: 'Guarantor Phone Number', field: 'GT1.6', hl7: 'GT1.6', subfields: null },
    { label: 'AOEs Question', field: 'OBX.3', hl7: 'OBX3', subfields: null },
    { label: 'AOE Answers', field: 'OBX.5', hl7: 'OBX.5', subfields: null },
    { label: 'Aegis Order Description', field: 'OBR.4', hl7: 'OBR4', subfields: null },
    { label: 'Aegis Order Code', field: 'OBR.4', hl7: 'OBR4', subfields: null },
  ];

  const results = {
    found: [],
    missing: [],
    htmlMissing: [],
    jsMissing: []
  };

  mappingTable.forEach(item => {
    const fieldName = item.field;
    const displayId = 'display-' + fieldName.replace(/\./g, '').replace(/_/g, '');
    
    // Check if field is defined in sectionFields
    let foundInJS = false;
    Object.values(sectionFields).forEach(section => {
      if (section.find(f => f.name === fieldName)) {
        foundInJS = true;
      }
    });
    
    // Check if HTML element exists
    const htmlElement = document.getElementById(displayId);
    const foundInHTML = !!htmlElement;
    
    if (foundInJS && foundInHTML) {
      results.found.push(item);
    } else {
      results.missing.push(item);
      if (!foundInJS) results.jsMissing.push(item);
      if (!foundInHTML) results.htmlMissing.push(item);
    }
  });

  console.log('Field Mapping Verification Results:');
  console.log('✓ Found fields:', results.found.length);
  console.log('✗ Missing fields:', results.missing.length);
  
  if (results.missing.length > 0) {
    console.log('Missing from JavaScript:', results.jsMissing.map(f => f.field));
    console.log('Missing from HTML:', results.htmlMissing.map(f => f.field));
  }

  return results;
};

/**
 * Debug function to check field name mappings
 */
window.debugFieldMapping = function debugFieldMapping() {
  console.log('=== DEBUG: Field Name Mapping ===');
  
  Object.entries(sectionFields).forEach(([sectionName, fields]) => {
    console.log(`\nSection: ${sectionName}`);
    fields.forEach(field => {
      const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
      const element = document.getElementById(displayId);
      const jsonKey = field.name.replace(/\./g, '_');
      
      console.log(`  Field: ${field.name}`);
      console.log(`  Display ID: ${displayId}`);
      console.log(`  JSON Key: ${jsonKey}`);
      console.log(`  Element exists: ${!!element}`);
      
      if (element) {
        console.log(`  Current value: "${element.textContent}"`);
      }
    });
  });
  
  return 'Check console for field mapping details';
};

/**
 * Validates the form before submission
 * @returns {Object} validation result with isValid boolean and errors array
 */
function validateForm() {
  const errors = [];
  
  // Check if there's at least one order request
  const obrSections = document.querySelectorAll('.obr-section');
  if (obrSections.length === 0) {
    errors.push('At least one order request is required');
    return { isValid: false, errors };
  }
  
  // Validate all required fields from sectionFields
  Object.values(sectionFields).forEach(fields => {
    fields.forEach(field => {
      if (field.required) {
        const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
        const displaySpan = document.getElementById(displayId);
        
        if (!displaySpan || !displaySpan.textContent.trim()) {
          errors.push(`${field.label} is required`);
        }
      }
    });
  });
  
  // Validate each order request
  obrSections.forEach((obrSection, index) => {
    const orderCodeInput = obrSection.querySelector('input[name="OrderCode"]');
    const orderDescInput = obrSection.querySelector('input[name="OrderDescription"]');
    
    if (!orderCodeInput || !orderCodeInput.value.trim()) {
      errors.push(`Order Code is required for Order Request ${index + 1}`);
    }
    
    if (!orderDescInput || !orderDescInput.value.trim()) {
      errors.push(`Order Description is required for Order Request ${index + 1}`);
    }
    
    // Validate OBX (observation) fields within this order request
    const obxSections = obrSection.querySelectorAll('.obx-section');
    obxSections.forEach((obxSection, obxIndex) => {
      const questionInput = obxSection.querySelector('input[name="Question"]');
      const answerInput = obxSection.querySelector('input[name="Answer"]');
      
      if (!questionInput || !questionInput.value.trim()) {
        errors.push(`Observation Question is required for Observation ${obxIndex + 1} in Order Request ${index + 1}`);
      }
      
      if (!answerInput || !answerInput.value.trim()) {
        errors.push(`Observation Answer is required for Observation ${obxIndex + 1} in Order Request ${index + 1}`);
      }
    });
  });
  
  return { isValid: errors.length === 0, errors };
}

/**
 * Shows validation errors in the UI
 * @param {Array} errors - Array of error messages
 */
function showValidationErrors(errors) {
  const errorDiv = document.getElementById('validationError');
  const errorMessage = document.getElementById('validationErrorMessage');
  
  if (errors.length > 0) {
    errorMessage.innerHTML = '<strong>Please fix the following errors:</strong><ul>' + 
      errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
    errorDiv.classList.remove('hidden');
    
    // Highlight empty required fields
    highlightEmptyRequiredFields();
    
    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    errorDiv.classList.add('hidden');
  }
}

/**
 * Hides validation errors
 */
function hideValidationErrors() {
  const errorDiv = document.getElementById('validationError');
  errorDiv.classList.add('hidden');
  
  // Remove field highlights
  removeFieldHighlights();
}

/**
 * Form submission handler with validation
 */
function handleFormSubmit(event) {
  event.preventDefault();
  
  console.log('Form submission attempted...');
  
  const validation = validateForm();
  
  if (!validation.isValid) {
    console.log('Validation failed, preventing FileMaker script execution');
    showValidationErrors(validation.errors);
    return false;
  }
  
  console.log('Validation passed, proceeding with FileMaker script execution...');
  hideValidationErrors();
  
  // Only execute FileMaker scripts if validation passes
  if (window.exportJSONForFileMaker) {
    try {
      window.exportJSONForFileMaker();
      console.log('FileMaker JSON export executed successfully');
    } catch (error) {
      console.error('Error executing FileMaker JSON export:', error);
    }
  }
  
  if (window.exportHL7ForFileMaker) {
    try {
      window.exportHL7ForFileMaker();
      console.log('FileMaker HL7 export executed successfully');
    } catch (error) {
      console.error('Error executing FileMaker HL7 export:', error);
    }
  }
  
  return true;
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
  
  // Add required field indicators
  addRequiredFieldIndicators();
  
  // Hide validation errors when user starts editing
  document.addEventListener('input', function(e) {
    if (e.target.matches('input, select, textarea')) {
      hideValidationErrors();
    }
  });
});

/**
 * Adds visual indicators for required fields
 */
function addRequiredFieldIndicators() {
  Object.values(sectionFields).forEach(fields => {
    fields.forEach(field => {
      if (field.required) {
        const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
        const displaySpan = document.getElementById(displayId);
        
        if (displaySpan) {
          // Find the label element (parent div contains the label)
          const parentDiv = displaySpan.closest('.flex');
          if (parentDiv) {
            const labelSpan = parentDiv.querySelector('.font-semibold');
            if (labelSpan && !labelSpan.querySelector('.text-red-500')) {
              // Add red asterisk to indicate required field
              const asterisk = document.createElement('span');
              asterisk.className = 'text-red-500 ml-1';
              asterisk.textContent = '*';
              labelSpan.appendChild(asterisk);
            }
          }
        }
      }
    });
  });
}

/**
 * Highlights empty required fields with red border
 */
function highlightEmptyRequiredFields() {
  // Clear existing highlights
  document.querySelectorAll('.border-red-500').forEach(el => {
    el.classList.remove('border-red-500');
  });
  
  Object.values(sectionFields).forEach(fields => {
    fields.forEach(field => {
      if (field.required) {
        const displayId = 'display-' + field.name.replace(/\./g, '').replace(/_/g, '');
        const displaySpan = document.getElementById(displayId);
        
        if (displaySpan && !displaySpan.textContent.trim()) {
          // Add red border to the display span
          displaySpan.classList.add('border-red-500', 'border-2');
        }
      }
    });
  });
  
  // Also highlight empty order code inputs
  const obrSections = document.querySelectorAll('.obr-section');
  obrSections.forEach(obrSection => {
    const orderCodeInput = obrSection.querySelector('input[name="OrderCode"]');
    if (orderCodeInput && !orderCodeInput.value.trim()) {
      orderCodeInput.classList.add('border-red-500', 'border-2');
    }
    
    // Highlight empty OBX fields
    const obxSections = obrSection.querySelectorAll('.obx-section');
    obxSections.forEach(obxSection => {
      const questionInput = obxSection.querySelector('input[name="Question"]');
      const answerInput = obxSection.querySelector('input[name="Answer"]');
      
      if (questionInput && !questionInput.value.trim()) {
        questionInput.classList.add('border-red-500', 'border-2');
      }
      
      if (answerInput && !answerInput.value.trim()) {
        answerInput.classList.add('border-red-500', 'border-2');
      }
    });
  });
}

/**
 * Removes highlights from fields
 */
function removeFieldHighlights() {
  document.querySelectorAll('.border-red-500').forEach(el => {
    el.classList.remove('border-red-500', 'border-2');
  });
}