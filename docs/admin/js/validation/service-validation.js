document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("#addServiceModal form, div[id^='editServiceModal'] form");

    Array.from(forms).forEach(function (form) {
        form.addEventListener("submit", function (event) {
            let isValid = true;

            const nameInput = form.querySelector('input[name="name"]');
            const descriptionInput = form.querySelector('textarea[name="description"]');
            const durationInput = form.querySelector('input[name="durationMinutes"]');
            const priceInput = form.querySelector('input[name="price"]');

            [nameInput, descriptionInput, durationInput, priceInput].forEach(el => {
                el.classList.remove("is-invalid");
            });


            if (!nameInput.value.trim()) {
                nameInput.classList.add("is-invalid");
                isValid = false;
                const feedback = nameInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Nama layanan wajib diisi";
            }


            if (!durationInput.value.trim() || isNaN(durationInput.value) || Number(durationInput.value) <= 0) {
                durationInput.classList.add("is-invalid");
                isValid = false;
                const feedback = durationInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Durasi harus berupa angka lebih dari 0";
            }

            if (!priceInput.value.trim() || isNaN(priceInput.value) || Number(priceInput.value) <= 0) {
                priceInput.classList.add("is-invalid");
                isValid = false;
                const feedback = priceInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Harga harus berupa angka lebih dari 0";
            }

            if (!descriptionInput.value.trim()) {
                descriptionInput.classList.add("is-invalid");
                isValid = false;
                const feedback = descriptionInput.parentElement.querySelector(".invalid-feedback");
                if (feedback) feedback.textContent = "Deskripsi wajib diisi";
            }

            if (!isValid) {
                event.preventDefault();
                event.stopPropagation();

                const firstInvalid = form.querySelector(".is-invalid");
                if (firstInvalid) firstInvalid.focus();
            }
        });
    });
});
