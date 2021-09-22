'use strict';

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm' ,'5pm', '6pm', '7pm'];

function StoreLocation(name, minCust, maxCust, avgCookiesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.hourlySales = [];
  this.dailySales = 0;
  StoreLocation.all.push(this);
}

StoreLocation.all = [];

StoreLocation.prototype.calcAvgCookiesBought = function() {
  for (let i = 0; i < storeHours.length; i++) {


    let cookiesSales = Math.floor(this.calcRandomCookieSales());
    
    this.hourlySales.push(cookiesSales);    
    this.dailySales = this.dailySales + cookiesSales;
  }
};

StoreLocation.prototype.calcRandomCookieSales = function() {


  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) *  this.avgCookiesPerCust;
};

StoreLocation.prototype.renderTableRow = function() {

  let parentEl = document.getElementById('sales-data');

  let rowEl = document.createElement('tr');
  

  let dataEl = document.createElement('td');
  dataEl.innerText = this.name;
  rowEl.appendChild(dataEl);


  for (let sale = 0; sale < this.hourlySales.length; sale++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[sale];
    rowEl.appendChild(dataEl);
  }
  

  dataEl = document.createElement('td');
  dataEl.innerText = this.dailySales;
  rowEl.appendChild(dataEl);


  parentEl.appendChild(rowEl);
};

let seattle = new StoreLocation('Seattle', 23, 65, 6.3);
let lima = new StoreLocation('Lima', 18, 68, 4.1);
let paris = new StoreLocation('Paris', 30, 40, 2.4);
let dubai = new StoreLocation('Dubai', 1, 45, 13.5);
let tokyo = new StoreLocation('Tokyo', 20, 25, 3.7);

seattle.calcAvgCookiesBought();
seattle.renderTableRow();

lima.calcAvgCookiesBought();
lima.renderTableRow();

paris.calcAvgCookiesBought();
paris.renderTableRow();

dubai.calcAvgCookiesBought();
dubai.renderTableRow();

tokyo.calcAvgCookiesBought();
tokyo.renderTableRow();

console.log(StoreLocation.all);

function renderFooter() {
    let parentEl = document.getElementById('sales-data');
    let rowEl = document.createElement('tr');

    let dataEl = document.createElement('td');
    dataEl.innerText = 'Totals';
    rowEl.appendChild(dataEl);

    let grandTotal = 0;
    for (let hour = 0; hour < storeHours.length; hour ++) {
        let dataEl = document.createElement('td');
        let sum = 0;
        for (let store = 0; store < StoreLocation.all.length; store++) {

            sum = sum + StoreLocation.all[store].hourlySales[hour];
            grandTotal = grandTotal + StoreLocation.all[store].hourlySales[hour];
        }
        dataEl.innerText = sum;
        rowEl.appendChild(dataEl);
    }
    dataEl = document.createElement('td');
    dataEl.innerText = grandTotal;
    rowEl.appendChild(dataEl);
    parentE1.appendChild(rowE1);
}

renderFooter();