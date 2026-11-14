// transaction-handler.js
$(document).ready(function () {
    // Update total price and hidden fields when service is selected in Add Transaction modal
    $("#serviceSelect").on("change", function () {
        var selectedOption = $(this).find("option:selected");
        var price = selectedOption.data("price");
        var serviceName = selectedOption.data("name");

        if (price) {
            $("#totalPrice").val(price);
            $("#serviceName").val(serviceName);
        } else {
            $("#totalPrice").val("");
            $("#serviceName").val("");
        }
    });

    // Update hidden field when kapster is selected
    $("#kapsterSelect").on("change", function () {
        var selectedOption = $(this).find("option:selected");
        var kapsterName = selectedOption.data("name");
        $("#kapsterName").val(kapsterName);
    });

    // Update total price when service is selected in Edit Transaction modal
    $("#editServiceSelect").on("change", function () {
        var selectedOption = $(this).find("option:selected");
        var price = selectedOption.data("price");
        if (price) {
            $("#editTotalPrice").val(price);
        } else {
            $("#editTotalPrice").val("");
        }
    });
});

// Function to update price in edit modal
function updateEditPrice(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var price = selectedOption.getAttribute("data-price");
    var serviceName = selectedOption.getAttribute("data-name");
    var priceInput = selectElement.closest(".modal-body").querySelector('input[name="totalPrice"]');
    var nameInput = selectElement.closest(".modal-body").querySelector('input[name="serviceName"]');

    if (priceInput && price) {
        priceInput.value = price;
    }
    if (nameInput && serviceName) {
        nameInput.value = serviceName;
    }
}
