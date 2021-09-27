"use strict";

// GETTING DOM ELEMENTS
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const randomBtn = document.getElementById("random-transactions");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetching random user and data
async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

function randomTransaction() {
  data = data.map((user) => {
    // Generate if transaction is positive or negative
    const type = Math.round(Math.random()) * 2 - 1;
    // Generate random transaction value
    const value = Math.floor(Math.random() * 1000000);
    console.log(value * type);
    return { ...user, money: user.money + value * type };
  });

  updateDOM();
}

// Sort by richest
function sortByRichest() {
    // => compare function
    data.sort((a, b) => b.money - a.money);

    updateDOM();
}

// Filter millionaires
function showMillionaires() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// Calculate the wealth of the users
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;

    main.appendChild(wealthEl);
}

// Add new data obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update the DOM | If no data is provided we use the data[]
function updateDOM(providedData = data) {
  // Clearing main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
randomBtn.addEventListener("click", randomTransaction);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);
