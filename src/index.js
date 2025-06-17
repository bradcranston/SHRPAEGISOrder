const sectionFields = {
  aegisLabSection: [
    { label: 'Client ID', name: 'MSH.4', type: 'text', required: true },
    { label: 'Date and Time', name: 'MSH.7', type: 'datetime-local', required: true },
  ],
  patientSection: [
    { label: 'Address', name: 'PID.11_address', type: 'text', required: true },
    { label: 'Address 2', name: 'PID.11_address2', type: 'text' },
    { label: 'City', name: 'PID.11_city', type: 'text', required: true },
    { label: 'State', name: 'PID.11_state', type: 'text', required: true },
    { label: 'Zip Code', name: 'PID.11_zip', type: 'text', required: true },
    { label: 'Phone Number', name: 'PID.13', type: 'text', required: true },
    { label: 'Patient ID', name: 'PID.2', type: 'text', required: true },
    { label: 'Patient Name', name: 'PID.5', type: 'text', required: true },
    { label: 'DOB', name: 'PID.7', type: 'date', required: true },
    { label: 'Administrative Sex', name: 'PID.8', type: 'select', required: true, options: [
      { value: '', label: 'Select' },
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
      { value: 'O', label: 'Other' },
    ] },
    { label: 'Race', name: 'PID.10', type: 'text' },
    { label: 'SSN', name: 'PID.19', type: 'text' },
    { label: 'Ethnic Group', name: 'PID.22', type: 'text' },
  ],
  providerSection: [
    { label: 'Referring Doctor', name: 'PV1.8', type: 'text' },
    { label: 'Ordering Provider', name: 'OBR.16', type: 'text' },
    { label: 'Bill Codes/Diagnosis Code', name: 'DG1.3', type: 'text' },
    { label: 'Bill Type', name: 'IN1.47', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'C', label: 'Direct Bill (C)' },
      { value: 'P', label: 'Patient Bill (P)' },
      { value: 'T', label: 'Third Party (T)' },
    ] },
  ],
  insuranceSection: [
    { label: 'Insurance Company ID', name: 'IN1.3', type: 'text' },
    { label: 'Insurance Company Name', name: 'IN1.4', type: 'text' },
    { label: 'Insurance Company Address', name: 'IN1.5_address', type: 'text' },
    { label: 'Address 2', name: 'IN1.5_address2', type: 'text' },
    { label: 'City', name: 'IN1.5_city', type: 'text' },
    { label: 'State', name: 'IN1.5_state', type: 'text' },
    { label: 'Zip Code', name: 'IN1.5_zip', type: 'text' },
    { label: 'Insured Name', name: 'IN1.16', type: 'text' },
    { label: `Insured's Relationship to Patient`, name: 'IN1.17', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'SEL', label: 'Self' },
      { value: 'SPO', label: 'Spouse' },
      { value: 'CHD', label: 'Child' },
      { value: 'OTH', label: 'Other' },
    ] },
    { label: `Insured's DOB`, name: 'IN1.18', type: 'date' },
    { label: `Insured's Address`, name: 'IN1.19_address', type: 'text' },
    { label: 'Address 2', name: 'IN1.19_address2', type: 'text' },
    { label: 'City', name: 'IN1.19_city', type: 'text' },
    { label: 'State', name: 'IN1.19_state', type: 'text' },
    { label: 'Zip Code', name: 'IN1.19_zip', type: 'text' },
    { label: 'Policy Number', name: 'IN1.36', type: 'text' },
    { label: `Insured's Administrative Sex`, name: 'IN1.43', type: 'select', options: [
      { value: '', label: 'Select' },
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
      { value: 'O', label: 'Other' },
    ] },
  ],
  guarantorSection: [
    { label: 'Guarantor Name', name: 'GT1.3', type: 'text' },
    { label: 'Guarantor Address', name: 'GT1.5_address', type: 'text' },
    { label: 'Address 2', name: 'GT1.5_address2', type: 'text' },
    { label: 'City', name: 'GT1.5_city', type: 'text' },
    { label: 'State', name: 'GT1.5_state', type: 'text' },
    { label: 'Zip Code', name: 'GT1.5_zip', type: 'text' },
    { label: 'Guarantor Phone Number', name: 'GT1.6', type: 'text' },
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
  // Populate display spans for all fields
  getAllDisplayFieldKeys().forEach(key => {
    const displaySpan = document.getElementById('display-' + key);
    // Try all possible JSON key formats for this field
    const underscoreKey = key.replace(/([A-Z]+)([0-9]+)/g, '$1_$2');
    const dotKey = key.replace(/([A-Z]+)([0-9]+)/g, '$1.$2');
    const rawKey = key;
    let value = undefined;
    if (Object.prototype.hasOwnProperty.call(data, underscoreKey)) {
      value = data[underscoreKey];
    } else if (Object.prototype.hasOwnProperty.call(data, dotKey)) {
      value = data[dotKey];
    } else if (Object.prototype.hasOwnProperty.call(data, rawKey)) {
      value = data[rawKey];
    }
    if (displaySpan && value !== undefined) {
      displaySpan.textContent = value;
    }
  });
  // Populate modal inputs (if open or for next open)
  const allModalInputs = document.querySelectorAll('#editModal input, #editModal select');
  allModalInputs.forEach(input => {
    const key = input.name.replace(/\./g, '_');
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      input.value = data[key];
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
    // Gather all OBX numbers for this OBR, sorted
    const obxNums = Object.keys(data)
      .filter(k => k.startsWith(`OBR${idx}_OBX`) && k.endsWith('_Question'))
      .map(k => parseInt(k.match(/^OBR\d+_OBX(\d+)_Question$/)[1], 10))
      .sort((a, b) => a - b);
    // For each OBX, restore in order
    obxNums.forEach(obxNum => {
      const orderCode = data[`OBR${idx}_OrderCode`];
      const aoeQuestion = data[`OBR${idx}_OBX${obxNum}_Question`];
      let aoeObj = null;
      if (window.aoeQuestions && orderCode && aoeQuestion) {
        aoeObj = window.aoeQuestions.find(q => q.orderCode === orderCode && q.aoeQuestion === aoeQuestion);
      }
      // Use addOBXForAoe if available, else fallback to addObxBtn.click()
      if (aoeObj && obrSection.addOBXForAoe) {
        obrSection.addOBXForAoe(aoeObj);
      } else {
        // fallback: click add OBX button
        const addObxBtn = obrSection.querySelector('button[onclick^="addOBX"]');
        if (addObxBtn) addObxBtn.click();
      }
      // Get the last obx-section in this obrSection
      const obxSections = obrSection.querySelectorAll('.obx-section');
      const obxSection = obxSections[obxSections.length - 1];
      if (obxSection) {
        if (obxSection.querySelector('input[name="Question"]')) obxSection.querySelector('input[name="Question"]').value = data[`OBR${idx}_OBX${obxNum}_Question`] || '';
        const aInput = obxSection.querySelector('input[name="Answer"]');
        if (aInput) aInput.value = data[`OBR${idx}_OBX${obxNum}_Answer`] || '';
      }
    });
    // --- End robust OBX restoration logic ---
  });
}

