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
holidates Belgium 2020
```

Gives the result : 

```
New Year's Day-2020-01-01
Easter Sunday-2020-04-12
Easter Monday-2020-04-13
Labour Day-2020-05-01
Ascension Day-2020-05-21
Whit Monday-2020-06-01
Belgian National Day-2020-07-21
Assumption Day-2020-08-15
All Saints' Day-2020-11-01
Armistice Day-2020-11-11
Christmas Day-2020-12-25
```
