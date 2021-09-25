var gameSpeed = 1000;

var gameTimeData = {
    hour: 1,
    day: 1,
    month: 1,
    year: 1
}

var gameTime = setInterval(function() {
    addHour();
    constructUserData();
}, gameSpeed)



// Time Counter
function addHour() {
    if (gameTimeData.hour != 24)
        gameTimeData.hour++
        else {
            gameTimeData.hour = 1;
            addDay();
        }
    constructGameTime()
}



function addDay() {
    var endOfMonth = isEndOfMonth();

    if (endOfMonth == false)
        gameTimeData.day++
        else {
            gameTimeData.day = 1;
            addMonth();
        }
    constructGameTime()
}



function addMonth() {
    if (gameTimeData.month != 12)
        gameTimeData.month++;
    else {
        gameTimeData.month = 1;
        gameTimeData.year++;
    }
    constructGameTime()
}



// Time Constructor

function constructGameTime() {

    var timeSection = document.getElementById('game-time');

    var timeMessage = "Hour: " + gameTimeData.hour + " Day: " + gameTimeData.day + " Month: " + gameTimeData.month + " Year: " + gameTimeData.year;

    timeSection.innerText = timeMessage;

}



// Function Checkers

function isEndOfMonth() {
    var endOfMonth = false;

    switch (true) {
        case (gameTimeData.month == 1 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 2 && gameTimeData.day == 28):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 3 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 4 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 5 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 6 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 7 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 8 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 9 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 10 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 11 && gameTimeData.day == 31):
            endOfMonth = true;
            break;
        case (gameTimeData.month == 12 && gameTimeData.day == 30):
            endOfMonth = true;
            break;
        default:
            endOfMonth = false;
            break;
    }

    return endOfMonth;
}