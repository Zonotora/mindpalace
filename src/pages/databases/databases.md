---
slug: /databases/databases
tags: []
lastModified: 2021-12-31
created: 2021-11-18
title: Databases
header: [{"depth":1,"name":"Database management system (DBMS)","link":"Database-management-system-(DBMS)"},{"depth":2,"name":"PostgreSQL","link":"PostgreSQL"},{"depth":1,"name":"Types","link":"Types"},{"depth":2,"name":"Relational databases","link":"Relational-databases"},{"depth":2,"name":"Semi-structured databases","link":"Semi-structured-databases"},{"depth":3,"name":"JSON","link":"JSON"},{"depth":4,"name":"JSON schemas","link":"JSON-schemas"},{"depth":4,"name":"JSON in PostgreSQL","link":"JSON-in-PostgreSQL"},{"depth":3,"name":"NoSQL","link":"NoSQL"},{"depth":1,"name":"SQL queries ?","link":"SQL-queries-?"},{"depth":1,"name":"Design using ER","link":"Design-using-ER"},{"depth":2,"name":"Weak entities","link":"Weak-entities"},{"depth":2,"name":"ISA-relationship","link":"ISA-relationship"},{"depth":1,"name":"Design using functional dependencies","link":"Design-using-functional-dependencies"},{"depth":2,"name":"Closure","link":"Closure"},{"depth":2,"name":"Boyce-Codd Normal Form (BCNF)","link":"Boyce-Codd-Normal-Form-(BCNF)"},{"depth":2,"name":"Multivalued dependency (MVD)","link":"Multivalued-dependency-(MVD)"},{"depth":2,"name":"1NF","link":"1NF"},{"depth":2,"name":"2NF","link":"2NF"},{"depth":2,"name":"3NF","link":"3NF"},{"depth":2,"name":"4NF","link":"4NF"},{"depth":1,"name":"Constraints","link":"Constraints"},{"depth":1,"name":"Triggers","link":"Triggers"},{"depth":1,"name":"Relational algebra","link":"Relational-algebra"},{"depth":1,"name":"Transactions","link":"Transactions"},{"depth":1,"name":"References","link":"References"}]
---

# Database management system (DBMS)
A database is a framework that is structured (the data is stored in efficient data structures), persistent (the data is not lost without deliberate action) and mutable (data can be added, deleted and modified). Often a specialized software is used called database management system that efficiently handles these three requirements at scale. The are many different DBMSs: Oracle, MS SQL Server, PostgreSQL, MySQL. and many more.

## PostgreSQL

# Types

## Relational databases

## Semi-structured databases

### JSON

#### JSON schemas
A JSON schema is either be a root schema or subschema, and it is defined as at JSON object itself. A specification of the core JSON schema can be found here @{core}. Because JSON is an non-structured model, schemas are a goof way of regaining some structure. Schemas tell us what to expect out of the document, optional and required parts, general structure and so on. They allow us to validate our data against our schemas as well to make sure that the data is consistent with our model. The schema consists of several different types of keywords that each maps to some value that determine if the a JSON object is valid given the schema.

`title` and `description` are used to identify the schema.
```json
{
    "title": "Title",
    "description": "This is a description."
}
```
| Valid | Invalid |
| - | - |
| Everything | Nothing |

`type` is used to define what type that is valid. Allowed types are: **array**, **boolean**, **integer**, **null**, **number**, **object** and **string**.
```json
{
    "type": "number",
}
```
| Valid | Invalid |
| - | - |
| 1 | true |
| 3.14 | "test" |
| 3.14e+10 | [1,2,3] |

`enum` specifies a set of valid values.
```json
{
    "type": "string",
    "enum": ["A", "B", "C"]
}
```
| Valid | Invalid |
| - | - |
| "A" | 3 |
| "B" | "D" |

`minimum` and `maximum` specifies a range of valid values.
```json
{
    "type": "integer",
    "minimum": 1,
    "maximum": 10
}
```
| Valid | Invalid |
| - | - |
| 1 | 0 |
| 7 | 11 |

`minLength` and `maxLength` specifies how short or long a string might be.
```json
{
    "type": "string",
    "minLength": 2,
    "maxLength": 3
}
```
| Valid | Invalid |
| - | - |
| "asd" | "z" |
| "qw" | "asdf" |

