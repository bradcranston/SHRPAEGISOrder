const sectionFields = {
  aegisLabSection: [
    { label: "Client ID", name: "MSH_4", type: "text", required: true },
    {
      label: "Date and Time",
      name: "MSH_7",
      type: "datetime-local",
      required: true,
    },
    { label: "Order Number", name: "MSH_10", type: "text", required: true },
  ],
  patientSection: [
    { label: "Patient ID", name: "PID_2", type: "text", required: true },
    {
      label: "Patient ID Type",
      name: "PID_2_5",
      type: "select",
      options: [
        { value: "", label: "Select" },
        { value: "MR", label: "Medical Record Number" },
        { value: "SS", label: "Social Security Number" },
        { value: "DL", label: "Driver's License" },
        { value: "PI", label: "Patient Internal Identifier" },
      ],
    },
    {
      label: "Patient Last Name",
      name: "PID_5_family",
      type: "text",
      required: true,
    },
    {
      label: "Patient First Name",
      name: "PID_5_given",
      type: "text",
      required: true,
    },
    {
      label: "Patient Middle Name/Initial",
      name: "PID_5_middle",
      type: "text",
    },
    {
      label: "Patient Suffix (Jr, III, etc)",
      name: "PID_5_suffix",
      type: "text",
    },
    { label: "Patient Prefix (Dr, etc)", name: "PID_5_prefix", type: "text" },
    { label: "DOB", name: "PID_7", type: "date", required: true },
    {
      label: "Administrative Sex",
      name: "PID_8",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select" },
        { value: "M", label: "Male" },
        { value: "F", label: "Female" },
        { value: "O", label: "Other" },
      ],
    },
    { label: "Race", name: "PID_10", type: "text" },
    { label: "Address", name: "PID_11_address", type: "text", required: true },
    { label: "Address 2", name: "PID_11_address2", type: "text" },
    { label: "City", name: "PID_11_city", type: "text", required: true },
    { label: "State", name: "PID_11_state", type: "text", required: true },
    { label: "Zip Code", name: "PID_11_zip", type: "text", required: true },
    { label: "Phone Number", name: "PID_13", type: "text", required: true },
    { label: "SSN", name: "PID_19", type: "text" },
    { label: "Ethnic Group", name: "PID_22", type: "text" },
  ],
  providerSection: [
    { label: "Referring Doctor", name: "PV1_8", type: "text" },
    { label: "Referring Doctor NPI", name: "PV1_8_NPI", type: "text" },
    { label: "Ordering Provider", name: "OBR_16", type: "text" },
    { label: "Ordering Provider NPI", name: "OBR_16_NPI", type: "text" },
    { label: "Collection Date/Time", name: "OBR_7", type: "datetime-local" },
    {
      label: "Specimen Source",
      name: "OBR_15",
      type: "select",
      options: [
        { value: "", label: "Select" },
        { value: "URINE", label: "Urine" },
        { value: "BLOOD", label: "Blood" },
        { value: "SALIVA", label: "Oral Fluid/Saliva" },
        { value: "HAIR", label: "Hair" },
        { value: "NAIL", label: "Nail" },
        { value: "OTHER", label: "Other" },
      ],
    },
    { label: "Specimen Matrix Code", name: "OBR_15_1", type: "text" },
    { label: "Bill Codes/Diagnosis Code", name: "DG1_3", type: "text" },
    {
      label: "Bill Type",
      name: "IN1_47",
      type: "select",
      options: [
        { value: "", label: "Select" },
        { value: "C", label: "Direct Bill (C)" },
        { value: "P", label: "Patient Bill (P)" },
        { value: "T", label: "Third Party (T)" },
      ],
    },
  ],
  insuranceSection: [
    { label: "Insurance Plan ID", name: "IN1_2", type: "text" },
    { label: "Insurance Company ID", name: "IN1_3", type: "text" },
    { label: "Insurance Company Name", name: "IN1_4", type: "text" },
    { label: "Insurance Company Address", name: "IN1_5_address", type: "text" },
    { label: "Address 2", name: "IN1_5_address2", type: "text" },
    { label: "City", name: "IN1_5_city", type: "text" },
    { label: "State", name: "IN1_5_state", type: "text" },
    { label: "Zip Code", name: "IN1_5_zip", type: "text" },
    { label: "Insured Last Name", name: "IN1_16_family", type: "text" },
    { label: "Insured First Name", name: "IN1_16_given", type: "text" },
    {
      label: "Insured Middle Name/Initial",
      name: "IN1_16_middle",
      type: "text",
    },
    {
      label: `Insured's Relationship to Patient`,
      name: "IN1_17",
      type: "select",
      options: [
        { value: "", label: "Select" },
        { value: "SEL", label: "Self" },
        { value: "SPO", label: "Spouse" },
        { value: "CHD", label: "Child" },
        { value: "OTH", label: "Other" },
        { value: "E", label: "Employee" },
      ],
    },
    { label: `Insured's DOB`, name: "IN1_18", type: "date" },
    { label: `Insured's Address`, name: "IN1_19_address", type: "text" },
    { label: "Address 2", name: "IN1_19_address2", type: "text" },
    { label: "City", name: "IN1_19_city", type: "text" },
    { label: "State", name: "IN1_19_state", type: "text" },
    { label: "Zip Code", name: "IN1_19_zip", type: "text" },
    { label: "Policy Number", name: "IN1_36", type: "text" },
    {
      label: `Insured's Administrative Sex`,
      name: "IN1_43",
      type: "select",
      options: [
        { value: "", label: "Select" },
        { value: "M", label: "Male" },
        { value: "F", label: "Female" },
        { value: "O", label: "Other" },
      ],
    },
    { label: "Coverage Type", name: "IN1_47", type: "text" },
  ],
  guarantorSection: [
    { label: "Guarantor Name", name: "GT1_3", type: "text" },
    { label: "Guarantor Address", name: "GT1_5_address", type: "text" },
    { label: "Address 2", name: "GT1_5_address2", type: "text" },
    { label: "City", name: "GT1_5_city", type: "text" },
    { label: "State", name: "GT1_5_state", type: "text" },
    { label: "Zip Code", name: "GT1_5_zip", type: "text" },
    { label: "Guarantor Phone Number", name: "GT1_6", type: "text" },
  ],
};

