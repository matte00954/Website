//funktion för att kunna klicka på bilder som ändrar stylesheet till "enlarged" med en animation i CSS
$(document).ready(function () {
    $(".image-container").click(function () {
        $(this).toggleClass("enlarged");
    });
});