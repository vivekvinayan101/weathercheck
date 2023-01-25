function search(){
    destination=dest.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=5b4bee0ba241d092159faf007e166080`).then(data=>data.json())
    .then(data=>dispayData(data))

}

function dispayData(destinationDetails){
    Destination=destinationDetails.name
    weather=destinationDetails.weather[0].main
    description=destinationDetails.weather[0].description
    temperature=destinationDetails.main.temp
    c = Math.floor(temperature - 273.15)
    humidity=destinationDetails.main.humidity
    pressure=destinationDetails.main.pressure
    wind=destinationDetails.wind.speed
    visibility=destinationDetails.visibility
    result.innerHTML=`<div class="row  container rounded-5  mb-2 p-3 " style=" background-color: rgba(255, 255, 255, 0);">
  <div class="col-lg-6 col-md-6 col-sm-12 pt-5 card-header container  text-center" style=" background-color: rgba(255, 255, 255, 0); color:white ">
     <h2>${Destination}</h2>
     <h1 class="ms-5 text-light" style="font-size: 90px;"  > <i class="fa-solid fa-temperature-three-quarters fs-1"></i> ${c}°<span style="font-size:large; color:white;">C</span></h1>
     <h3 class="mt-4 text-center ps-3">${weather}<h3>
  </div>
  <div class="col-lg-6 col-md-6 col-sm-12  mt-2  pt-5 container text-center >
    <ul class="list-group list-group-flush container text-center" style="">
      <li class="list-group-item container  text-center" style="  color:white "><img src="./icons8-wind-50.png" alt=""> Wind : ${wind}km/hr</li><br>
      <li class="list-group-item container  text-center" style=" color:white  "><img src="./icons8-eye-50.png" alt=""> Visibility:  ${visibility}</li><br>
      <li class="list-group-item container  text-center" style=" color:white  "><img src="./icons8-wet-50.png" alt=""> Humidity : ${humidity}</li><br>
      <li class="list-group-item container  text-center" style=" color:white "><img src="./icons8-pressure-50.png" alt=""> Pressure : ${pressure}</li><br>
    </ul>
  </div>
</div>`
}
