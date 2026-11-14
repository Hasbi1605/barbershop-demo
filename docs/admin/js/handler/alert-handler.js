$(document).ready(function () {
    const alertEl = $(".alert");

    if (alertEl.length) {
        alertEl.each(function () {
            const $this = $(this);

            // Kalau alert ini untuk delete, pakai alert-danger
            if ($this.data('type') === 'delete') {
                $this.removeClass('alert-success alert-warning').addClass('alert-danger');
            }

            $this.hide().fadeIn(400);

            setTimeout(function () {
                $this.fadeTo(400, 0).slideUp(400, function () {
                    $(this).remove();
                });
            }, 3000);
        });
    }
});
