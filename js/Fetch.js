async function _fetchBreweries(){
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    const jsonResponse = await response.json(); 
    console.log(jsonResponse);
}

_fetchBreweries();