-- SQL is case insensitive, means uppercase and lowercase both are valid
-- CREATE keyword
CREATE DATABASE college;

-- USE keyword: to use a DB use this
USE college;

-- make table inside a DB with CREATE TABLE, also provide schema of table alongside
CREATE TABLE student(
    rollno INT,
    name VARCHAR(30),
    age INT
);

-- to insert data into table we use INSERT INTO
INSERT INTO student

-- also pass the values using VALUES keyword to add into table
VALUESqwdsss
(101, "Jake", 20)
(102, "Joe", 22)
(103, "John", 19)

-- SELECT keyword: to check the data inside table
SELECT * FROM student

-- Delete a DB
DROP DATABASE college
