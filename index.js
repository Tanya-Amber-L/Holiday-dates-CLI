#!/usr/bin/env node

// add packages
const { getCode } = require('country-list');
const axios = require('axios').default;
const chalk = require('chalk');

//Récupérer les paramètres de pays et date
let arguments = process.argv;
let country = arguments[2];
var year = arguments[3];
let date = new Date();
let todayYear = date.getFullYear();

//Associer le pays à son code
var twoLetterCountry = getCode(country);

// si l'année ou pays est indéfini
if (year === undefined) {var year = todayYear};
if (twoLetterCountry === undefined) {
    console.log(chalk.bold.red("Your country is undefined"));
}
else { //Envoyer la requête GET à date.nager API avec les paramètres
    axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${twoLetterCountry}`)

        .then(response => {
            response.data.forEach(holiday => {
                console.log(chalk.blue(holiday.name) + "-" + chalk.magenta(holiday.date));
            });
        })
        .catch(error => {
            console.log(chalk.bold.red(error));
        });
}