//Detta script ändrar bilderna i "home.html" var femte sekund
$(document).ready(function () {
    //Array hämta bilderna
    const images = ["../Pictures/forest1.jpg", "../Pictures/forest2.jpg", "../Pictures/forest3.jpg", "../Pictures/forest4.jpg", "../Pictures/forest5.jpg", "../Pictures/forest6.jpg"];
    let currentIndex = 0;

    // funktion för att ändra bilderna
    function changeImage() {
        const image = $("#forest");
        //dölj bilden
        image.fadeOut(1000, function() {
            // Uppdatera index för att välja nästa bild i sekvensen
            currentIndex = (currentIndex + 1) % images.length;
            const imageUrl = "Pictures/" + images[currentIndex];

            //console.log("test " + imageUrl);
            //för test

            //Uppdatera bildens källa och visa fade in effekt
            image.attr("src", imageUrl).fadeIn(1000);
        });
    }

    setInterval(changeImage, 5000); 
    //bilden ändras var femte sekund
});