function toggleSectionEdit(sectionId) {
  const modal = document.getElementById("editModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  modalTitle.textContent = document.querySelector(
    `#${sectionId} h2`
  ).textContent;
  modalContent.innerHTML = "";
  const fields = sectionFields[sectionId];
  fields.forEach((field) => {
    let value =
      document.getElementById(
        "display-" + field.name.replace(/\./g, "").replace(/_/g, "")
      ).textContent || "";
    if (field.type === "select") {
      let select = document.createElement("select");
      select.name = field.name;
      select.className =
        "mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500";
      field.options.forEach((opt) => {
        let option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        if (value === opt.value) option.selected = true;
        select.appendChild(option);
      });
      modalContent.appendChild(labelWrap(field.label, select));
    } else {
      let input = document.createElement("input");
      input.type = field.type;
      input.name = field.name;
      input.value = value;
      input.required = !!field.required;
      input.className =
        "mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-sm";
      modalContent.appendChild(labelWrap(field.label, input));
    }
  });
  modal.classList.remove("hidden");
  document.getElementById("saveModalBtn").onclick = function () {
    saveSection(sectionId);
  };
}

function labelWrap(label, el) {
  let wrapper = document.createElement("label");
  wrapper.className = "block mb-2";
  wrapper.textContent = label;
  wrapper.appendChild(el);
  return wrapper;
}

document.getElementById("closeModalBtn").onclick = function () {
  document.getElementById("editModal").classList.add("hidden");
};

document.getElementById("editModal").addEventListener("click", function (e) {
  if (e.target === this) this.classList.add("hidden");
});

function saveSection(sectionId) {
  const modal = document.getElementById("editModal");
  const modalContent = document.getElementById("modalContent");
  const fields = sectionFields[sectionId];
  fields.forEach((field) => {
    let input = modalContent.querySelector(`[name='${field.name}']`);
    let displaySpan = document.getElementById(
      "display-" + field.name.replace(/\./g, "").replace(/_/g, "")
    );
    if (displaySpan) displaySpan.textContent = input.value;
  });
  modal.classList.add("hidden");
}

/**
 * Populates the form display fields and modal inputs from a JSON object.
 * @param {Object} data - Keys should use _ instead of . (e.g., 'PID_5', 'IN1_5_address').
 */
function getAllDisplayFieldKeys() {
  // Collect all display fields from sectionFields
  let keys = [];
  Object.values(sectionFields).forEach((fields) => {
    fields.forEach((field) => {
      keys.push(field.name.replace(/\./g, "").replace(/_/g, ""));
    });
  });
  return keys;
}

