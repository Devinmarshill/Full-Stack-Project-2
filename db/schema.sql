DROP DATABASE IF EXISTS projects_db;
CREATE DATABASE projects_db;

USE projects_db;

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(100) NOT NULL
);

CREATE TABLE descriptions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descriptions_id INT,
    descriptions TEXT NOT NULL,
    FOREIGN KEY (projects_id)
    REFERENCES projects(id)
    ON DELETE SET NULL
);
