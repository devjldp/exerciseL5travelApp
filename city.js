// Referencebutton
const calculate = document.querySelector('button')
const messageContainer = document.getElementById("feedback")

/**
 * Displays an image of the city you pass
 * @param {string} city the city you want to display an image
 */
function displayImageCity(city){
    const cityImage = document.querySelector('img')
    switch(city){
        case "tokyo":
            cityImage.src = 'images/tokyo.jpg'
            cityImage.alt = "Tokyo"
            break
        case "london":
            cityImage.src = 'images/london.png'
            cityImage.alt = "London"
            break
        case "paris":
            cityImage.src = 'images/paris.png'
            cityImage.alt = "Paris"
            break
        case "coruna":
            cityImage.src = 'images/coruna.jpg'
            cityImage.alt = "A Coruna"
            break
        case "newyork":
            cityImage.src = 'images/newyork.jpg'
            cityImage.alt = "New York"
            break
    }
}

/**
 * 
 * @param {string} city 
 * @param {int} nights 
 * @param {string} season 
 * @returns total price in destination selected
 */
function calculatePrice(city, nights, season){
    let basecost = 50
    let seasonExtra
    let cityExtra
    if(season == "1"){
        seasonExtra = 1.5
    }else if(season == "2"){
        seasonExtra = 1.2
    }
    switch(city){
        case "tokyo":
            cityExtra = 1.5
            break
        case "london":
            cityExtra = 1.4
            break
        case "paris":
            cityExtra = 1.35
            break
        case "coruna":
            cityExtra = 1.2
            break
        case "newyork":
            cityExtra = 1.45
            break
    }

    let priceNight = basecost*seasonExtra*cityExtra
    let total = priceNight*nights
    return total;
}


calculate.addEventListener('click', () => {
    // reset the message that indicates the final price
    messageContainer.innerHTML = ''
    // Get the value directly form the inputs -> data type is a string
    const selectCity = document.getElementById('city').value
    const selectNights = document.getElementById('nights').value
    const selectSeason = document.getElementById('season').value

    displayImageCity(selectCity)
    let totalCost = calculatePrice(selectCity, parseInt(selectNights), selectSeason)
    // transform string to int
    
    const message = document.createElement('p')
    message.textContent = `Total cost for ${selectNights} nights in ${selectCity} is £${totalCost}`
    message.style.fontSize = "2rem"
    message.classList.add("text-center")
    messageContainer.appendChild(message)


})


