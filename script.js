let navOpen = false;

function öppnaNav() {
    document.getElementById("öppna").style.width = "245px";
    navOpen = true;
}

function stängNav() {
    document.getElementById("öppna").style.width = "0";
    navOpen = false;
}

document.addEventListener('mouseover', function(muspekare) {
    const sidenav = document.getElementById('öppna');
    const main = document.getElementById('main');
    
    if (navOpen && !sidenav.contains(muspekare.target) && !main.contains(muspekare.target)) {
        stängNav();
    }
});

document.getElementById('skicka').addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector('form').innerHTML = 
    "Tack för ditt meddelande!";
});
