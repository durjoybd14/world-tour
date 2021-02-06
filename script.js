function countries() {
    fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res => res.json())
        .then(data => {
            const mainDiv = document.getElementById('mainDiv')

            for (let i = 0; i < data.length; i++) {

                const countryDiv = document.createElement('div');
                countryDiv.className = "countryDiv"

                const country = data[i];

                const countryInfo = `
                    <h1>${country.name}</h1>
                    <h3>${country.capital}</h3>
                    <button id="details" onclick="details('${country.name}')">details</button>
            
                `
                countryDiv.innerHTML = countryInfo;
                mainDiv.appendChild(countryDiv);
            }



        });


}

function details(name) {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            const innerDiv = document.getElementById('details');

            const details = data[0];
            const countryDetails = `
            <h1>${details.name}</h1>
            <h3>${details.capital}</h3>
            <img src="${details.flag}" height="300" width="400">
            
        `
            innerDiv.innerHTML = countryDetails;


        })
}


countries()