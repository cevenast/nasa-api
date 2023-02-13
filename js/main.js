//let url = 'https://dog.ceo/api/breeds/image/random'

// APOD Event Listeners
document.querySelector('#date-selector-apod').addEventListener('change',getAPODData)
document.querySelector('#next-day-apod').addEventListener('click',setNextDayAPOD)
document.querySelector('#previous-day-apod').addEventListener('click',setPreviousDayAPOD)

// MR Event Listeners

document.querySelector('#date-selector-mr').addEventListener('change',getMRData)
document.querySelector('#next-day-mr').addEventListener('click',setNextDayMR)
document.querySelector('#previous-day-mr').addEventListener('click',setPreviousDayMR)

// APOD Handlers

function setNextDayAPOD(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector-apod').value)
    // Adds one day to the input day
    nextDay = new Date(date.getTime() + (24 * 60 * 60 * 1000))
    // Gets the new date in YYYY-MM-DD format
    nextDayStr = nextDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector-apod').value = nextDayStr
    getAPODData()
}

function setPreviousDayAPOD(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector-apod').value)
    // Reduces one day to the input day
    previousDay = new Date(date.getTime() - (24 * 60 * 60 * 1000))
    // Gets the new date in YYYY-MM-DD format
    previousDayStr = previousDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector-apod').value = previousDayStr
    getAPODData()
}

async function getAPODData(e){
    const date = document.querySelector('#date-selector-apod').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=J6V1eW4cLiUQqJwh7NT1oDu3VfvzXec3KALMyyjI&date=${date}`

    try{
        const response = await fetch(url)
        let data = await response.json()
        document.querySelector('#img-title-apod').innerText = data.title || data.msg
        document.querySelector('#async-image').alt = data.title || ''
        document.querySelector('#async-image').src = data.url || ''
        document.querySelector('#explanation').innerText = data.explanation || ''
        document.querySelector('#hd-img-apod').href = data.hdurl || ''

        console.log(data)
        return data

    }catch(err){
        document.querySelector('#img-title-apod').innerText = 'holholaohla'
        console.log(err)
    }
}

// MR Handlers

// APOD Functions
function setNextDayMR(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector-mr').value)
    // Adds one day to the input day
    nextDay = new Date(date.getTime() + (24 * 60 * 60 * 1000))
    // Gets the new date in YYYY-MM-DD format
    nextDayStr = nextDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector-mr').value = nextDayStr
    getMRData()
}

function setPreviousDayMR(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector-mr').value)
    // Reduces one day to the input day
    previousDay = new Date(date.getTime() - (24 * 60 * 60 * 1000))
    // Gets the new date in YYYY-MM-DD format
    previousDayStr = previousDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector-mr').value = previousDayStr
    getMRData()
}

async function getMRData(e){
    const date = document.querySelector('#date-selector-mr').value
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=J6V1eW4cLiUQqJwh7NT1oDu3VfvzXec3KALMyyjI&earth_date=${date}`

    try{
        const response = await fetch(url)
        let data = await response.json()
        console.log(data)
        document.querySelector('#img-title-mr').innerHTML = `Earth Date: ${data.photos[data.photos.length-1]['earth_date']} <br> Sol: ${data.photos[data.photos.length-1]['sol']}` || data.msg
        document.querySelector('#async-image-mr').alt = data.title || ''
        console.log(data.photos[0])
        document.querySelector('#async-image-mr').src = data.photos[data.photos.length-1]['img_src'] || ''
        document.querySelector('#explanation-mr').innerText = data.explanation || ''
        document.querySelector('#hd-img-mr').href = data.hdurl || ''

   
        return data

    }catch(err){
        console.log(err)
    }
}

/* Today's date is plugged in the information */

let date = new Date()
date = date.toDateString().split(' ')
document.querySelector('#todays-date').innerText = `${date[1]} ${date[2]}, ${date[3]}`


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    const list = document.querySelector(".nav-item-list-hamburger");
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  } 