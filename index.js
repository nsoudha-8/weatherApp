var button=document.querySelector('.button');
var inputValue=document.querySelector('.inputValue');
var cityname=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=7e5a1855fd80335389e3941b56e10630')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=7e5a1855fd80335389e3941b56e10630')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);

        var nameValue=data['city']['name'];
        var tempValue=data.list[0]['main']['temp'];
        var descValue=data.list[0]['weather'][0]['description'];

        cityname.innerHTML=nameValue;
        temp.innerHTML=`
        <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="">
        <h2>${Math.trunc(tempValue - 273.15)} °C</h2>
        `;
        desc.innerHTML=descValue;
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "desc").innerHTML =  data.list[i]['weather'][0]['description'];
        }
        for(i=0;i<5;i++){
            document.getElementById("day" + (i+1) + "img").innerHTML =`<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="">`
        }

        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Min").innerHTML = `Min: ${ Number(data.list[i]['main']['temp_min'] - 273.15).toFixed(1)}°C `;
        }
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Max").innerHTML = `Max: ${ Number(data.list[i]['main']['temp_max'] - 273.15).toFixed(1)}°C `;
        }
        
      

    })
    .catch(err=>alert("wrong city name!"))
})

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}

{/*for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
}
for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
}
for(i = 0; i<5; i++){
    document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
}
for(i = 0; i<5; i++){
    document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
    data.list[i].weather[0].icon
    +".png";
}

  for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Min").innerHTML = `Min: ${ Number(data[i]['main']['temp_min'] - 273.15).toFixed(1)}° `;
        }
        for(i = 0; i<5; i++){
            document.getElementById("day" + (i+1) + "Max").innerHTML = `Max: ${ Number(data[i]['main']['temp_min'] - 273.15).toFixed(1)}° `;
        }


    
*/}