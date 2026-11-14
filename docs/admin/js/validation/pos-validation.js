document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll(".needs-validation");

    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            const customerInput = form.querySelector('input[name="customerName"]');
            const serviceSelect = form.querySelector('select[name="serviceId"]');
            const kapsterSelect = form.querySelector('select[name="kapsterId"]');
            const totalInput = form.querySelector('input[name="totalPrice"]');

            [customerInput, serviceSelect, kapsterSelect, totalInput].forEach(el => {
                el.classList.remove("is-invalid");
            });

            if (!customerInput.value.trim()) {
                customerInput.classList.add("is-invalid");
                isValid = false;
            }

            if (!serviceSelect.value.trim()) {
                serviceSelect.classList.add("is-invalid");
                isValid = false;
            }

            if (!kapsterSelect.value.trim()) {
                kapsterSelect.classList.add("is-invalid");
                isValid = false;
            }

            if (!totalInput.value.trim() || totalInput.value <= 0) {
                totalInput.classList.add("is-invalid");
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();
                form.querySelector(".is-invalid")?.focus();
            }
        });
    });
});
