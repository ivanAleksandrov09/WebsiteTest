var cookies = 0;
var multiplier = 1;
var cookiesPerSecond = 0;
var upgradeStatus = [false, false]; // Array that keeps track of the upgrades that have been bought

function checkBalance() { // Checks if player can buy upgrades
    if (upgradeStatus[0] == false) {
        if (multiplier == 1 && cookies >= 100) {
            document.getElementById('upgrade1').disabled = false;
        } else {
            document.getElementById('upgrade1').disabled = true;
        }
    }
    if (upgradeStatus[1] == false) {
        if (cookiesPerSecond == 0 && cookies >= 125) {
            document.getElementById('upgrade2').disabled = false;
        } else {
            document.getElementById('upgrade2').disabled = true;
        }
    }
}
function CookieIncrement() { // Cookies per second
    cookies += cookiesPerSecond;
    showCookies();
}
function upgrade1() {
    upgradeStatus[0] = true;
    document.getElementById('upgrade1').value = "Strength 1 (2x cookies x click) - Bought";
    document.getElementById('upgrade1').disabled = true;
    multiplier = 2;
    cookies = cookies - 100;
    showCookies();
}
function upgrade2() {
    upgradeStatus[1] = true;
    document.getElementById('upgrade2').value = "1 Cookies per second - 125 cookies - Bought";
    document.getElementById('upgrade2').disabled = true;
    cookiesPerSecond = 1;
    cookies = cookies - 125;
    showCookies();
    setInterval(CookieIncrement, 1000);
}
function showCookies() { // Update cookie count
    let elem = document.getElementById('amountCookies');
    elem.innerHTML = "Your cookies: " + cookies;
    checkBalance();
}

function cookieClicked() { // Increment cookie amount when cookie is clicked
    cookies += 1 * multiplier;
    showCookies();
}