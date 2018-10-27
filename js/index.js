var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
		el: '.swiper-pagination',
    },

    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    },

    scrollbar: {
		el: '.swiper-scrollbar',
    },
});

$(document).ready(function(){
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=macau,mo&APPID=621c5d340f68584a5a4ae0f3d46d0bc7",function(jsonData){
		var temp = parseFloat(jsonData.main.temp - 273.15).toFixed(0);
		var city = 'MACAU';
		var dscp = jsonData.weather[0].description;
		var icon = jsonData.weather[0].icon;
		$('#w-temp').text(temp + "°C");
		$('#w-city').text(city);
		$('#w-dscp').text(dscp);
		icon = icon.split('').slice(0, 2).join('');
		function setWeatherIconAction(){
			switch(icon) {
				case "01":
				  return "wi-day-sunny";
				case "02":
				  return "wi-day-cloudy";
				case "03":
				  return "wi-cloudy";
				case "04":
				  return "wi-cloud";
				case "09":
				  return "wi-showers";
				case "10":
				  return "wi-rain";
				case "11":
				  return "wi-thunderstorm";
				case "13":
				  return "wi-snow";
				case "50": // mist
				  return "wi-windy";
				default:
					return "wi-day-sunny";
			}
		}
		$('#weather-icon').removeClass('wi-day-sunny');
		$('#weather-icon').addClass(setWeatherIconAction());
		console.log(temp, city, dscp);
	});
});