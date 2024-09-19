
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API-KEY-HERE',
		'X-RapidAPI-Host': 'weather-by-api.com'
	}
};

let btn=document.querySelector("button")
let para= document.querySelector("p");
let inp=document.querySelector("input");
let cityname=document.querySelector(".city_name");
let temprature=document.querySelector(".temp");
let feelslike=document.querySelector(".feels_like");
let mintemp=document.querySelector(".min_temp");
let maxtemp=document.querySelector(".max_temp");
let humidity=document.querySelector(".humidity");
let windspeed=document.querySelector(".wind_speed");
let main=document.querySelector(".main");
console.dir(main);
let dummytext=document.querySelector(".dummy_text");
console.dir(dummytext);

async function callweather(city){
    try {
        const response = await fetch('https://API-KEY-HERE?city='+ city, options);
        const data = await response.json();
         document.body.style.backgroundImage="url('https://source/1600x900/?"+ city +"')" ;
         cityname.innerText= "Weather in  "+ capital(city) ;
         temprature.innerText= data.temp +" °C";
         feelslike.innerText= " "+ data.feels_like +" °C";
         mintemp.innerText= " "+ data.min_temp +" °C";
         maxtemp.innerText= " "+ data.max_temp +" °C";
         humidity.innerText=" "+ data.humidity +" %";
         windspeed.innerText=" "+ data.wind_speed +" Km/h";
         dummytext.classList.remove("loading");
        
         return data ;
    } catch (error) {
        console.error(error);
    }
}

btn.addEventListener("click",  async () =>{
    let call= await callweather(inp.value);
    await console.log("clicked");
    console.log(call);
});

inp.addEventListener("keyup", async (e)=>{
    if(e.key== "Enter"){
    let call= await callweather(inp.value);
    await console.log("clicked");
    console.log(call);
    }
});

inp.addEventListener("keyup", async (e)=>{
    if(e.key== "space-bar"){
    let call= await callweather(inp.value);
    await console.log("clicked");
    console.log(call);
    }
});

function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

