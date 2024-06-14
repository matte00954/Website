$(document).ready(function () {
    $(".search-input").on("input", function () {
        // Hämtar search input
        var query = $(this).val();

        // Kontrollera om sökrutan är tom
        if (query.trim() === "") {
            // Rensa resultaten och återvänd
            $("#search-results").empty();
            return;
        }

        //Anropa sökfunktionen med frågan
        search(query);
    });
});

function search(query) {
    //Simulera en sökning med statisk data
    var staticData = [
        { tree: "Spruce", result: "Spruce trees are common in the Nordic region, including Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Pine", result: "Pine trees are widely found across Nordic forests, prevalent in Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Birch", result: "Birch trees are native to the Nordic region and can be found in Sweden, Norway, Finland, Denmark, and Iceland. They are known for their distinctive bark." },
        { tree: "Oak", result: "Oak trees can be found in certain regions of the Nordic countries, including Sweden, Denmark, and parts of Norway." },
        { tree: "Willow", result: "Willow trees are found near water bodies throughout the Nordic region, including Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Rowan", result: "Rowan trees, also known as mountain ashes, are present in Nordic landscapes and can be found in Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Alder", result: "Alder trees thrive in wet areas and are found in parts of the Nordic region, including Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Aspen", result: "Aspen trees, with their unique leaves, can be found across the Nordic countries, including Sweden, Norway, Finland, Denmark, and Iceland." },
        { tree: "Beech", result: "Beech trees are less common but can be found in certain Nordic regions, including Sweden, Denmark, and parts of Norway." },
        { tree: "Hazel", result: "Hazel trees are found in the Nordic region, particularly in mixed woodlands, and can be found in Sweden, Norway, Finland, Denmark, and Iceland." }
    ];

    // Använd regex för att matcha resultat mot frågan
    var regex = new RegExp(query, 'i'); // 'i' för case-insensitive

    // Filtrera resultat baserat på regex-matchning
    var filteredResults = staticData.filter(function (item) {
        return regex.test(item.result);
    });

    //Visa de filtrerade sökresultaten
    displayResults(filteredResults);
}

function displayResults(results) {
    var resultsList = $("#search-results");
    resultsList.empty(); // Rensa tidigare resultat

    //Lägg till varje resultat som en länk till listan.
    results.forEach(function (result) {
        var link = "<li><a href='" + getTreePageLink(result.tree) + "'>" + result.tree + "</a> - " + result.result + "</li>";
        resultsList.append(link);
    });
}

function getTreePageLink(tree) {
    // Ersätt mellanslag med understreck och konvertera till lowercase
    return tree.toLowerCase().replace(/\s+/g, '_') + '.html';
}