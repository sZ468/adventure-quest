var userStats = document.getElementById('user-stats')

var places = document.getElementById('places')

var shop = document.getElementById('weapon-list')

var quests = document.getElementById('adventure')

var weaponsList = document.getElementById('weapon-list')

var tutorial = document.getElementById('tutorial')

var credits = document.getElementById('credits')


function hideAll() {
    userStats.style.display = "none";
    places.style.display = "none";
    shop.style.display = "none";
    quests.style.display = "none";
    tutorial.style.display = "none";
    credits.style.display = "none";
}


function showMenu(menu) {
    if (menu.style.display === "none") {
        hideAll();
        menu.style.display = "block";
    } else
        menu.style.display = "none";
}