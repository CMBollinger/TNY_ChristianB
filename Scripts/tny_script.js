"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Christian Bollinger
   Date:   9/30/24

*/

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);
/* Function to create and run the countdown clock */ 
function runClock() {

   /* Store the current date and time */
   var currentDay = new Date()
   var dateStr = currentDay.toLocaleDateString ();
   var timeStr = currentDay.toLocaleTimeString ();


   /* Display the Current Date and Time */
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   /* Calculate days left until Jan 1st */
   var newYear = new Date("January 1st, 2018");
   var nextYear = currentDay.getFullYear () + 1;
   newYear.setFullYear(nextYear);
   var daysLeft = (newYear - currentDay)/(1000*60*60*24);

   /* Calculate the hours left in the current day */
   var hoursLeft = (daysLeft - Math.floor(daysLeft))*24;

   /* Calculate the minutes and seconds left in the current hour */
   var minsLeft = (hoursLeft - Math.floor(hoursLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

   /* Display Time left until New Years */
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hoursLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
}
