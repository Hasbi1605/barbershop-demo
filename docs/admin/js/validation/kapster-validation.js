document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            const nameInput = form.querySelector('input[name="name"]');
            const phoneInput = form.querySelector('input[name="phone"]');
            const emailInput = form.querySelector('input[name="email"]');
            const statusSelect = form.querySelector('select[name="status"]');

            [nameInput, phoneInput, emailInput, statusSelect].forEach(el => {
                el.classList.remove("is-invalid");
            });

            if (!nameInput.value.trim()) {
                nameInput.classList.add("is-invalid");
                isValid = false;
            }

            const phonePattern = /^[0-9]{10,15}$/;
            if (!phoneInput.value.trim() || !phonePattern.test(phoneInput.value.trim())) {
                phoneInput.classList.add("is-invalid");
                isValid = false;
                const feedback = phoneInput.parentElement.querySelector(".invalid-feedback");
                feedback.textContent = "Nomor telepon harus angka dan minimal 10 digit";
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@barbershop\.com$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add("is-invalid");
                isValid = false;
                const feedback = emailInput.parentElement.querySelector(".invalid-feedback");
                feedback.textContent = "Masukkan email yang valid";
            }


            if (!statusSelect.value.trim()) {
                statusSelect.classList.add("is-invalid");
                isValid = false;
            }


            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();

                const firstInvalid = form.querySelector(".is-invalid");
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        }, false);
    });
});
