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
        document.querySelector('#img-title').innerText = data.title
        document.querySelector('#async-image').alt = data.title
        document.querySelector('#async-image').src = data.url
        document.querySelector('#explanation').innerText = data.explanation

        console.log(data)
        return data

    }catch(err){
        console.log(err)
    }
}


    // fetch(url)
    //     .then(res => res.json()) // parse response as JSON
    //     .then(data => {
    //         console.log(data)
    //         if (data.media_type == 'image'){
    //         document.querySelector('img').src = data.hdurl
    //         }
    //         else if (data.media_type == 'video'){
    //         document.querySelector('iframe').src = data.url 
    //         }
    //         document.querySelector('h3').innerText = data.explanation

    //     })
    //     .catch(err => {
    //         console.log(`error ${err}`)
    //     });
    // }