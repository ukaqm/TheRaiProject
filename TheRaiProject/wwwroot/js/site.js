// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $("#calculateTotal").click(function () {
        var numHours = $("#numHours").val();
        var hourlyRate = $("#hourlyRate").val();

        // Validation for positive number
        if (numHours <= 0 || isNaN(numHours)) {
            alert("Please enter a positive number for the hours.");
            return;
        }

        var totalCost = numHours * hourlyRate;
        $("#totalCost").val(totalCost.toFixed(2)); // Display total cost with two decimal places
    });
});