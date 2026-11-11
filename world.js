document.addEventListener('DOMContentLoaded', function() {
    const lookup = document.getElementById('lookup');
    const lookupCities = document.getElementById('lookup-cities');
    const country = document.getElementById('country');
    const result = document.getElementById('result');

    lookup.addEventListener('click', function() {
        const countryName = country.value;
        fetch("world.php?country=" + encodeURIComponent(countryName))
            .then(response => response.text())
            .then(data => {result.innerHTML = data;})
            .catch(error => {console.log("Error:", error);});
    });

    lookupCities.addEventListener('click', function() {
        const countryName = country.value;
        fetch("world.php?country=" + encodeURIComponent(countryName) + "&lookup=cities")
            .then(response => response.text())
            .then(data => {result.innerHTML = data;})
            .catch(error => {console.log("Error:", error);});
    });
});