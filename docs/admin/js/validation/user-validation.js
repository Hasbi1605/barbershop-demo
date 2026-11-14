document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach(function (form) {
        const usernameInput = form.querySelector('input[name="username"]');
        const emailInput = form.querySelector('input[name="email"]');
        const fullNameInput = form.querySelector('input[name="fullName"]');
        const passwordInput = form.querySelector('input[name="password"]');
        const roleSelect = form.querySelector('select[name="role"]');

        [usernameInput, emailInput, fullNameInput, passwordInput, roleSelect].forEach(el => {
            if (!el) return;
            el.addEventListener("input", () => el.classList.remove("is-invalid"));
            el.addEventListener("change", () => el.classList.remove("is-invalid"));
        });

        form.addEventListener("submit", function (event) {
            let isValid = true;

            [usernameInput, emailInput, fullNameInput, passwordInput, roleSelect].forEach(el => {
                if (el) el.classList.remove("is-invalid");
            });

            if (!usernameInput.value.trim()) {
                usernameInput.classList.add("is-invalid");
                isValid = false;
                const feedback = usernameInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Username wajib diisi";
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@barbershop\.com$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add("is-invalid");
                isValid = false;
                const feedback = emailInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Masukkan email yang valid (@barbershop.com)";
            }

            if (!fullNameInput.value.trim()) {
                fullNameInput.classList.add("is-invalid");
                isValid = false;
                const feedback = fullNameInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Nama lengkap wajib diisi";
            }

            if (passwordInput) {
                const isAddForm = form.closest('#addUserModal') !== null;
                if (isAddForm && !passwordInput.value.trim()) {
                    passwordInput.classList.add("is-invalid");
                    isValid = false;
                    const feedback = passwordInput.parentElement.querySelector(".invalid-feedback");
                    if (feedback) feedback.textContent = "Password wajib diisi";
                }
            }

            if (!roleSelect.value.trim()) {
                roleSelect.classList.add("is-invalid");
                isValid = false;
                const feedback = roleSelect.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Pilih role";
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
                const firstInvalid = form.querySelector(".is-invalid");
                if (firstInvalid) firstInvalid.focus();
            } else {
                const isEditForm = form.closest('[id^="editUserModal"]') !== null;
                if (isEditForm && passwordInput && !passwordInput.value.trim()) {
                    passwordInput.value = null;
                }

                form.classList.add("was-validated");
            }
        }, false);
    });
});
