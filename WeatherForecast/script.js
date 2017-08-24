$("form").submit(function(){
    var city = ($("#city").val()); 
    console.log(city); 
    $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&&appid=899026bd066196f55e0f7cf4485622cc",function(res){
        console.log(res);
        console.log(res.main.temp);
        $("#result").html("<h1>"+city+"</h1><h4>Temperature: "+Math.round(res.main.temp-273.15)+"&#176;C</h4>");
        },"json"); 
    return false; 
})
