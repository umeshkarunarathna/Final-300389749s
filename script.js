
//Check previous dates cannot be se;lected
document.getElementById('date').min = new Date(Date.now() + 86400000).toISOString().split('T')[0];

// get the date from the input field
function getDate() {

    let date = document.getElementById('birthday').value;
    date = new Date(date);
    return date;
    
}


// start the countdown
function start() {

// Set the date we're counting down to
// Get today's date and time
var now = new Date();

// Find the distance between now and the count down date
var timeDifference = getDate() - now;

// Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  var deciseconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
  document.getElementById('days').innerHTML = days
  document.getElementById('hrs').innerHTML = hours
  document.getElementById('mins').innerHTML = minutes
  document.getElementById('secs').innerHTML = seconds
  document.getElementById('dicsecs').innerHTML = deciseconds

  // Update the count down every 1 second
  setInterval("start()",100)


// If the count down is over, write some text 
if(timeDifference<=0)
{
    alert("Date Has Been Reached !")
}
}