`properties` is used to define properties for objects. Properties allow us to have recursive types.
```json
{
    "type": "object",
    "properties": {
        "name": { "type": "string" },
        "age": { "type": "integer" }
    }
}
```
| Valid | Invalid |
| - | - |
| {"name": "Test", "other": 3 } | {  "name": 123, "other": 3 } |
| {"name" : "Qwerty", "age": 123 } | 123 |
| {} | { "age": "123" } |

`additionalProperties` is a boolean that specifies whether an object may contain properties that is not included in the schema.
```json
{
    "type": "object",
    "properties": {
        "age": { "type": "integer" }
    },
    "additionalProperties": false
}
```
| Valid | Invalid |
| - | - |
| { "age": 123 } | { "name": false } |
| {} | { "name" : "Qwerty", "age": 123 } |
|  | { "age": "123" } |

`required` specifies what properties an object must have.
```json
{
    "type": "object",
    "properties": {
        "age": { "type": "integer" }
    },
    "required": ["name", "age"]
}
```
| Valid | Invalid |
| - | - |
| { "name": false, "age": 123 } | { "name": "Test" } |
|  { "name" : "Qwerty", "age": 123 } | "asd" |
| { "name" : "Qwerty", "age": 123, "other": true } | {} |

`minProperties` and `maxProperties` specifies the minimum and maximum number of properties an object must have.
```json
{
    "type": "object",
    "minProperties": 1,
    "maxProperties": 2
}
```
| Valid | Invalid |
| - | - |
| { "name": false, "age": 123 } | { "name": "Test", "age": false, "other": 123 } |
|  { "name" : "Qwerty", "age": 123 } | "asd" |
| { "name" : "Qwerty" } | {} |

`items` specifies the properties of array elements.
```json
{
    "type": "array",
    "items": { "type": "integer" }
}
```
| Valid | Invalid |
| - | - |
| [1,2,3] | ["asd"] |
| [1,2,3,4,5] | ["asd",false,0,1,2] |

`uniqueItems` specifies that items must be unique.
```json
{
    "type": "array",
    "items": { "type": "integer" },
    "uniqueItems": true
}
```
| Valid | Invalid |
| - | - |
| [1,2,3] | ["asd"] |
| [1,2,3,4,5] | [1,1,2,3,4] |
| [] | 123 |

`minItems` and `maxItems` specifies the minimum and maximum number of items an array must have.
```json
{
    "type": "array",
    "minItems": 1,
    "maxItems": 2
}
```
| Valid | Invalid |
| - | - |
| [1,false] | [1,2,3] |
| ["test"] | [] |

`contains` specifies the an array must contain a specific item.
```json
{
    "type": "array",
    "contains": {"const": 42},
}
```
| Valid | Invalid |
| - | - |
| [1,false,42] | [1,2,3] |
| ["test",42] | [] |
| ["test",1,2,false,42] | [[42]] |

`allOf`, `anyOf`, `oneOf`, and `not` are used to combine multiple schemas with logic.



#### JSON in PostgreSQL


### NoSQL


# SQL queries ?

# Design using ER
The Entity-Relationship model is a high level design that expresses the aspects of the database as entities. It is very useful way of going from the domain to implementing the SQL. Going from the domain directly to SQL is often error prone, difficult and it can be hard to cooperate.

## Weak entities

## ISA-relationship

# Design using functional dependencies
Functional dependencies are another way of translating the domain to SQL schemas. Functional dependencies takes several formal statements about the domain description by which we can compute different normalized schemas with.
A functional dependency between a set of attributes to an attribute is written like
$$
\text{attribute(s)} \to \text{attribute}
$$
A concrete example could be
$$
\text{time} \,\, \text{room} \to \text{course}
$$
Which would mean that if we know a time and a room, we can uniquely identify a course. That means it can be at most one course per each time and room pair.

## Closure

## Boyce-Codd Normal Form (BCNF)

## Multivalued dependency (MVD)

## 1NF
The first normal form says that table cells should not contain tables or other complex structures.
## 2NF
## 3NF
## 4NF

# Constraints

# Triggers


# Relational algebra

# Transactions

# References
{core}:
    title: JSON Schema: A Media Type for Describing JSON Documents
    url: https://json-schema.org/draft/2020-12/json-schema-core.html