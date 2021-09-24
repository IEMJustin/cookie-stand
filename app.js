'use strict';

let storeHours = ['0600', '0700', '0800', '0900', '0010', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];
let storeLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

function Store(name, min_cus, max_cus, avgcpp) {
    this.name = name;
    this.min_cus = min_cus;
    this.max_cus = max_cus;
    this.avgcpp = avgcpp;
    this.salesPerHour = [];
    this.dailysales = 0;
    Store.all.push(this);
}

Store.all = [];

Store.prototype.calcavgcook = function() {
    for (let i = 0; i < storeHours.length; i++) {
        let rndCookSale = Math.floor(this.calcrandcook());
        this.salesPerHour.push(rndCookSale);
        this.dailysales = this.dailysales + rndCookSale;
    }
};

Store.prototype.calcrandcook = function() {
    return (Math.floor(Math.random() * (this.max_cus - this.min_cus + 1) + this.min_cus)) * this.avgcpp;
};

Store.prototype.rendtr = function() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('td');
    dataElem.innerText = this.name;
    rowElem.appendChild(dataElem);
    for (let s = 0; s < this.salesPerHour.length; s++) {
        dataElem = document.createElement('td');
        dataElem.innerText = this.salesPerHour[s];
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('td');
    dataElem.innerText = this.dailysales;
    rowElem.appendChild(dataElem);
    console.log(parentElem);
    parentElem.appendChild(rowElem);
};

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

rendHead();

function rendHead() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('th');
    dataElem.innerText = ' ';
    rowElem.appendChild(dataElem);
    for (let i = 0; i < storeHours.length; i++) {
        dataElem = document.createElement('th');
        dataElem.innerText = storeHours[i];
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('th');
    dataElem.innerText = 'Daily Total';
    rowElem.appendChild(dataElem);
    parentElem.appendChild(rowElem);

};

for (let store = 0; store < Store.all.length; store++) {
    let currentStore = Store.all[store];
    currentStore.calcavgcook();
    currentStore.rendtr();
};

function rendFoot() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('td');
    dataElem.innerText = 'TOTAL';
    rowElem.appendChild(dataElem);

    let grandTot = 0
    for (let h = 0; h < storeHours.length; h++) {
        let dataElem = document.createElement('td');
        let sum = 0;
        for (let store = 0; store < Store.all.length; store++) {
            sum = sum + Store.all[store].salesPerHour[h];
            grandTot = grandTot + Store.all[store].salesPerHour[h];
        }
        dataElem.innerText = sum;
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('td');
    dataElem.innerText = grandTot;
    rowElem.appendChild(dataElem);
    parentElem.appendChild(rowElem);
};


rendFoot();

let updateLocFormEl = document.getElementById('updateLocForm');

function handleNewLoc(formSubmission) {
    formSubmission.preventDefault();
    let newLoc = formSubmission.target.newLoc.value;
    let min_cus = formSubmission.target.min_cus.value;
    let max_cus = formSubmission.target.max_cus.value;
    let avgcpp = formSubmission.target.avgcpp.value;
    let newMin_cus = parseInt(min_cus);
    let newMax_cus = parseInt(max_cus);
    let newAvgcpp = parseInt(avgcpp);
    let updateLoc = new Store(this.name, newMin_cus, newMax_cus, newAvgcpp);
    updateLoc.calcavgcook();
    updateLoc.rendtr();
}

updateLocFormEl.addEventListener('submit', handleNewLoc);