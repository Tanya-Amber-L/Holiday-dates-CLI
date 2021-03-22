# Holiday-dates-CLI
> A simple CLI to get the holiday dates of a country

## Installation
```
npm install @tanya-amber-l/holidates
```

## Syntax
```
holidates $contry $date
```
* If country parameter contains a spelling mistake, cannot be find, or is empty you'll get an error.
> Note: Country parameter is case-insensitive.
* If date parameter is empty, it will get the results for the current year.

## Result example
```
holidates Belgium 2021
```

Gives the result : 

```
New Year's Day - 2021-01-01
Easter Sunday - 2021-04-04
Easter Monday - 2021-04-05
Labour Day - 2021-05-01
Ascension Day - 2021-05-13
Whit Monday - 2021-05-24
Belgian National Day - 2021-07-21
Assumption Day - 2021-08-15
All Saints' Day - 2021-11-01
Armistice Day - 2021-11-11
Christmas Day - 2021-12-25
```

## Ressources
* [Nager.date](https://date.nager.at/) : Returns the public holidays from a given year and country.
* [Country-list](https://www.npmjs.com/package/country-list) :  to convert the country name onto a country code.
* [Axios](https://www.npmjs.com/package/axios) : to perform HTTP requests.
* [Chalk](https://www.npmjs.com/package/chalk) : to add some colors in the terminal.