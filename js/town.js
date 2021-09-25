function hospital() {

    if (userData.health == userData.maxHealth) {
        window.alert("You are already at full health")
    } else {
        window.alert("You will spend 2000 Gold to heal?")
        var choice = prompt("1. Yes / 2. No");

        switch (choice) {
            case "1":
                if (userData.income < 2000)
                    window.alert("You don't have enough Gold to heal.")
                else {
                    userData.income -= 2000;
                    userData.health = userData.maxHealth;
                    constructUserData();
                }
                break;
            default:
                break;
        }
    }
}


function buyWeapon(weapon) {
    if (userData.weapon == weapon)
        window.alert("You already got one of those...");

    else {
        if (userData.income >= weapon.price) {
            window.alert("This weapon costs " + weapon.price + ", do you wish to buy it?")
            var buy = prompt("Yes / No");
            if (buy == "Yes" || "yes") {
                userData.income -= weapon.price;
                userData.weapon = weapon;
                classUp();
                window.alert("You bought the " + weapon.name);
            }
        } else
            window.alert("Get out of here...");
    }
}



function barracks() {

    if (userData.job.jobName == "Creator")
        window.alert("...");

    if (userData.job.jobName == "Apprentice") {

        if (userData.level > 5) {
            window.alert("Congratulations, you are now qualified.");
            window.alert("Which of the followings interests you more.");

            var progression = prompt("1. " + warriorClass.jobName + " - " + warriorClass.price + " | 2." + rangerClass.jobName + " - " + rangerClass.price);

            switch (progression) {
                case "1":
                    if (userData.income >= warriorClass.price) {
                        userData.job = warriorClass;
                        constructUserData();
                        window.alert("Congratulations, you are now a " + userData.job.jobName);
                        classUp();
                    } else
                        window.alert("You don't have enough coin, come back later.");

                    break;

                case "2":
                    if (userData.income >= rangerClass.price) {
                        userData.job = rangerClass;
                        constructUserData();
                        window.alert("Congratulations, you are now a + " + userData.job.jobName);
                        classUp();
                    } else
                        window.alert("You don't have enough coin, come back later.")

                    break;

                default:
                    window.alert("...");
                    break;
            }
        } else
            window.alert("You are still not worth to advance in class.");

    } else if (userData.job.jobName == "Warrior" || userData.job.jobName == "Ranger") {
        window.alert("You once again?");
        if (userData.level > 20) {
            window.alert("It is amazing how far you have become.");
            userData.health = userData.maxHealth;
            if (userData.job.jobName == "Warrior") {
                userData.job = masterWarrior;
                classUp();
            }

            if (userData.job.jobName == "Ranger") {
                userData.job = masterRanger;
                classUp();
            }
        } else
            window.alert("You need more practice.");
    }
}