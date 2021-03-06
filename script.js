const HOURHAND = document.querySelector("#lhour");
const MINUTEHAND = document.querySelector("#lminute");
const SECONDHAND = document.querySelector("#lsecond");
const USAHOURHAND = document.querySelector("#USAhour");
const USAMINUTEHAND = document.querySelector("#USAminute");
const USASECONDHAND = document.querySelector("#USAsecond");
const INDIAHOURHAND = document.querySelector("#Indiahour");
const INDIAMINUTEHAND = document.querySelector("#Indiaminute");
const INDIASECONDHAND = document.querySelector("#Indiasecond");
const LONDONHOURHAND = document.querySelector("#Londonhour");
const LONDONMINUTEHAND = document.querySelector("#Londonminute");
const LONDONSECONDHAND = document.querySelector("#Londonsecond");
var date = new Date(); // For local time
//----------get time from different timezones-------------------
var londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
londonTime = new Date(londonTime);

var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
usaTime = new Date(usaTime);

var indiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
indiaTime = new Date(indiaTime);
//--------------------------------------------------------------
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let usahr = usaTime.getHours();
let usamin = usaTime.getMinutes();
let usasec = usaTime.getSeconds();
let indiahr = indiaTime.getHours();
let indiamin = indiaTime.getMinutes();
let indiasec = indiaTime.getSeconds();
let londonhr = londonTime.getHours();
let londonmin = londonTime.getMinutes();
let londonsec = londonTime.getSeconds();

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;
let usahrPosition = (usahr*360/12)+(usamin*(360/60)/12);
let usaminPosition = (usamin*360/60)+(usasec*(360/60)/60);
let usasecPosition = usasec*360/60;
let indiahrPosition = (indiahr*360/12)+(indiamin*(360/60)/12);
let indiaminPosition = (indiamin*360/60)+(indiasec*(360/60)/60);
let indiasecPosition = indiasec*360/60;
let londonhrPosition = (londonhr*360/12)+(londonmin*(360/60)/12);
let londonminPosition = (londonmin*360/60)+(londonsec*(360/60)/60);
let londonsecPosition = londonsec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;
    usahrPosition = usahrPosition+(3/360);
    usaminPosition = usaminPosition+(6/60);
    usasecPosition = usasecPosition+6;
    indiahrPosition = indiahrPosition+(3/360);
    indiaminPosition = indiaminPosition+(6/60);
    indiasecPosition = indiasecPosition+6;
    londonhrPosition = londonhrPosition+(3/360);
    londonminPosition = londonminPosition+(6/60);
    londonsecPosition = londonsecPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
    USAHOURHAND.style.transform = "rotate(" + usahrPosition + "deg)";
    USAMINUTEHAND.style.transform = "rotate(" + usaminPosition + "deg)";
    USASECONDHAND.style.transform = "rotate(" + usasecPosition + "deg)";
    INDIAHOURHAND.style.transform = "rotate(" + indiahrPosition + "deg)";
    INDIAMINUTEHAND.style.transform = "rotate(" + indiaminPosition + "deg)";
    INDIASECONDHAND.style.transform = "rotate(" + indiasecPosition + "deg)";
    LONDONHOURHAND.style.transform = "rotate(" + londonhrPosition + "deg)";
    LONDONMINUTEHAND.style.transform = "rotate(" + londonminPosition + "deg)";
    LONDONSECONDHAND.style.transform = "rotate(" + londonsecPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);
