-- SQL is case insensitive, means uppercase and lowercase both are valid
-- CREATE keyword
CREATE DATABASE college;

-- to use a DB, code: USE <db_name>
USE college;

-- make table inside a DB with CREATE TABLE, also provide schema of table alongside
CREATE TABLE student(
    rollno INT,
    name VARCHAR(30),
    age INT
);

-- to insert data into table we use INSERT INTO
INSERT INTO student;

-- also pass the values using VALUES keyword to add into table
VALUES
(101, "Jake", 20)
(102, "Joe", 22)
(103, "John", 19);

-- SELECT keyword: to check the data inside table
SELECT * FROM student;

-- conditions in sql
-- use condition when creating db or tb, as follows:
-- IF NOT EXISTS: this will check if a  db exits
CREATE DATABASE IF NOT EXISTS college;

-- to see all the databases, code SHOW <db_name>
SHOW DATABASES;

-- to check tables in a db, use show tables:
SHOW TABLES;

-- Delete a DB
DROP DATABASE college;

-- DELETE a db with conditions
DROP DATABASE IF EXISTS college;
