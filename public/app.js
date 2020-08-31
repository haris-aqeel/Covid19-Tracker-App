function handleFormSubmit(e) {
    e.preventDefault();
}
async function handleSearch() {
    var searchCountry = (document.getElementById('country-search').value);
    var putValue = searchCountry[0].toUpperCase() + searchCountry.slice(1);
    const data = await fetch('https://api.covid19api.com/summary');
    const jsdata = await data.json();
    const country_names = jsdata.Countries;
    country_names.forEach(element => {
        if (element.Country==putValue){
            insertStats(element);
            return null;
        
        }
    }); 
}

function insertStats(details){
    var patient = document.getElementById('patient');
    var death = document.getElementById('death');
    var recovered = document.getElementById('recovered');
    patient.textContent = details.TotalConfirmed;
    death.textContent= details.TotalDeaths;
    recovered.textContent = details.TotalRecovered;

}