// What variables do I need?
// storehours, location, 
let hours = [ '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 am', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
// store locations in array

let seattleAvg = [];
let tokyoAvg = [];
let dubaiAvg = [];
let parisAvg = [];
let limaAvg = []

let seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    getRandomCust: function() {
        return Math.floor(Math.random() * this.maxCustomers);
    }
};
// grab random value generated and use for loop to get per hour
document.write("SEATTLE" + "<br>");

for (let i = 0; i < hours.length; i++) {
    seattleHourly = seattle.getRandomCust() * seattle.avgCookies;
//    console.log(seattle.getRandomCust());
    seattleAvg = seattleHourly;
    document.write(hours[i] + "<br>" + seattleAvg + "<br>" + "<br>");
}

////////////////////////////////////////////////////////////////////////////////////////////////
let tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    getRandom: function() {
        return Math.floor(Math.random() * this.maxCustomers);
    }
};
//console.log(tokyo);
document.write("<br>" + "TOKYO" + "<br>");

for (let i = 0; i < hours.length; i++) {
    tokyoHourly = tokyo.getRandom() * tokyo.avgCookies;
    tokyoAvg = tokyoHourly;
    document.write(hours[i] + "<br>" + tokyoAvg + "<br>" + "<br>");
}

let dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    getRandom: function() {
        return Math.floor(Math.random() * this.maxCustomers);
    }
};

document.write("<br>" + "DUBAI" + "<br>");

for (let i = 0; i < hours.length; i++) {
    dubaiHourly = dubai.getRandom() * dubai.avgCookies;
    dubaiAvg = dubaiHourly;
    document.write(hours[i] + "<br>" + dubaiAvg + "<br>" + "<br>");
}

let paris = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    getRandom: function() {
        return Math.floor(Math.random() * this.maxCustomers);
    }
};

document.write("<br>" + "PARIS" + "<br>");

for (let i = 0; i < hours.length; i++) {
    parisHourly = paris.getRandom() * paris.avgCookies;
    parisAvg = parisHourly;
//    console.log(paris.getRandom());
    document.write(hours[i] + "<br>" + parisAvg + "<br>" + "<br>");
}

let lima = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    getRandom: function() {
        return Math.floor(Math.random() * this.maxCustomers);
    },
};

document.write("<br>" + "LIMA" + "<br>")

for (let i = 0; i < hours.length; i++) {
    limaHourly = lima.getRandom() * lima.avgCookies;
    limaAvg = limaHourly;
    document.write(hours[i] + "<br>" + limaAvg + "<br>" + "<br>");
};

function cookieArray() {
    seattleAvg.push(seattleAvg);
    console.log(cookieArray())
}

// seattleAvg = seattleCookie[];
// tokyoAvg = tokyoCookie[];
// dubaiAvg = dubaiCookie[];
// parisAvg = parisCookie[];
// limaAvg = limaCookie[];