// --- update exportHL7ForFileMaker ---
window.exportHL7ForFileMaker = function exportHL7ForFileMaker() {
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
  const msh = `MSH|^~\\&|Aegis|${esc(msh4)}|FileMaker|FM|${esc(msh7)}||ORM^O01|1|P|2.3.1`;
  /*
  // SAMPLE JSON FOR ROUND-TRIP TESTING:
  {
    "MSH_4": "12345",
    "MSH_7": "20240618123000",
    "PID_11_address": "123 Main St",
    "PID_11_address2": "Apt 4B",
    "PID_11_city": "Nashville",
    "PID_11_state": "TN",
    "PID_11_zip": "37201",
    "PID_13": "615-555-1234",
    "PID_2": "P123456",
    "PID_5": "John Doe",
    "PID_7": "1980-01-01",
    "PID_8": "M",
    "PID_10": "White",
    "PID_19": "123-45-6789",
    "PID_22": "Not Hispanic or Latino",
    "PV1_8": "Dr. Smith",
    "OBR_16": "Dr. Jones",
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
    esc(getVal('display-PID2')),
    '', // 3: Patient Identifier List
    '', // 4: Alt Patient ID
    esc(getVal('display-PID5')),
    '', // 6: Mother's Maiden Name
    esc(getVal('display-PID7')),
    esc(getVal('display-PID8')),
    '', // 9: Patient Alias
    esc(getVal('display-PID10')),
    esc(getVal('display-PID11address')) + '^' + esc(getVal('display-PID11address2')) + '^' + esc(getVal('display-PID11city')) + '^' + esc(getVal('display-PID11state')) + '^' + esc(getVal('display-PID11zip')),
    '', // 12: County
    esc(getVal('display-PID13')),
    '', // 14: Phone Business
    '', // 15: Primary Language
    '', // 16: Marital Status
    '', // 17: Religion
    '', // 18: Patient Account Number
    esc(getVal('display-PID19')),
    '', // 20: Driver's License
    '', // 21: Mother's Identifier
    esc(getVal('display-PID22')),
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
    // OBR: OBR|1|...|orderCode^orderDesc
    const obr = [
      'OBR',
      i+1,
      '', '', '',
      esc(orderCode) + '^' + esc(orderDesc),
      '', '', '', '', '', '', '', '', '', '',
      esc(getVal('display-OBR16')),
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
 * The JSON format matches what populateFormFromJSON() expects.
 */
window.exportJSONForFileMaker = function exportJSONForFileMaker() {
  const data = {};
  // Collect all display fields (span ids starting with display-)
  getAllDisplayFieldKeys().forEach(key => {
    const span = document.getElementById('display-' + key);
    if (span) {
      let jsonKey = key.replace(/([A-Z]+)([0-9]+)/g, '$1_$2');
      data[jsonKey] = span.textContent.trim();
    }
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

window.toggleSectionEdit = toggleSectionEdit;
window.populateFormFromJSON = populateFormFromJSON;

// Make aoeQuestions available globally for HL7 export
import aoeQuestions from './aoequestions.json';
window.aoeQuestions = aoeQuestions;
