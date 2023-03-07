
let key = "Enter you key here"

let container = document.getElementById("container")
let additional = document.getElementById("additional")
let nodata = document.getElementById("nodata")

let map = document.getElementById("gmap_canvas")



async function getweather() {
    try {
        let city = document.getElementById("city").value;

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)

        let data = await res.json();

        console.log(data)

        appenddata(data)
    }
    catch (err) {
        console.log(err)
    }
}

function appenddata(data) {
    container.innerHTML = null
    additional.innerHTML = null
    nodata.innerHTML = null
    
    

        let name = document.createElement("h2")
        name.innerText = `City Name :- ${data.name}`

        let tempe = document.createElement("h2")
        tempe.innerText = `Temp :- ${Math.floor(data.main.temp - 273.15)} °C`

        let hum = document.createElement("h2")
        hum.innerText = `Humidity :-${data.main.humidity}`

        let pre = document.createElement("h2")
        pre.innerText = `Pressure :-${data.main.pressure}hPa`
        let sea_level = document.createElement("h2")
        sea_level.innerText = `Sea-level :-${data.main.sea_level}`


        let lat = document.createElement("h2")
        lat.innerText = `Latitude :- ${data.coord.lat}`

        let lon = document.createElement("h2")
        lon.innerText = `Longitude :- ${data.coord.lon} `

        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        container.append(name,)
        additional.append(tempe, hum, pre, sea_level, lat, lon)
     
}


