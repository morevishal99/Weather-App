
    let key ="enter your key here "

    let container = document.getElementById("container")

    let map = document.getElementById("gmap_canvas")

    

    async function getweather() {
        try {
            let city = document.getElementById("city").value;

            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)

            let data = await res.json();

            // console.log(data)
            
            appenddata(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    function appenddata(data) {
        container.innerHTML = null

        let name = document.createElement("p")
        name.innerText = `City Name - ${data.name}`

        let tempe = document.createElement("p")
        tempe.innerText = `Temp - ${data.main.temp}`

        let hum = document.createElement("p")
        hum.innerText = `Humidity -${data.main.humidity}`

        let pre = document.createElement("p")
        pre.innerText = `Pressure -${data.main.pressure}`



        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        container.append(name, tempe, hum, pre)
    }


   
