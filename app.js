const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req ,res){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Siliguri&appid=c2d1ed2912bf6c74346b2f635f5aad79&units=metric";
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<h1>The temperature in Siliguri is "+temp+" degrees Celsius</h1>");
            res.write("<h1>The weather description in Siliguri  is "+weatherDescription+" </h1>");
            res.write("<img src="+imageURL+">");
            res.send();
        })
    })
})






app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})