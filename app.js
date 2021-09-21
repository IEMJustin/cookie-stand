'use strict'
// What variables do I need?
// storehours, location, 
let hours = [ '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
let locations = []
// store locations in array

//var seattleCookie = [];
//let tokyoCookie = [];
//let dubaiCookie = [];
//let parisCookie = [];
//let limaCookie = [];

function cookieStore(location, minCustomers, maxCustomers, avgCookiePerCust, getRandomCust){
    this.location = location,
    this.minCustomers = minCustomers,
    this.maxCustomers = maxCustomers,
    this.avgCookiePerCust = avgCookiePerCust,
    this.hourlyTotal = [],
    this.dayTotal = 0;
    locations.push(this); 

this.getRandomCust = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

this.sumOfHourlyTotal = function() {
    for (var i = 0; i < hours.length; i++) {
        this.hourlyTotal.push(Math.floor(this.avgCookiePerCust * this.getRandomCust()));
        this.dayTotal += this.hourlyTotal[i];
 //       console.log(this.dayTotal)
    }
};

this.dataStorage = function() {
    this.sumOfHourlyTotal();

    let rows = document.createElement('tr');
    let storeLocation = document.createElement('th');
    storeLocation.textContent = this.location;
    rows.appendChild(location);

    for(var i = 0; i < hours.length; i++){
        var cookies = document.createElement('td');
        cookies.textContent = this.hourlyTotal;
        rows.appendChild(totalCookies);
        tab1.appendChild(row);
    }
};

let seattle = new cookieStore("Seattle", 23, 65, 6.3, this.location.sumOfHourlyTotal);
let tokyo = new cookieStore("Tokyo",3, 24, 1.2, this.location.sumOfHourlyTotal );
let dubai = new cookieStore("Dubai", 11, 38, 3.7, this.location.sumOfHourlyTotal);
let paris = new cookieStore("Paris", 20, 38, 2.3, this.location.sumOfHourlyTotal);
let lima = new cookieStore("Lima", 2, 16, 4,6, this.location.sumOfHourlyTotal);

// ~GOOSFRABA~

let tab1 = document.createElement('table');
let headerRow = document.createElement('thead');

let emptyCells = document.createElement('td');
emptyCells.setAttribute('class', 'empty');
headerRow.appendChild(emptyCells);

for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.setAttribute('td', 'cell');
    td.setAttribute('td', 'hours');
    td.innerHTML = hours[i];
    headerRow.appendChild(td);
};
let dayTotal = document.createElement('th');
dayTotal.textContent = 'Total';
headerRow.appendChild(dayTotal);
tab1.appendChild(headRow);

function displayStoreLoc() {
    for (var i = 0; i < locations.length; i++) {
        locations[i].displayData();
    }
}
displayStoreLoc();
document.body.appendChild(tab1);
}

// Why arent values getting picked up
