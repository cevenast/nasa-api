//let url = 'https://dog.ceo/api/breeds/image/random'

document.querySelector('#date-selector').addEventListener('change',getNasaData)
document.querySelector('#next-day').addEventListener('click',setNextDay)
document.querySelector('#previous-day').addEventListener('click',setPreviousDay)

function setNextDay(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector').value)
    // Adds one day to the input day
    nextDay = new Date(date.getTime() + (24 * 60 * 60 * 1000))
    // Gets the new date in YYYY-MM-DD format
    nextDayStr = nextDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector').value = nextDayStr
    getNasaData()
}

function setPreviousDay(){
    // Gets date from input
    date = new Date(document.querySelector('#date-selector').value)
    // Reduces one day to the input day
    previousDay = new Date(date.getTime() - (24 * 60 * 60 * 1000))
    // ets the new date in YYYY-MM-DD format
    previousDayStr = previousDay.toJSON().split('T')[0]
    // Modifies the value of the input
    document.querySelector('#date-selector').value = previousDayStr
    getNasaData()
}

async function getNasaData(e){
    const date = document.querySelector('#date-selector').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=J6V1eW4cLiUQqJwh7NT1oDu3VfvzXec3KALMyyjI&date=${date}`

 
    try{
        const response = await fetch(url)
        let data = await response.json()
        document.querySelector('#img-title-apod').innerText = data.title
        document.querySelector('#async-image').alt = data.title
        document.querySelector('#async-image').src = data.url
        document.querySelector('#explanation').innerText = data.explanation

        console.log(data)
        return data

    }catch(err){
        console.log(err)
    }
}



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    const list = document.querySelector(".nav-item-list-hamburger");
    if (list.style.display === "block") {
      list.style.display = "none";
    } else {
      list.style.display = "block";
    }
  } 