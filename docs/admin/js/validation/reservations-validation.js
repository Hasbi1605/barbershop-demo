$(document).ready(function () {
  // Format nomor telepon untuk WhatsApp (hapus 0 di depan, tambah 62)
  function formatPhoneForWhatsApp(phone) {
    if (!phone) return null;
    phone = phone.replace(/\D/g, ""); 
    if (phone.startsWith("0")) {
      phone = "62" + phone.substring(1);
    } else if (!phone.startsWith("62")) {
      phone = "62" + phone;
    }
    return phone;
  }

  // Buka WhatsApp dengan template pesan
  function openWhatsApp(phone, message) {
    const formattedPhone = formatPhoneForWhatsApp(phone);
    if (formattedPhone) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
    }
  }

  // Generate template pesan untuk Accept
  function generateAcceptMessage(data) {
    return `Halo ${data.customerName} 

Reservasi Anda di *Barbershop* telah *DIKONFIRMASI* 

*Tanggal:* ${data.date}
*Waktu:* ${data.time}
*Layanan:* ${data.service}
*Kapster:* ${data.kapster}

Silakan datang tepat waktu. Kami tunggu kedatangan Anda!

Terima kasih`;
  }

  // Generate template pesan untuk Decline
  function generateDeclineMessage(data) {
    return `Halo ${data.customerName} 

Mohon maaf, reservasi Anda pada:
*Tanggal:* ${data.date}
*Waktu:* ${data.time}
*Layanan:* ${data.service}

*Tidak dapat kami proses* karena jadwal tidak tersedia.

Silakan pilih jadwal lain melalui website kami.

Terima kasih atas pengertiannya`;
  }

  $(".action-form").submit(function (e) {
    e.preventDefault();

    const form = $(this);
    const url = form.attr("action");
    const action = form.find('button[type="submit"]').data("action");

    // Ambil data reservasi dari form
    const reservationData = {
      customerName: form.data("customer-name"),
      customerPhone: form.data("customer-phone"),
      service: form.data("service"),
      kapster: form.data("kapster"),
      date: form.data("date"),
      time: form.data("time"),
    };

    $.ajax({
      url: url,
      type: "POST",
      data: form.serialize(),
      success: function () {
        const statusText = action === "accept" ? "CONFIRMED" : "CANCELLED";

        form.closest("td").html(`<span>${statusText}</span>`);

        showAlert(action === "accept" ? "Reservation successfully confirmed." : "Reservation successfully cancelled.", action === "accept" ? "success" : "danger");

        // Buka WhatsApp dengan template pesan
        if (reservationData.customerPhone) {
          const message = action === "accept" ? generateAcceptMessage(reservationData) : generateDeclineMessage(reservationData);

          // Tanya user apakah ingin mengirim WhatsApp
          if (confirm("Apakah Anda ingin mengirim notifikasi ke customer via WhatsApp?")) {
            openWhatsApp(reservationData.customerPhone, message);
          }
        } else {
          console.warn("Nomor telepon customer tidak tersedia");
        }
      },
      error: function () {
        showAlert("An error occurred. Please try again.", "danger");
      },
    });
  });

  function showAlert(message, type = "success") {
    const icon = type === "success" ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-triangle"></i>';

    const alertId = "alert-" + Date.now();
    const alertHtml = `
            <div id="${alertId}" class="alert alert-${type} alert-dismissible fade show mt-2" role="alert">
                ${icon} <span>${message}</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;

    $("#alert-container").prepend(alertHtml);

    setTimeout(function () {
      $("#" + alertId)
        .fadeTo(400, 0)
        .slideUp(400, function () {
          $(this).remove();
        });
    }, 3000);
  }
});
