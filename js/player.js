// Professions

var passiveIncome = 20;

var apprenticeClass = {
    jobName: "Apprentice",
    price: 0,
    damage: 3,
    attackSpeed: 1,
    health: 5,
}

var warriorClass = {
    jobName: "Warrior",
    price: 5000,
    damage: 8,
    attackSpeed: 1,
    health: 30
}

var rangerClass = {
    jobName: "Ranger",
    price: 5000,
    damage: 5,
    attackSpeed: 2,
    health: 20
}

var masterWarrior = {
    jobName: "Beserker",
    damage: 20,
    attackSpeed: 2,
    health: 60
}

var masterRanger = {
    jobName: "Sniper",
    damage: 16,
    attackSpeed: 3,
    health: 30
}

// Cheat Class

var cheatClass = {
    jobName: "Creator",
    damage: 998,
    attackSpeed: 998,
    health: 994,
}

// Main Player

var userData = {
    name: undefined,
    job: apprenticeClass,
    income: 0,
    level: 1,
    damage: 0,
    weapon: undefined,
    attackSpeed: 0,
    health: 0,
    maxHealth: 0,
}

var newData = {
    name: undefined,
    job: apprenticeClass,
    income: 0,
    level: 1,
    damage: 0,
    weapon: undefined,
    attackSpeed: 0,
    health: 0,
    maxHealth: 0,
}


// Items


var broadSword = {
    name: "Broadsword",
    damage: 4,
    price: 1000,
}

var greatSword = {
    name: "Great Sword",
    damage: 6,
    price: 2000
}

var bastardSword = {
    name: "Bastard Sword",
    damage: 8,
    price: 4000
}

var gloriousSword = {
    name: "Glorious Sword",
    damage: 10,
    price: 8000
}

var emeraldSword = {
    name: "Emerald Sword",
    damage: 12,
    price: 16000
}

var divineSword = {
    name: "Divine Sword",
    damage: 14,
    price: 32000
}

var etherealSword = {
    name: "Ethereal Sword",
    damage: 16,
    price: 64000
}




var incomeData = setInterval(function() {
    addIncome();
}, 2000)



function addIncome() {
    userData.income += passiveIncome;
    constructUserData();
}

// Construct User Information

function constructUserData() {
    // Name section construction
    var nameSection = document.getElementById('name');

    var nameText;

    if (userData.name == undefined || userData.name == null) {
        userData.name = prompt("Please enter your name", "");

        if (userData.weapon != undefined || userData.weapon != null) {
            userData.damage = userData.job.damage + userData.weapon.damage;
        } else {
            userData.damage = userData.job.damage;
        }

        userData.health = userData.job.health;

        userData.attackSpeed = userData.job.attackSpeed;

        userData.maxHealth = userData.job.health;
    }

    nameText = "Name: " + userData.name;

    nameSection.innerText = nameText;

    // Title section construction

    var titleSection = document.getElementById('title');

    var titleText = "Gold: " + userData.income + ", " + userData.name + " the " + userData.job.jobName + ".";

    titleSection.innerText = titleText;

    // Class section construction

    var jobSection = document.getElementById('job');

    var jobText = "Profession: " + userData.job.jobName;

    jobSection.innerText = jobText;

    // Income section construction
    var incomeSection = document.getElementById('income');

    var incomeText = "Gold: " + userData.income;

    incomeSection.innerText = incomeText;

    // Level section construction
    var levelSection = document.getElementById('level');

    var levelText = "Level: " + userData.level;

    levelSection.innerText = levelText;

    // Health section construction
    var healthSection = document.getElementById('health');

    var healthText = "Health: " + userData.health + " / " + userData.maxHealth;

    healthSection.innerText = healthText;


    // Damage section construction
    var damageSection = document.getElementById('damage');

    var damageText = "Damage: " + userData.damage;

    damageSection.innerText = damageText;

    // Attack Speed section construction
    var attackSpeedSection = document.getElementById('attack-speed');

    var attackSpeedText = "Attack Speed: " + userData.attackSpeed;

    attackSpeedSection.innerText = attackSpeedText;

    // Weapon section construction

    var weaponSection = document.getElementById('weapon');

    var weaponText;

    if (userData.weapon == undefined || userData.weapon == null)
        weaponText = "Weapon: Empty ";
    else
        weaponText = "Weapon: " + userData.weapon.name;

    weaponSection.innerText = weaponText;
}

// Level Up

function levelUp() {
    userData.level++;

    if (userData.weapon != null && userData.weapon != undefined)
        userData.damage = userData.weapon.damage + (userData.job.damage * userData.level);
    else
        userData.damage = userData.job.damage * userData.level;

    userData.damage = userData.job.damage * userData.level;
    userData.attackSpeed = userData.job.attackSpeed;
    userData.maxHealth = userData.job.health * userData.level;

    constructUserData();
}

function permaDeath() {
    userData.name = window.prompt("You died, type a new name for your character.");

    var oldWeapon = userData.weapon;

    userData = newData;
    userData.job = apprenticeClass;

    userData.weapon = oldWeapon;

    constructUserData();

}

// Class Up / Item Buy

function classUp() {

    if (userData.weapon != null && userData.weapon != undefined)
        userData.damage = userData.weapon.damage + (userData.job.damage * userData.level);
    else
        userData.damage = userData.job.damage * userData.level;

    userData.attackSpeed = userData.job.attackSpeed;
    userData.maxHealth = userData.job.health * userData.level;
    userData.health = userData.maxHealth;

    constructUserData();
}


function cheatCode() {
    console.log("thereisnourflevel")

    var password = prompt("Type the password.", "")

    if (password == "thereisnourflevel") {

        userData.job = cheatClass;

        levelUp();

        userData.level += 20;

        userData.health = userData.maxHealth;

        var deleteButton = document.getElementById('cheat');

        deleteButton.style.display = "none";

        console.clear();
    } else {

        cheat++;

        if (cheat == 2)
            console.clear();
    }
}