let apiKey = "939ffd985af821d0c9955913ddb9fc17";
let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric"


let input = document.querySelector('.location-input')

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        console.log(input.value);
        getWeather();
        input.value = '';
    }
})

async function getWeather() {
    try {
        let response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${input.value}`)
        let data = await response.json();
        console.log(data.city)

        document.querySelector('.location').innerHTML = `${data.city.name}`;
        document.querySelector('.weather-temp').innerHTML = `${data.list[0].main.temp}°C`;
        document.querySelector('.weather-desc').innerHTML = `${data.list[0].weather[0].main}`;
        document.querySelector('#pValue').innerHTML = `${data.list[0].main.pressure} mb`;
        document.querySelector('#hValue').innerHTML = `${data.list[0].main.humidity} %`;
        document.querySelector('#wValue').innerHTML = `${data.list[0].wind.speed} km/h`;

        // Next Four Days Temperature
        document.querySelector('#daytp1').innerHTML = `${data.list[1].main.temp}°C`;
        document.querySelector('#daytp2').innerHTML = `${data.list[2].main.temp}°C`;
        document.querySelector('#daytp3').innerHTML = `${data.list[3].main.temp}°C`;
        document.querySelector('#daytp4').innerHTML = `${data.list[4].main.temp}°C`;


        // document.querySelector('#daytp1').innerHTML = `${Math.round(data.list[1].main.temp)}°C`;
        // document.querySelector('#daytp2').innerHTML = `${Math.round(data.list[2].main.temp)}°C`;
        // document.querySelector('#daytp3').innerHTML = `${Math.round(data.list[3].main.temp)}°C`;
        // document.querySelector('#daytp4').innerHTML = `${Math.round(data.list[4].main.temp)}°C`;
    } catch (e) {
        alert('Error : ' + e.message);
    }
}

function date() {

    // current day 
    let dayname = document.querySelector('.date-dayname');
    // 4 days according to current day 
    let day1 = document.querySelector('#day1')
    let day2 = document.querySelector('#day2')
    let day3 = document.querySelector('#day3')
    let day4 = document.querySelector('#day4')


    let date = new Date();
    // console.log(date);
    let day = date.getDay();
    // console.log(date.getDay()); // will log a no. between 1 to 7
    if (day == 1) {
        dayname.innerHTML = "Monday";
        day1.innerHTML = 'Tue';
        day2.innerHTML = 'Wed';
        day3.innerHTML = 'Thu';
        day4.innerHTML = 'Fri';
    } else if (day == 2) {
        dayname.innerHTML = "Tuesday";
        day1.innerHTML = 'Wed';
        day2.innerHTML = 'Thu';
        day3.innerHTML = 'Fri';
        day4.innerHTML = 'Sat';
    } else if (day == 3) {
        dayname.innerHTML = "Wednesday";
        day1.innerHTML = 'Thu';
        day2.innerHTML = 'Fri';
        day3.innerHTML = 'Sat';
        day4.innerHTML = 'Sun';

    } else if (day == 4) {
        dayname.innerHTML = "Thursday";
        day1.innerHTML = 'Fri';
        day2.innerHTML = 'Sat';
        day3.innerHTML = 'Sun';
        day4.innerHTML = 'Mon';

    } else if (day == 5) {
        dayname.innerHTML = "Friday";
        day1.innerHTML = 'Sat';
        day2.innerHTML = 'Sun';
        day3.innerHTML = 'Mon';
        day4.innerHTML = 'Tue';

    } else if (day == 6) {
        dayname.innerHTML = "Saturday";
        day1.innerHTML = 'Sun';
        day2.innerHTML = 'Mon';
        day3.innerHTML = 'Tue';
        day4.innerHTML = 'Wed';

    } else if (day == 7) {
        dayname.innerHTML = "Sunday";
        day1.innerHTML = 'Mon';
        day2.innerHTML = 'Tue';
        day3.innerHTML = 'Wed';
        day4.innerHTML = 'Thu';

    }

    // date.getMonth() will log a no. between 0 to 11 
    // console.log(date.getDate() + " " + date.getMonth() + " " + date.getFullYear());
    let month = date.getMonth() + 1;
    let dateMonthYear = document.querySelector('.date-day')
    if (month == 1) {
        dateMonthYear.innerHTML = `${date.getDate()} Jan ${date.getFullYear()}`;
    } else if (month == 2) {
        dateMonthYear.innerHTML = `${date.getDate()} Feb ${date.getFullYear()}`;
    } else if (month == 3) {
        dateMonthYear.innerHTML = `${date.getDate()} Mar ${date.getFullYear()}`;
    } else if (month == 4) {
        dateMonthYear.innerHTML = `${date.getDate()} Apr ${date.getFullYear()}`;
    } else if (month == 5) {
        dateMonthYear.innerHTML = `${date.getDate()} May ${date.getFullYear()}`;
    } else if (month == 6) {
        dateMonthYear.innerHTML = `${date.getDate()} Jun ${date.getFullYear()}`;
    } else if (month == 7) {
        dateMonthYear.innerHTML = `${date.getDate()} July ${date.getFullYear()}`;
    } else if (month == 8) {
        dateMonthYear.innerHTML = `${date.getDate()} Aug ${date.getFullYear()}`;
    } else if (month == 9) {
        dateMonthYear.innerHTML = `${date.getDate()} Sep ${date.getFullYear()}`;
    } else if (month == 10) {
        dateMonthYear.innerHTML = `${date.getDate()} Oct ${date.getFullYear()}`;
    } else if (month == 11) {
        dateMonthYear.innerHTML = `${date.getDate()} Nov ${date.getFullYear()}`;
    } else if (month == 12) {
        dateMonthYear.innerHTML = `${date.getDate()} Dec ${date.getFullYear()}`;
    }

}
date();


// jQuery code from stackOverFlow for Placeholder blinking.
function blinker() {

    if ($('input[type=text]').attr('placeholder')) {
        // get the placeholder text
        $('input[type=text]').attr('placeholder', '');
    } else {
        $('input[type=text]').attr('placeholder', 'Enter City Name');
    }

    setTimeout(blinker, 800);

}