function populateFormFromJSON(json) {
  const data = typeof json === "string" ? JSON.parse(json) : json;
  if (!data || typeof data !== "object") return;

  // Handle backward compatibility for old PID_5 format (full name)
  if (
    data.PID_5 &&
    typeof data.PID_5 === "string" &&
    !data.PID_5_family &&
    !data.PID_5_given
  ) {
    const fullName = data.PID_5.trim();
    const nameParts = fullName.split(/\s+/);
    if (nameParts.length >= 2) {
      data.PID_5_family = nameParts[nameParts.length - 1]; // Last word as last name
      data.PID_5_given = nameParts[0]; // First word as first name
      if (nameParts.length > 2) {
        // Everything in between as middle name
        data.PID_5_middle = nameParts.slice(1, -1).join(" ");
      }
    } else if (nameParts.length === 1) {
      data.PID_5_family = fullName;
    }
    // Remove the old field
    delete data.PID_5;
  }

  // Handle backward compatibility for old IN1_16 format (full insured name)
  if (
    data.IN1_16 &&
    typeof data.IN1_16 === "string" &&
    !data.IN1_16_family &&
    !data.IN1_16_given
  ) {
    const fullName = data.IN1_16.trim();
    const nameParts = fullName.split(/\s+/);
    if (nameParts.length >= 2) {
      data.IN1_16_family = nameParts[nameParts.length - 1]; // Last word as last name
      data.IN1_16_given = nameParts[0]; // First word as first name
      if (nameParts.length > 2) {
        // Everything in between as middle name
        data.IN1_16_middle = nameParts.slice(1, -1).join(" ");
      }
    } else if (nameParts.length === 1) {
      data.IN1_16_family = fullName;
    }
    // Remove the old field
    delete data.IN1_16;
  }

  // Enhanced field mapping function
  function findValueForField(data, fieldName) {
    // Try multiple key formats for better compatibility
    const possibleKeys = [
      fieldName, // exact match (already in underscore format)
      fieldName.replace(/_/g, "."), // convert underscores to dots
      fieldName.replace(/\./g, "_"), // convert dots to underscores
      fieldName.replace(/\./g, ""), // remove dots
      fieldName.replace(/_/g, ""), // remove underscores
    ];

    for (const key of possibleKeys) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        return data[key];
      }
    }

    return undefined;
  }

  // Populate display spans for all fields
  Object.values(sectionFields).forEach((section) => {
    section.forEach((field) => {
      const displayId =
        "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
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
  const allModalInputs = document.querySelectorAll(
    "#editModal input, #editModal select"
  );
  allModalInputs.forEach((input) => {
    const value = findValueForField(data, input.name);
    if (value !== undefined) {
      input.value = value;
    }
  });
  // --- OBR/OBX dynamic population ---
  const obrContainer = document.getElementById("obrContainer");
  if (obrContainer) obrContainer.innerHTML = "";
  // Find all OBR indices
  const obrIndices = Array.from(
    new Set(
      Object.keys(data)
        .filter((k) => /^OBR\d+_OrderCode$/.test(k))
        .map((k) => k.match(/^OBR(\d+)_OrderCode$/)[1])
    )
  );
  obrIndices.forEach((idx) => {
    if (typeof window.addOBR === "function") window.addOBR();
    const obrSections = document.querySelectorAll(".obr-section");
    const obrSection = obrSections[obrSections.length - 1];
    if (!obrSection) return;
    const orderCodeInput = obrSection.querySelector('input[name="OrderCode"]');
    const orderDescInput = obrSection.querySelector(
      'input[name="OrderDescription"]'
    );
    if (orderCodeInput) {
      orderCodeInput.value = data[`OBR${idx}_OrderCode`] || "";
      orderCodeInput.dispatchEvent(new Event("input", { bubbles: true }));
      orderCodeInput.dispatchEvent(new Event("blur", { bubbles: true }));
    }
    if (orderDescInput) {
      setTimeout(() => {
        orderDescInput.value = data[`OBR${idx}_OrderDescription`] || "";
        orderDescInput.dispatchEvent(new Event("input", { bubbles: true }));
      }, 50);
    }
    if (orderCodeInput && typeof orderCodeInput.dispatchEvent === "function") {
      orderCodeInput.dispatchEvent(new Event("input", { bubbles: true }));
      orderCodeInput.dispatchEvent(new Event("blur", { bubbles: true }));
    }
    // OBX for this OBR
    // --- Begin robust OBX restoration logic ---
    const obxNums = Object.keys(data)
      .filter(
        (k) =>
          k.startsWith(`OBR${idx}_OBX`) &&
          k.match(new RegExp(`^OBR${idx}_OBX(\\d+)_Question$`))
      )
      .map((k) => k.match(new RegExp(`^OBR${idx}_OBX(\\d+)_Question$`))[1])
      .sort((a, b) => Number(a) - Number(b));
    const addObxBtn = obrSection.querySelector('button[onclick^="addOBX"]');
    if (addObxBtn) {
      if (obxNums.length > 0) {
        addObxBtn.classList.remove("hidden");
        addObxBtn.disabled = false;
        addObxBtn.style.display = "";
      } else {
        addObxBtn.classList.add("hidden");
        addObxBtn.disabled = true;
        addObxBtn.style.display = "none";
      }
    }
    obxNums.forEach((obxNum) => {
      // Try multiple approaches to add OBX section
      let obxSection = null;

      // Approach 1: Use addOBXForAoe if available
      const orderCode = data[`OBR${idx}_OrderCode`];
      const aoeQuestion = data[`OBR${idx}_OBX${obxNum}_Question`];
      let aoeObj = null;
      if (window.aoeQuestions && orderCode && aoeQuestion) {
        aoeObj = window.aoeQuestions.find(
          (q) => q.orderCode === orderCode && q.aoeQuestion === aoeQuestion
        );
      }
      if (aoeObj && obrSection.addOBXForAoe) {
        obrSection.addOBXForAoe(aoeObj);
        const obxSections = obrSection.querySelectorAll(".obx-section");
        obxSection = obxSections[obxSections.length - 1];
      }

      // Approach 2: Click add button if available
      if (!obxSection && addObxBtn) {
        addObxBtn.click();
        const obxSections = obrSection.querySelectorAll(".obx-section");
        obxSection = obxSections[obxSections.length - 1];
      }

      // Approach 3: Manually create OBX from template
      if (!obxSection) {
        const obxTemplate = document.getElementById("obxTemplate");
        if (obxTemplate) {
          const obxContainer = obrSection.querySelector(".obxContainer");
          if (obxContainer) {
            const obxClone = obxTemplate.content.cloneNode(true);
            obxContainer.appendChild(obxClone);
            const obxSections = obrSection.querySelectorAll(".obx-section");
            obxSection = obxSections[obxSections.length - 1];
          }
        }
      }

      // Populate the OBX section if we have one
      if (obxSection) {
        const qInput = obxSection.querySelector('input[name="Question"]');
        const aInput = obxSection.querySelector('input[name="Answer"]');
        if (qInput)
          qInput.value = data[`OBR${idx}_OBX${obxNum}_Question`] || "";
        if (aInput) aInput.value = data[`OBR${idx}_OBX${obxNum}_Answer`] || "";

        // Set the aoeId if we have the aoeObj
        if (aoeObj && aoeObj.aoeId) {
          obxSection.setAttribute("data-aoeid", aoeObj.aoeId);
        }
      }
    });
    // --- End robust OBX restoration logic ---
    // --- Retrigger UI show/hide logic for OBR/OBX ---
    if (typeof window.updateObrObxUi === "function") {
      window.updateObrObxUi(obrSection);
    } else {
      // Fallback: dispatch a custom event or force reflow if needed
      obrSection.dispatchEvent(new Event("uiupdate", { bubbles: true }));
    }
  });
  // After all OBR/OBX, retrigger global UI update if available
  if (typeof window.updateObrObxUiGlobal === "function") {
    window.updateObrObxUiGlobal();
  }
}

// --- update exportHL7ForFileMaker ---
window.exportHL7ForFileMaker = function exportHL7ForFileMaker() {
  // Validate form before export
  const validation = validateForm();
  if (!validation.isValid) {
    console.error("Cannot export HL7 - validation failed:", validation.errors);
    alert("Cannot export data - please fix validation errors first");
    return;
  }

  // Helper to escape HL7 special chars
  function esc(val) {
    return (val || "")
      .replace(/\|/g, "\\F\\")
      .replace(/\^/g, "\\S\\")
      .replace(/~/g, "\\R\\")
      .replace(/&/g, "\\T\\");
  }
  // Get display value by id
  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.textContent.trim() : "";
  }
  // Format date/time as YYYYMMDDHH24MI (e.g., 20120917125209)
  function formatHL7Date(dt) {
    if (!dt) return "";
    // Accepts ISO, local, or FileMaker style
    let d = new Date(dt);
    if (isNaN(d.getTime())) {
      // Try to parse as "YYYY-MM-DDTHH:MM" (HTML datetime-local)
      const m =
        /^([0-9]{4})-([0-9]{2})-([0-9]{2})[T ]([0-9]{2}):([0-9]{2})/.exec(dt);
      if (m) {
        return m[1] + m[2] + m[3] + m[4] + m[5] + "00";
      }
      return "";
    }
    const pad = (n) => n.toString().padStart(2, "0");
    return (
      d.getFullYear().toString() +
      pad(d.getMonth() + 1) +
      pad(d.getDate()) +
      pad(d.getHours()) +
      pad(d.getMinutes()) +
      pad(d.getSeconds())
    );
  }

  // Format date only (YYYYMMDD) for DOB and other date-only fields
  function formatHL7DateOnly(dt) {
    if (!dt) return "";
    // Always prefer manual parsing for YYYY-MM-DD to avoid timezone issues
    const m = /^([0-9]{4})-([0-9]{2})-([0-9]{2})/.exec(dt);
    if (m) {
      return m[1] + m[2] + m[3];
    }
    // Fallback: try Date object for other formats
    let d = new Date(dt);
    if (isNaN(d.getTime())) return "";
    const pad = (n) => n.toString().padStart(2, "0");
    return (
      d.getFullYear().toString() + pad(d.getMonth() + 1) + pad(d.getDate())
    );
  }

  // Format patient name according to HL7 XPN data type
  // XPN: <Family Name>^<Given Name>^<Second and Further Given Names>^<Suffix>^<Prefix>^^<Name Type Code>
  function formatPatientName() {
    const family = esc(getVal("display-PID5family"));
    const given = esc(getVal("display-PID5given"));
    const middle = esc(getVal("display-PID5middle"));
    const suffix = esc(getVal("display-PID5suffix"));
    const prefix = esc(getVal("display-PID5prefix"));

    // Format as Family^Given^Middle^Suffix^Prefix^^L (L = Legal name type)
    return `${family}^${given}^${middle}^${suffix}^${prefix}^^L`;
  }

  // Generic XPN formatter for any name fields
  // XPN: <Family Name>^<Given Name>^<Second and Further Given Names>^<Suffix>^<Prefix>
  function formatXPN(family, given, middle, suffix, prefix) {
    const parts = [
      esc(family || ""),
      esc(given || ""),
      esc(middle || ""),
      esc(suffix || ""),
      esc(prefix || ""),
    ];

    // Remove trailing empty parts to avoid unnecessary carets
    while (parts.length > 0 && parts[parts.length - 1] === "") {
      parts.pop();
    }

    return parts.join("^");
  }

  // Format a full name string into XPN format by parsing it
  // Input: "Dr. John Michael Smith Jr." or "Smith, John" or "John Smith"
  // Output: "Smith^John^Michael^Jr^Dr"
  function formatNameWithCarets(fullName) {
    if (!fullName || typeof fullName !== "string") return "";

    const name = fullName.trim();
    if (!name) return "";

    // Handle comma-separated format: "Last, First Middle"
    if (name.includes(",")) {
      const parts = name.split(",").map((p) => p.trim());
      if (parts.length >= 2) {
        const lastName = parts[0];
        const firstMiddle = parts[1].split(/\s+/);
        const firstName = firstMiddle[0] || "";
        const middleName = firstMiddle.slice(1).join(" ") || "";
        return formatXPN(lastName, firstName, middleName);
      }
    }

    // Handle space-separated format: "Dr. John Michael Smith Jr."
    const nameParts = name.split(/\s+/);
    if (nameParts.length === 1) {
      // Single name, treat as last name
      return formatXPN(nameParts[0]);
    }

    let prefix = "",
      suffix = "",
      firstName = "",
      lastName = "",
      middleName = "";

    // Check for common prefixes
    const prefixes = [
      "Dr",
      "Dr.",
      "Mr",
      "Mr.",
      "Mrs",
      "Mrs.",
      "Ms",
      "Ms.",
      "Miss",
      "Prof",
      "Prof.",
    ];
    if (prefixes.some((p) => nameParts[0].toLowerCase() === p.toLowerCase())) {
      prefix = nameParts.shift();
    }

    // Check for common suffixes
    const suffixes = [
      "Jr",
      "Jr.",
      "Sr",
      "Sr.",
      "II",
      "III",
      "IV",
      "V",
      "MD",
      "PhD",
      "RN",
      "NP",
    ];
    if (
      nameParts.length > 1 &&
      suffixes.some(
        (s) => nameParts[nameParts.length - 1].toLowerCase() === s.toLowerCase()
      )
    ) {
      suffix = nameParts.pop();
    }

    // Remaining parts: assume first name, middle names, last name
    if (nameParts.length >= 2) {
      firstName = nameParts[0];
      lastName = nameParts[nameParts.length - 1];
      if (nameParts.length > 2) {
        middleName = nameParts.slice(1, -1).join(" ");
      }
    } else if (nameParts.length === 1) {
      lastName = nameParts[0];
    }

    return formatXPN(lastName, firstName, middleName, suffix, prefix);
  }

  // Format diagnosis code in CWE format for DG1.3
  // CWE: <Identifier>^<Text>^<Name of Coding System>
  // Input: "Z79.899^Other long term (current) drug therapy^I10" or "Z79.899" (code only)
  // Output: Properly formatted CWE with I10 as default coding system
  function formatDiagnosisCode(diagnosisInput) {
    if (!diagnosisInput || typeof diagnosisInput !== "string") return "";

    const input = diagnosisInput.trim();
    if (!input) return "";

    // Special case: if input is just "I10", return "Opioid Dependence^^I10"
    if (input === "I10") {
      return "Opioid Dependence^^I10";
    }

    // If already in CWE format (contains carets), validate and escape
    if (input.includes("^")) {
      const parts = input.split("^");
      if (parts.length >= 3) {
        // Already has code^description^coding_system format
        return esc(parts[0]) + "^" + esc(parts[1]) + "^" + esc(parts[2]);
      } else if (parts.length === 2) {
        // Has code^description, add default coding system
        return esc(parts[0]) + "^" + esc(parts[1]) + "";
      } else {
        // Only code with caret, treat as code only
        return esc(parts[0]) + "";
      }
    }

    // If just a code (no carets), format with default coding system
    // For ICD-10 codes, use I10 as the coding system per HL7 Table 396
    return esc(input) + "^^";
  }

  // Format provider name with NPI for OBR.16
  // XCN Format: <ID>^<Family Name>^<Given Name>^<Middle Name>^^^^^<Assigning Authority>
  // Example: 1354275899^Clark^Allan^^^^NPI
  function formatOrderingProvider() {
    // Format Ordering Provider XCN with NPI if provided
    const rawName = getVal("display-OBR16");
    const npi = esc(getVal("display-OBR16NPI"));
    // Parse name components
    let lastName = "",
      firstName = "",
      middle = "";
    if (rawName) {
      const parts = rawName.split(/\s+/);
      lastName = esc(parts[parts.length - 1] || "");
      firstName = esc(parts[0] || "");
      middle = esc(parts.length > 2 ? parts.slice(1, -1).join(" ") : "");
    }
    // If NPI provided, always use XCN with NPI assigning authority
    if (npi) {
      return `${npi}^${lastName}^${firstName}^${middle}^^^^^NPI`;
    }
    // Otherwise, if name provided, return basic XPN
    if (rawName) {
      return `${lastName}^${firstName}^${middle}^${npi}`;
    }
    return "";
  }

  // Format referring doctor with NPI for PV1.8
  // XCN Format: <ID>^<Family Name>^<Given Name>^<Middle Name>^^^^^<Assigning Authority>
  function formatReferringProvider() {
    const rawName = getVal("display-PV18");
    const npiRaw = getVal("display-OBR16NPI");
    const npi = esc(npiRaw);

    // Parse name components
    let lastName = "",
      firstName = "",
      middle = "";
    if (rawName) {
      const parts = rawName.split(/\s+/);
      lastName = esc(parts[parts.length - 1] || "");
      firstName = esc(parts[0] || "");
      middle = esc(parts.length > 2 ? parts.slice(1, -1).join(" ") : "");
    }

    // If NPI provided (and not empty after trimming), always use XCN with NPI assigning authority
    if (npiRaw && npiRaw.trim()) {
      return `${npi}^${lastName}^${firstName}`;
    }
    // Otherwise, if name provided, return basic XPN
    if (rawName) {
      return `${npi}^${lastName}^${firstName}`;
    }
    return "";
  }

  // MSH
  const msh4 = getVal("display-MSH4");
  const msh7raw = getVal("display-MSH7");
  const msh7 = formatHL7Date(msh7raw);
  const msh10 = getVal("display-MSH10") || "1"; // Default to '1' if empty
  const msh = `MSH|^~\\&|Aegis|${esc(msh4)}|FileMaker|FM|${esc(
    msh7
  )}||ORM^O01|${esc(msh10)}|P|2.3.1`;
  const pid = [
    "PID",
    "1", // 1: Set ID
    esc(getVal("display-PID2")) + "^^^" + esc(getVal("display-PID25")), // 2: Patient ID with type
    "", // 3: Patient Identifier List
    "", // 4: Alt Patient ID
    formatPatientName(), // 5: Patient Name (XPN format)
    "", // 6: Mother's Maiden Name
    formatHL7DateOnly(getVal("display-PID7")), // 7: DOB (formatted as YYYYMMDD)
    esc(getVal("display-PID8")), // 8: Administrative Sex
    "", // 9: Patient Alias
    esc(getVal("display-PID10")), // 10: Race
    esc(getVal("display-PID11address")) +
      "^" +
      esc(getVal("display-PID11address2")) +
      "^" +
      esc(getVal("display-PID11city")) +
      "^" +
      esc(getVal("display-PID11state")) +
      "^" +
      esc(getVal("display-PID11zip")), // 11: Address
    "", // 12: County
    esc(getVal("display-PID13")), // 13: Phone Number
    "", // 14: Phone Business
    "", // 15: Primary Language
    "", // 16: Marital Status
    "", // 17: Religion
    "", // 18: Patient Account Number
    esc(getVal("display-PID19")), // 19: SSN
    "", // 20: Driver's License
    "", // 21: Mother's Identifier
    esc(getVal("display-PID22")), // 22: Ethnic Group
  ].join("|");
  // IN1 (Insurance)
  const in1 = [
    "IN1",
    "1", // 1: Set ID
    "", // 2: Insurance Plan ID
    esc(getVal("display-IN13")), // 3: Insurance Company ID
    esc(getVal("display-IN14")), // 4: Insurance Company Name
    esc(getVal("display-IN15address")) +
      "^" +
      esc(getVal("display-IN15address2")) +
      "^" +
      esc(getVal("display-IN15city")) +
      "^" +
      esc(getVal("display-IN15state")) +
      "^" +
      esc(getVal("display-IN15zip")), // 5: Insurance Company Address
    "", // 6: Phone
    "", // 7: Group Number
    "", // 8: Group Name
    "", // 9: Insured's Group Emp ID
    "", // 10: Insured's Group Emp Name
    "", // 11: Plan Effective Date
    "", // 12: Plan Expiration Date
    "", // 13: Authorization Information
    "", // 14: Plan Type
    "", // 15: Name of Insured
    formatXPN(
      getVal("display-IN116family"),
      getVal("display-IN116given"),
      getVal("display-IN116middle")
    ), // 16: Insured's Name (XPN format)
    esc(getVal("display-IN117")), // 17: Insured's Relationship to Patient
    formatHL7DateOnly(getVal("display-IN118")), // 18: Insured's Date of Birth (formatted as YYYYMMDD)
    esc(getVal("display-IN119address")) +
      "^" +
      esc(getVal("display-IN119address2")) +
      "^" +
      esc(getVal("display-IN119city")) +
      "^" +
      esc(getVal("display-IN119state")) +
      "^" +
      esc(getVal("display-IN119zip")), // 19: Insured's Address
    "", // 20: Assignment of Benefits
    "", // 21: Coordination of Benefits
    "", // 22: Coord of Benefits Priority
    "", // 23: Notice of Admission Flag
    "", // 24: Notice of Admission Date
    "", // 25: Report of Eligibility Flag
    "", // 26: Report of Eligibility Date
    "", // 27: Release Information Code
    "", // 28: Pre-Admit Cert
    "", // 29: Verification Date/Time
    "", // 30: Verification By
    "", // 31: Type of Agreement Code
    "", // 32: Billing Status
    "", // 33: Lifetime Reserve Days
    "", // 34: Delay Before L.R. Days
    "", // 35: Company Plan Code
    esc(getVal("display-IN136")), // 36: Policy Number
    "", // 38: Policy Deductible
    "", // 39: Policy Limit Amount
    "", // 40: Policy Limit Days
    "", // 41: Room Rate Semi-Private
    "", // 42: Room Rate Private
    "", // 45: Insured's Employer Address
    esc(getVal("display-IN143")), // 43: Insured's Administrative Sex
    "", // 46: Verification Status
    "", // 46: Verification Status
    "", // 46: Verification Status
    esc(getVal("display-IN147")), // 47: Billing Indicator
  ].join("|");
  // GT1 (Guarantor)
  const gt1 = [
    "GT1",
    "1", // 1: Set ID
    "", // 2: Guarantor Number
    formatNameWithCarets(getVal("display-GT13")), // 3: Guarantor Name (XPN format with carets)
    "", // 4: Guarantor Spouse Name
    esc(getVal("display-GT15address")) +
      "^" +
      esc(getVal("display-GT15address2")) +
      "^" +
      esc(getVal("display-GT15city")) +
      "^" +
      esc(getVal("display-GT15state")) +
      "^" +
      esc(getVal("display-GT15zip")), // 5: Guarantor Address
    esc(getVal("display-GT16")), // 6: Guarantor Phone Number
  ].join("|");
  // OBR/OBX (dynamic)
  const obrSections = document.querySelectorAll(".obr-section");
  let obrObxSegments = [];
  obrSections.forEach((obrSection, i) => {
    const orderCode = obrSection.querySelector('input[name="OrderCode"]').value;
    const orderDesc = obrSection.querySelector(
      'input[name="OrderDescription"]'
    ).value;
    const collectionDateTime = formatHL7Date(getVal("display-OBR7"));
    const specimenSource = getVal("display-OBR15");
    const specimenMatrixCode = getVal("display-OBR151");

    // OBR: OBR|1|Order#||orderCode^orderDesc|collectionDateTime|||specimenSource^specimenMatrixCode||||||||orderingProvider
    // Determine Ordering Provider XCN
    const obrProvider = (() => {
      const npi = esc(getVal("display-OBR16NPI"));
      const name = getVal("display-OBR16");
      if (npi) {
        // Parse name components
        const parts = name ? name.split(/\s+/) : [];
        const last = esc(parts[parts.length - 1] || "");
        const first = esc(parts[0] || "");
        const middle = esc(
          parts.length > 2 ? parts.slice(1, -1).join(" ") : ""
        );
        return `${npi}^${last}^${first}^${middle}^^^^^NPI`;
      }
      // Fallback to name only
      const caretName = name ? formatNameWithCarets(name) : "";
      return caretName;
    })();
    const obr = [
      "OBR",
      i + 1, // 1: Set ID
      esc(getVal("display-MSH10")), // 2: Placer Order Number (using order number from MSH)
      "", // 3: Filler Order Number
      esc(orderCode) + "^" + esc(orderDesc), // 4: Universal Service ID
      "", // 5: Priority
      "", // 6: Requested Date/Time
      esc(collectionDateTime), // 7: Observation Date/Time
      new Date().toISOString().slice(0, 10).replace(/-/g, ""), // 8: Observation End Date/Time (current date YYYYMMDD)
      "", // 9: Collection Volume
      "", // 10: Collector Identifier
      "", // 11: Specimen Action Code
      "", // 12: Danger Code
      "", // 13: Relevant Clinical Info
      "", // 14: Specimen Received Date/Time
      esc(specimenSource) +
        (specimenMatrixCode ? "^" + esc(specimenMatrixCode) : ""), // 15: Specimen Source
      // 16: Ordering Provider (XCN with NPI)
      obrProvider,
    ].join("|");
    obrObxSegments.push(obr);
    // OBX (AOE) for this OBR
    const obxSections = obrSection.querySelectorAll(".obx-section");
    obxSections.forEach((obxSection, j) => {
      let aInput = obxSection.querySelector('input[name="Answer"]');
      let answer = aInput ? aInput.value : "";
      let aoeId = obxSection.getAttribute("data-aoeid") || "";
      // OBX: OBX|1|ST|aoeId||answer
      const obx = ["OBX", j + 1, "ST", aoeId, "", esc(answer)].join("|");
      obrObxSegments.push(obx);
    });
  });
  // PV1 (Provider)
  const pv1 = [
    "PV1",
    "1",
    "",
    "",
    "",
    "",
    "",
    formatReferringProvider(), // 8: Referring Doctor with NPI (XCN format)
  ].join("|");
  // DG1 (Diagnosis)
  // Compute CWE code composite and populate coding method
  const dg1Code = formatDiagnosisCode(getVal("display-DG13"));
  const dg1 = [
    "DG1",
    "1", // 1: Set ID
    "", // 2: Diagnosis Coding Method (empty)
    dg1Code, // 3: Diagnosis Code (CWE format: code^description^coding_system)
  ].join("|");
  // ORC (Common Order) segment: order control and order number
  // ORC segment: Common Order, include Ordering Provider in ORC.12
  const orc = [
    "ORC",
    "NW", // 1: Order Control
    esc(getVal("display-MSH10")), // 2: Placer Order Number
    "", // 3: Filler Order Number
    "", // 4: Placer Group Number
    "", // 5: Order Status
    "", // 6: Response Flag
    "", // 7: Quantity/Timing
    "", // 8: Parent Order
    "", // 9: Date/Time of Transaction
    "", // 10: Entered By
    "", // 11: Verified By
    formatOrderingProvider(), // 12: Ordering Provider (XCN with NPI)
  ].join("|");
  // Compose HL7 message
  const hl7 = [msh, pid, in1, gt1, pv1, dg1, orc, ...obrObxSegments].join("\r");
  // Call FileMaker script if available
  if (
    window.FileMaker &&
    typeof window.FileMaker.PerformScript === "function"
  ) {
    window.FileMaker.PerformScript("ImportHL7FromWeb", hl7);
  } else {
    alert("HL7 message generated (FileMaker not detected):\n" + hl7);
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
    console.error("Cannot export JSON - validation failed:", validation.errors);
    alert("Cannot export data - please fix validation errors first");
    return;
  }

  const data = {};

  // Collect all display fields using the sectionFields definition
  Object.values(sectionFields).forEach((section) => {
    section.forEach((field) => {
      const displayId =
        "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
      const span = document.getElementById(displayId);
      if (span) {
        // Field name is already in the correct underscore format
        data[field.name] = span.textContent.trim();
      }
    });
  });

  // Add OBR/OBX dynamic data (flattened as OBR1_OrderCode, OBR1_OBX1_Question, etc.)
  let obrSections = document.querySelectorAll(".obr-section");
  obrSections.forEach((obrSection, i) => {
    const obrIdx = i + 1;
    const orderCode = obrSection.querySelector('input[name="OrderCode"]').value;
    const orderDesc = obrSection.querySelector(
      'input[name="OrderDescription"]'
    ).value;
    data[`OBR${obrIdx}_OrderCode`] = orderCode;
    data[`OBR${obrIdx}_OrderDescription`] = orderDesc;
    // OBX (AOE) for this OBR
    const obxSections = obrSection.querySelectorAll(".obx-section");
    obxSections.forEach((obxSection, j) => {
      const obxIdx = j + 1;
      let qInput = obxSection.querySelector('input[name="Question"]');
      let aInput = obxSection.querySelector('input[name="Answer"]');
      let question = qInput ? qInput.value : "";
      let answer = aInput ? aInput.value : "";
      data[`OBR${obrIdx}_OBX${obxIdx}_Question`] = question;
      data[`OBR${obrIdx}_OBX${obxIdx}_Answer`] = answer;
    });
  });
  const json = JSON.stringify(data);
  if (
    window.FileMaker &&
    typeof window.FileMaker.PerformScript === "function"
  ) {
    window.FileMaker.PerformScript("ImportJSONFromWeb", json);
  } else {
    alert("JSON generated (FileMaker not detected):\n" + json);
  }
};

/**
 * Calls FileMaker script to cancel the lab order
 */
window.cancelLabOrder = function cancelLabOrder() {
  // Confirm the cancellation with the user
  if (
    confirm(
      "Are you sure you want to cancel this lab order? This action cannot be undone."
    )
  ) {
    try {
      // Call the FileMaker script
      if (window.FileMaker && window.FileMaker.PerformScript) {
        window.FileMaker.PerformScript("CancelLabOrder");
        console.log('FileMaker script "CancelLabOrder" executed successfully');
      } else {
        console.log('FileMaker script "CancelLabOrder" would be called here');
        alert("Cancel order request sent to FileMaker");
      }
    } catch (error) {
      console.error('Error calling FileMaker script "CancelLabOrder":', error);
      alert("Error canceling order. Please try again.");
    }
  }
};

/**
 * Clear all form fields
 */
window.clearForm = function clearForm() {
  // Clear all display spans
  getAllDisplayFieldKeys().forEach((key) => {
    const displaySpan = document.getElementById("display-" + key);
    if (displaySpan) {
      displaySpan.textContent = "";
    }
  });

  // Clear modal inputs
  const allModalInputs = document.querySelectorAll(
    "#editModal input, #editModal select"
  );
  allModalInputs.forEach((input) => {
    input.value = "";
  });

  // Clear OBR/OBX sections
  const obrContainer = document.getElementById("obrContainer");
  if (obrContainer) {
    obrContainer.innerHTML = "";
  }

  console.log("Form cleared");
};

// Export functions to window for global access
window.toggleSectionEdit = toggleSectionEdit;
window.populateFormFromJSON = populateFormFromJSON;

// Make aoeQuestions available globally for HL7 export
import aoeQuestions from "./aoequestions.json";
window.aoeQuestions = aoeQuestions;

/**
 * Verify all fields from the mapping table are present in the UI and functions
 */
window.verifyFieldMapping = function verifyFieldMapping() {
  const mappingTable = [
    {
      label: "Aegis Lab Information",
      field: "aegisLabSection",
      hl7: "MSH",
      subfields: null,
    },
    { label: "Client ID", field: "MSH.4", hl7: "MSH.4", subfields: null },
    { label: "Date and Time", field: "MSH.7", hl7: "MSH.7", subfields: null },
    { label: "Order Number", field: "MSH.10", hl7: "MSH.10", subfields: null },
    {
      label: "Patient Address",
      field: "PID.11",
      hl7: "PID.11",
      subfields: ["address", "address2", "city", "state", "zip"],
    },
    {
      label: "Patient Phone Number",
      field: "PID.13",
      hl7: "PID.13",
      subfields: null,
    },
    {
      label: "Patient ID",
      field: "PID.2",
      hl7: "PID.2/PID.3",
      subfields: null,
    },
    {
      label: "Patient ID Type",
      field: "PID.2.5",
      hl7: "PID.2.5",
      subfields: null,
    },
    { label: "Patient Name", field: "PID.5", hl7: "PID.5", subfields: null },
    { label: "Patient DOB", field: "PID.7", hl7: "PID.7", subfields: null },
    {
      label: "Patient Administrative Sex",
      field: "PID.8",
      hl7: "PID.8",
      subfields: null,
    },
    { label: "Patient Race", field: "PID.10", hl7: "PID.10", subfields: null },
    { label: "SSN - Patient", field: "PID.19", hl7: "PID.19", subfields: null },
    {
      label: "Patient Ethnic Group",
      field: "PID.22",
      hl7: "PID.22",
      subfields: null,
    },
    {
      label: "Referring Doctor",
      field: "PV1.8",
      hl7: "PV1.8",
      subfields: null,
    },
    {
      label: "Ordering Provider",
      field: "OBR.16",
      hl7: "OBR.16",
      subfields: null,
    },
    {
      label: "Collection Date and Time",
      field: "OBR.7",
      hl7: "OBR.7",
      subfields: null,
    },
    {
      label: "Specimen Matrix Code (Source)",
      field: "OBR.15",
      hl7: "OBR.15",
      subfields: null,
    },
    {
      label: "Specimen Matrix Code",
      field: "OBR.15.1",
      hl7: "OBR.15.1",
      subfields: null,
    },
    {
      label: "Bill Codes/Diagnosis Code",
      field: "DG1.3",
      hl7: "DG1.3",
      subfields: null,
    },
    { label: "Bill Type", field: "IN1.47", hl7: "IN1.47", subfields: null },
    {
      label: "Insurance Company ID",
      field: "IN1.3",
      hl7: "IN1.3",
      subfields: null,
    },
    {
      label: "Insurance Company name",
      field: "IN1.4",
      hl7: "IN1.4",
      subfields: null,
    },
    {
      label: "Insurance Company Address",
      field: "IN1.5",
      hl7: "IN1.5",
      subfields: ["address", "address2", "city", "state", "zip"],
    },
    { label: "Insured Name", field: "IN1.16", hl7: "IN1.16", subfields: null },
    {
      label: "Insured's Relationship to the Patient",
      field: "IN1.17",
      hl7: "IN1.17",
      subfields: null,
    },
    { label: "Insured's DOB", field: "IN1.18", hl7: "IN1.18", subfields: null },
    {
      label: "Insured's Address",
      field: "IN1.19",
      hl7: "IN1.19",
      subfields: ["address", "address2", "city", "state", "zip"],
    },
    { label: "Policy Number", field: "IN1.36", hl7: "IN1.36", subfields: null },
    {
      label: "Insured's Administrative Sex",
      field: "IN1.43",
      hl7: "IN1.43",
      subfields: null,
    },
    { label: "Guarantor Name", field: "GT1.3", hl7: "GT1.3", subfields: null },
    {
      label: "Guarantor Address",
      field: "GT1.5",
      hl7: "GT1.5",
      subfields: ["address", "address2", "city", "state", "zip"],
    },
    {
      label: "Guarantor Phone Number",
      field: "GT1.6",
      hl7: "GT1.6",
      subfields: null,
    },
    { label: "AOEs Question", field: "OBX.3", hl7: "OBX3", subfields: null },
    { label: "AOE Answers", field: "OBX.5", hl7: "OBX.5", subfields: null },
    {
      label: "Aegis Order Description",
      field: "OBR.4",
      hl7: "OBR4",
      subfields: null,
    },
    { label: "Aegis Order Code", field: "OBR.4", hl7: "OBR4", subfields: null },
  ];

  const results = {
    found: [],
    missing: [],
    htmlMissing: [],
    jsMissing: [],
  };

  mappingTable.forEach((item) => {
    const fieldName = item.field;
    const displayId =
      "display-" + fieldName.replace(/\./g, "").replace(/_/g, "");

    // Check if field is defined in sectionFields
    let foundInJS = false;
    Object.values(sectionFields).forEach((section) => {
      if (section.find((f) => f.name === fieldName)) {
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

  console.log("Field Mapping Verification Results:");
  console.log("✓ Found fields:", results.found.length);
  console.log("✗ Missing fields:", results.missing.length);

  if (results.missing.length > 0) {
    console.log(
      "Missing from JavaScript:",
      results.jsMissing.map((f) => f.field)
    );
    console.log(
      "Missing from HTML:",
      results.htmlMissing.map((f) => f.field)
    );
  }

  return results;
};

/**
 * Debug function to check field name mappings
 */
window.debugFieldMapping = function debugFieldMapping() {
  console.log("=== DEBUG: Field Name Mapping ===");

  Object.entries(sectionFields).forEach(([sectionName, fields]) => {
    console.log(`\nSection: ${sectionName}`);
    fields.forEach((field) => {
      const displayId =
        "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
      const element = document.getElementById(displayId);
      const jsonKey = field.name.replace(/\./g, "_");

      console.log(`  Field: ${field.name}`);
      console.log(`  Display ID: ${displayId}`);
      console.log(`  JSON Key: ${jsonKey}`);
      console.log(`  Element exists: ${!!element}`);

      if (element) {
        console.log(`  Current value: "${element.textContent}"`);
      }
    });
  });

  return "Check console for field mapping details";
};

/**
 * Validates the form before submission
 * @returns {Object} validation result with isValid boolean and errors array
 */
function validateForm() {
  const errors = [];

  // Check if there's at least one order request
  const obrSections = document.querySelectorAll(".obr-section");
  if (obrSections.length === 0) {
    errors.push("At least one order request is required");
    return { isValid: false, errors };
  }

  // Validate all required fields from sectionFields
  Object.values(sectionFields).forEach((fields) => {
    fields.forEach((field) => {
      if (field.required) {
        const displayId =
          "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
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
    const orderDescInput = obrSection.querySelector(
      'input[name="OrderDescription"]'
    );

    if (!orderCodeInput || !orderCodeInput.value.trim()) {
      errors.push(`Order Code is required for Order Request ${index + 1}`);
    }

    if (!orderDescInput || !orderDescInput.value.trim()) {
      errors.push(
        `Order Description is required for Order Request ${index + 1}`
      );
    }

    // Validate OBX (observation) fields within this order request
    const obxSections = obrSection.querySelectorAll(".obx-section");
    obxSections.forEach((obxSection, obxIndex) => {
      const questionInput = obxSection.querySelector('input[name="Question"]');
      const answerInput = obxSection.querySelector('input[name="Answer"]');

      if (!questionInput || !questionInput.value.trim()) {
        errors.push(
          `Observation Question is required for Observation ${
            obxIndex + 1
          } in Order Request ${index + 1}`
        );
      }

      if (!answerInput || !answerInput.value.trim()) {
        errors.push(
          `Observation Answer is required for Observation ${
            obxIndex + 1
          } in Order Request ${index + 1}`
        );
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
  const errorDiv = document.getElementById("validationError");
  const errorMessage = document.getElementById("validationErrorMessage");

  if (errors.length > 0) {
    errorMessage.innerHTML =
      "<strong>Please fix the following errors:</strong><ul>" +
      errors.map((error) => `<li>${error}</li>`).join("") +
      "</ul>";
    errorDiv.classList.remove("hidden");

    // Highlight empty required fields
    highlightEmptyRequiredFields();

    // Scroll to error message
    errorDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    errorDiv.classList.add("hidden");
  }
}

/**
 * Hides validation errors
 */
function hideValidationErrors() {
  const errorDiv = document.getElementById("validationError");
  errorDiv.classList.add("hidden");

  // Remove field highlights
  removeFieldHighlights();
}

/**
 * Form submission handler with validation
 */
function handleFormSubmit(event) {
  event.preventDefault();

  console.log("Form submission attempted...");

  const validation = validateForm();

  if (!validation.isValid) {
    console.log("Validation failed, preventing FileMaker script execution");
    showValidationErrors(validation.errors);
    return false;
  }

  console.log(
    "Validation passed, proceeding with FileMaker script execution..."
  );
  hideValidationErrors();

  // Only execute FileMaker scripts if validation passes
  if (window.exportJSONForFileMaker) {
    try {
      window.exportJSONForFileMaker();
      console.log("FileMaker JSON export executed successfully");
    } catch (error) {
      console.error("Error executing FileMaker JSON export:", error);
    }
  }

  if (window.exportHL7ForFileMaker) {
    try {
      window.exportHL7ForFileMaker();
      console.log("FileMaker HL7 export executed successfully");
    } catch (error) {
      console.error("Error executing FileMaker HL7 export:", error);
    }
  }

  return true;
}

// Add event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }

  // Add required field indicators
  addRequiredFieldIndicators();

  // Hide validation errors when user starts editing
  document.addEventListener("input", function (e) {
    if (e.target.matches("input, select, textarea")) {
      hideValidationErrors();
    }
  });
});

/**
 * Adds visual indicators for required fields
 */
function addRequiredFieldIndicators() {
  Object.values(sectionFields).forEach((fields) => {
    fields.forEach((field) => {
      if (field.required) {
        const displayId =
          "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
        const displaySpan = document.getElementById(displayId);

        if (displaySpan) {
          // Find the label element (parent div contains the label)
          const parentDiv = displaySpan.closest(".flex");
          if (parentDiv) {
            const labelSpan = parentDiv.querySelector(".font-semibold");
            if (labelSpan && !labelSpan.querySelector(".text-red-500")) {
              // Add red asterisk to indicate required field
              const asterisk = document.createElement("span");
              asterisk.className = "text-red-500 ml-1";
              asterisk.textContent = "*";
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
  document.querySelectorAll(".border-red-500").forEach((el) => {
    el.classList.remove("border-red-500");
  });

  Object.values(sectionFields).forEach((fields) => {
    fields.forEach((field) => {
      if (field.required) {
        const displayId =
          "display-" + field.name.replace(/\./g, "").replace(/_/g, "");
        const displaySpan = document.getElementById(displayId);

        if (displaySpan && !displaySpan.textContent.trim()) {
          // Add red border to the display span
          displaySpan.classList.add("border-red-500", "border-2");
        }
      }
    });
  });

  // Also highlight empty order code inputs
  const obrSections = document.querySelectorAll(".obr-section");
  obrSections.forEach((obrSection) => {
    const orderCodeInput = obrSection.querySelector('input[name="OrderCode"]');
    if (orderCodeInput && !orderCodeInput.value.trim()) {
      orderCodeInput.classList.add("border-red-500", "border-2");
    }

    // Highlight empty OBX fields
    const obxSections = obrSection.querySelectorAll(".obx-section");
    obxSections.forEach((obxSection) => {
      const questionInput = obxSection.querySelector('input[name="Question"]');
      const answerInput = obxSection.querySelector('input[name="Answer"]');

      if (questionInput && !questionInput.value.trim()) {
        questionInput.classList.add("border-red-500", "border-2");
      }

      if (answerInput && !answerInput.value.trim()) {
        answerInput.classList.add("border-red-500", "border-2");
      }
    });
  });
}

/**
 * Removes highlights from fields
 */
function removeFieldHighlights() {
  document.querySelectorAll(".border-red-500").forEach((el) => {
    el.classList.remove("border-red-500", "border-2");
  });
}
