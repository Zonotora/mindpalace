---
slug: /databases/sql
tags: []
lastModified: 2021-12-31
created: 2021-11-18
title: Sql
header: [{"depth":1,"name":"CREATE","link":"CREATE"},{"depth":1,"name":"DROP","link":"DROP"},{"depth":1,"name":"INSERT INTO","link":"INSERT-INTO"},{"depth":1,"name":"DELETE FROM","link":"DELETE-FROM"},{"depth":1,"name":"UPDATE","link":"UPDATE"},{"depth":1,"name":"ALTER TABLE","link":"ALTER-TABLE"},{"depth":2,"name":"ADD COLUMN","link":"ADD-COLUMN"},{"depth":2,"name":"DROP COLUMN","link":"DROP-COLUMN"},{"depth":1,"name":"SELECT","link":"SELECT"},{"depth":1,"name":"SELECT DISTINCT","link":"SELECT-DISTINCT"},{"depth":1,"name":"WHERE","link":"WHERE"},{"depth":2,"name":"Equality","link":"Equality"},{"depth":2,"name":"Inequality","link":"Inequality"},{"depth":2,"name":"Expression","link":"Expression"},{"depth":2,"name":"Multiple","link":"Multiple"}]
---


|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Greece|131940|Athens|11000000|EU|EUR|
|Sweden|449964|Stockholm|9555893|EU|SEK|
|Peru|1285220|Lima|29907003|SA|PEN|
|Finland|337030|Helsinki|5244000|EU|EUR|



# CREATE
```sql
CREATE TABLE Countries (
    name TEXT PRIMARY KEY,
    capital TEXT NOT NULL,
    area FLOAT,
    population INT,
    continent CHAR(2),
    currency CHAR(3) NOT NULL
);
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|

# DROP
```sql
DROP TABLE Countries;
```

# INSERT INTO
```sql
INSERT INTO Countries VALUES ('Norway', 123456789, 'Oslo', 987654321, 'EU', 'EUR');
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Greece|131940|Athens|11000000|EU|EUR|
|Sweden|449964|Stockholm|9555893|EU|SEK|
|Peru|1285220|Lima|29907003|SA|PEN|
|Finland|337030|Helsinki|5244000|EU|EUR|
|Norway|123456789|Oslo|987654321|EU|EUR|

# DELETE FROM
```sql
DELETE FROM Countries
WHERE continent = ’EU’;
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Peru|1285220|Lima|29907003|SA|PEN|

# UPDATE
```sql
UPDATE Countries
SET population = population + 1
WHERE name = 'Finland';

```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Greece|131940|Athens|11000000|EU|EUR|
|Sweden|449964|Stockholm|9555893|EU|SEK|
|Peru|1285220|Lima|29907003|SA|PEN|
|Finland|337030|Helsinki|5244001|EU|EUR|




# ALTER TABLE


## ADD COLUMN

```sql
ALTER TABLE Countries
ADD Test varchar(255);
```
|name|area|capital|population|continent|currency|test|
|-|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS||
|Greece|131940|Athens|11000000|EU|EUR||
|Sweden|449964|Stockholm|9555893|EU|SEK||
|Peru|1285220|Lima|29907003|SA|PEN||
|Finland|337030|Helsinki|5244000|EU|EUR||


## DROP COLUMN

```sql
ALTER TABLE Countries
DROP COLUMN Currency;
```
|name|area|capital|population|continent|
|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|
|Greece|131940|Athens|11000000|EU|
|Sweden|449964|Stockholm|9555893|EU|
|Peru|1285220|Lima|29907003|SA|
|Finland|337030|Helsinki|5244000|EU|


# SELECT
Select specified columns
```sql
SELECT Area, Capital FROM Countries;
```

|area|capital|
|-|-|
|945087|Dodoma|
|131940|Athens|
|449964|Stockholm|
|1285220|Lima|
|337030|Helsinki|


Select all columns
```sql
SELECT * FROM Countries;
```

|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Greece|131940|Athens|11000000|EU|EUR|
|Sweden|449964|Stockholm|9555893|EU|SEK|
|Peru|1285220|Lima|29907003|SA|PEN|
|Finland|337030|Helsinki|5244000|EU|EUR|

Select with where clause
```sql
SELECT * FROM Countries WHERE continent = 'EU';
```

|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Greece|131940|Athens|11000000|EU|EUR|
|Sweden|449964|Stockholm|9555893|EU|SEK|
|Finland|337030|Helsinki|5244000|EU|EUR|

# SELECT DISTINCT
```sql
SELECT DISTINCT currency FROM Countries;
```
|currency|
|-|
|SEK|
|PEN|
|EUR|
|TZS|

# WHERE

## Equality


```sql
SELECT * FROM Countries WHERE name = "Sweden";
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Sweden|449964|Stockholm|9555893|EU|SEK|



## Inequality
```sql
SELECT * FROM Countries WHERE continent <> ’EU’;
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Tanzania|945087|Dodoma|41892895|AF|TZS|
|Peru|1285220|Lima|29907003|SA|PEN|

## Expression
```sql
SELECT * FROM Countries WHERE population/area >= 80;
```

|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Greece|131940|Athens|11000000|EU|EUR|

## Multiple
```sql
SELECT * FROM Countries WHERE continent = 'EU' AND
    NOT (currency = 'EUR');
```
|name|area|capital|population|continent|currency|
|-|-|-|-|-|-|
|Sweden|449964|Stockholm|9555893|EU|SEK|





