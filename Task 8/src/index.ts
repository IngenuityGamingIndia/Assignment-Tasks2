import {APIService} from './ts/APIService';

const api = new APIService();
const table1 = document.querySelector('#table');
var x:string = "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/";
var y:string;
var ans:string;
const btn = document.querySelector('#btn');
const content = document.querySelector('#content');
btn.addEventListener('click',(e)=>{
    let svalue:string = (<HTMLInputElement>document.getElementById('continent')).value;
    e.preventDefault();
    if(svalue=='All'){
        table1.textContent = null;
        alert('wait a sec, data is loading...');
        y = "npm-covid-data/";
        ans = x + y;
        api.COVID_DATA = ans;
        display();
    }
    if(svalue=='Asia'){
        table1.textContent = null;
        alert('wait a sec, data is loading...');
        y = "npm-covid-data/asia";
        ans = x + y;
        api.COVID_DATA = ans;
        display();
    }
    if(svalue=='Africa'){
        table1.textContent = null;
        alert('wait a sec, data is loading...');
        y = "npm-covid-data/africa";
        ans = x + y;
        api.COVID_DATA = ans;
        display();
    }
    if(svalue=='South America'){
        table1.textContent = null;
        alert('wait a sec, data is loading...');
        y = "npm-covid-data/southamerica";
        ans = x + y;
        api.COVID_DATA = ans;
        display();
    }
    if(svalue=='North America'){
        table1.textContent = null;
        alert('wait a sec, data is loading...');
        y = "npm-covid-data/northamerica";
        ans = x + y;
        api.COVID_DATA = ans;
        display();
    }
})
function display(){
    api.getCovidData().then(data => {
        const keys = Object.keys(data[0]);
        const topRow = document.createElement('tr');
        const table = document.getElementById('table');
        table.appendChild(topRow);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            topRow.appendChild(th);
        });
        data.forEach(element => {
            const keys = Object.keys(element);
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = (<any>element)[key];
                row.appendChild(td);
            });
            table.appendChild(row);
        });
    });
}
