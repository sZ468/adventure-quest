// List of enemies

var counter = 0;

var grandmaster = {
    name: "Grand Master",
    health: 1000,
    damage: 4,
    attackSpeed: 1,
}

var zombie = {
    name: "Zombie",
    health: 4,
    damage: 0.5,
    attackSpeed: 1,
}

var ghoul = {
    name: "Ghoul",
    health: 4,
    damage: 0.5,
    attackSpeed: 1,
}

var skeleton = {
    name: "Skeleton",
    health: 4,
    damage: 0.5,
    attackSpeed: 1
}


// Practice function


function startPractice() {
    var stop = false;

    window.alert("Every practice costs 1000 gold");
    var answer = prompt("Yes / No");
    if (answer == "Yes" || answer == "yes")
        answer = true;
    else
        answer = false;

    if (answer) {
        if (userData.income > 1000) {
            userData.income -= 1000;
            window.alert("You leveled up.");
            levelUp();
        } else
            window.alert("You don't have enough gold.")
    }
}

function startBattle(enemy) {
    do {
        playerTurn(enemy);
        enemyTurn(enemy);
    }
    while (userData.health > 0 && enemy.health > 0)


    if (userData.health <= 0)
        permaDeath();

    else if (enemy.health <= 0) {
        var extraGold = Math.floor(Math.random() * (userData.level * 10) + 1);

        userData.income += extraGold;

        levelUp();

        window.alert("You gained " + extraGold + ".");

        counter++;

        var counterCont = counter % 3;
        if (counterCont == 0) {
            passiveIncome * 2;
        }
    }
}


function enemyTurn(enemy) {
    var damage = enemy.damage * enemy.attackSpeed;

    userData.health -= damage;
    window.alert(userData.name + " took " + damage + " damage.");
}

function playerTurn(enemy) {
    var damage = userData.damage * userData.attackSpeed;

    enemy.health -= damage;
    window.alert(enemy.name + " took " + damage + " damage.");
}

function chooseAnEnemy() {

    if (counter == 4) {
        var enemy = {
            name: "Shaman",
            health: 30,
            damage: 2,
            attackSpeed: 2
        }
        window.alert("You encountered a " + enemy.name);

        return enemy
    } else if (counter == 10) {
        var enemy = {
            name: "Lich",
            health: 2000,
            damage: 30,
            attackSpeed: 2
        }
        window.alert("You encountered a " + enemy.name);

        return enemy;

    } else {
        var w = Math.floor(Math.random() * 3) + 1;

        switch (w) {
            case 1:
                var enemy = {
                    name: "Zombie",
                    health: (userData.level * 3) + (Math.random() * 10 + 1),
                    damage: (userData.level) + 1,
                    attackSpeed: 1,
                }
                break;
            case 2:
                var enemy = {
                    name: "Ghoul",
                    health: (userData.level * 2) + (Math.random() * 8 + 2),
                    damage: (userData.level) + 2,
                    attackSpeed: 1,
                }
                break;
            case 3:
                var enemy = {
                    name: "Skeleton",
                    health: (userData.level * 2) + 10,
                    damage: (userData.level) + 1,
                    attackSpeed: 1
                }
                break;
        }

        window.alert("You encountered a " + enemy.name);
        return enemy;
    }
}