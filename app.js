'use strict'

let Seattle = new store('Seattle', 23, 65, 6.3);
let Tokyo = new store('Tokyo', 3, 24, 1.2);
let Dubai = new store('Dubai', 11, 38, 3.7);
let Paris = new store('Paris', 20, 38, 2.3);
let Lima = new store('Lima', 2, 16, 4.6);

function store(city, minCustomer, maxCustomer, avgSales) {
    this.city = city;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSales = avgSales;
    this.hourlySales = [];

    for(let i = 0; i < 14; i++) {
        let hourlySalesNumber = Math.round((Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer) * avgSales);
        this.hourlySales.push(hourlySalesNumber)
    }

    let total = this.hourlySales.reduce(function(a, b) {
        return a + b;
    }, 0);
    console.log(total);
}

let hours = [0600, 0700, 0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];

function addItemList(list, store){
    let ul = document.getElementById(list)

    for (let i = 0; i < store.hourlySales.length; i++){
        let item = document.createElement('li')
        let value = store.hourlySales[i]
        item.innerText = (hours[i] + value + ' cookies')
        ul.appendChild(item)
    }
    let item = document.createElement('li')

    let total = store.hourlySales.reduce(function(a, b){
        return a + b;
    }, 0);

    item.innerText = ('Total: ' + total + ' cookies')
    ul.appendChild(item)
}

addItemList('SeattleListing', Seattle)
addItemList('TokyoListing', Tokyo)
addItemList('Dubai', Dubai)
addItemList('Paris', Paris)
addItemList('LimaList', Lima)

function createTable() {
    var x = document.createElement('table');
    x.setAttribute('id', 'myTable');
    document.body.appendChild(x);

    var y = document.createElement('TR');
    y.setAttribute('id', 'myTableRow');
    document.getElementById('myTable').appendChild(y);

    var z = document.createElement('TD');
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById('myTr').appendChild(z);
}