function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function reveal(myDIV) {
   var x = document.getElementById(myDIV);
   if (x.style.display == "") {
     x.style.display = "block";
   } else if (x.style.display == "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 }


 var anniversary_deadline = new Date(2020, 4, 17, 0, 0, 0)
 var bellweather_deadline = new Date(2019, 7, 9, 12, 0, 0)
 var bmsr_deadline = new Date(2019, 8, 19, 19, 30, 0)
 var china_deadline = new Date(2019, 6, 9, 21, 15, 0)
 var otakon_deadline = new Date(2019, 6, 26, 8, 0, 0)
 var transformus_deadline = new Date(2019, 6, 18, 12, 0, 0)

initializeClock('transformus_clockdiv', transformus_deadline);
initializeClock('otakon_clockdiv', otakon_deadline);
initializeClock('china_clockdiv', china_deadline);
initializeClock('bmsr_clockdiv', bmsr_deadline);
initializeClock('bellweather_clockdiv', bellweather_deadline);
initializeClock('anniversary_clockdiv', anniversary_deadline);