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

-- Datatypes in SQL
-- 01. CHAR
-- 02. VARCHAR
-- 03. BLOB
-- 04. INT
-- 05. TINYINT
-- 06. BIGINT
-- 07. BIT
-- 08. FLOAT
-- 09. DOUBLE
-- 10. BOOLEAN
-- 11. DATE
-- 12. YEAR
-- 13. UNSIGNED

-- CONSTRAINTS
-- NOT NULL
-- UNIQUE
-- DEFAULT
-- CHECK

-- KEYS CONSTRAINTS IN SQL
-- PRIMARY KEY
-- FOREIGN KEY

-- Different ways to checkout the data in tables
-- 01: SELECT <col1>, <col2> FROM <tb_name>
-- 02. SELECT * FROM <tb_name>
-- 03. SELECT DISTINCT <col1> FROM <tb_name>

-- Clauses: conditions applied to retrieve some data
-- WHERE Clause is used to apply conditions

-- Operators in SQL
-- ARITHMETIC: (+) (-) (*) (/) (%)
-- COMPARISON: (=) (!=) (>) (>=) (<) (<=)
-- LOGIC: (AND) (OR) (NOT) (IN) (BETWEEN) (ALL) (LIKE) (ANY)
-- BITWISE: Bitwise AND (&) and Bitwise OR (|)
