document.addEventListener("DOMContentLoaded", function () {

    // ===== Get form elements =====
    const applyForm = document.getElementById("applyForm");
    const professionInput = document.getElementById("profession");
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const whatsappInput = document.getElementById("whatsapp");

    // ===== Get profession from localStorage =====
    const selectedProfession = localStorage.getItem("selectedProfession");

    if (selectedProfession) {
        professionInput.value = selectedProfession;
    } else {
        professionInput.value = "";
    }

    // ===== Country phone codes =====
    const countryPhoneCodes = {
        Pakistan: "+92",
        India: "+91",
        USA: "+1",
        UK: "+44"
    };

    // ===== Cities by country =====
    const citiesByCountry = {
        Pakistan: ["Karachi", "Lahore", "Islamabad", "Sukkur"],
        India: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        USA: ["New York", "Los Angeles", "Chicago", "Houston"],
        UK: ["London", "Manchester", "Birmingham", "Liverpool"]
    };

    // ===== Load Cities + WhatsApp Code =====
    function loadCitiesAndCode(country) {

        if (!countryPhoneCodes[country]) return;

        // Set WhatsApp Prefix
        const code = countryPhoneCodes[country];
        whatsappInput.value = code;
        whatsappInput.dataset.code = code;

        // Clear old cities
        citySelect.innerHTML = '<option value="">Select City</option>';

        // Add new cities
        citiesByCountry[country].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    // ===== Default Load (based on selected country) =====
    loadCitiesAndCode(countrySelect.value);

    // ===== On Country Change =====
    countrySelect.addEventListener("change", function () {
        loadCitiesAndCode(this.value);
    });

    // ===== Prevent deleting country code =====
    whatsappInput.addEventListener("input", function () {
        const code = whatsappInput.dataset.code || "";
        if (!whatsappInput.value.startsWith(code)) {
            whatsappInput.value = code;
        }
    });

    // ===== Form Submission =====
    applyForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const whatsapp = whatsappInput.value.replace(/\s+/g, '');
        const city = citySelect.value;
        const qualification = document.getElementById("qualification").value.trim();
        const experience = document.getElementById("experience").value.trim();
        const skills = document.getElementById("skills").value.trim().split(",").map(s => s.trim());
        const resume = document.getElementById("resume").files[0];
        const jobType = document.getElementById("jobType").value;

        // ===== Validation =====
        if (!name || !email || !whatsapp || !city || !qualification || !experience || skills.length === 0 || !resume || !jobType) {
            alert("Please fill all fields, select job type, and upload your resume!");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email!");
            return;
        }

        const phoneRegex = /^\+\d{7,15}$/;
        if (!phoneRegex.test(whatsapp)) {
            alert("Please enter a valid WhatsApp number!");
            return;
        }

        console.log({
            name,
            email,
            whatsapp,
            city,
            selectedProfession,
            qualification,
            experience,
            skills,
            resumeName: resume.name,
            jobType
        });

        // ===== Success Card =====
        const successCard = document.createElement("div");
        successCard.classList.add("success-card");
        successCard.innerHTML = `
        <h2>Thank You for Applying!</h2>
        <img src="success.png"
        alt="Application Successful"
        class="success-image">
        <p>Dear <strong>${name}</strong>, your application for the position of <strong>${selectedProfession}</strong> (${jobType}) has been received.</p>
        <p>If there are vacancies matching your profile, we will contact you soon.</p>`;


        applyForm.style.display = "none";
        document.body.appendChild(successCard);
        successCard.scrollIntoView({ behavior: "smooth" });
    });

});
