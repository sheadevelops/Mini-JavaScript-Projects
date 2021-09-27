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
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}

// Add new data obj to data arr
function addData(obj) {
    data.push(obj);
}