CREATE DATABASE tasksByGroup;
USE tasksByGroup;

CREATE TABLE Tasks (
    id INT PRIMARY KEY,
    group VARCHAR(100) NOT NULL,
    task VARCHAR(255) NOT NULL,
    dependencyIds VARCHAR(100) DEFAULT '[]',
    completedAt TIMESTAMP DEFAULT null 
);

INSERT INTO Tasks
    (id, group, task, dependencyIds, completedAt) 
VALUES 
    (1,"Purchases","Go to the bank", "[]",null),
    (2,"Purchases","Buy hammer","[1]",null),
    (3,"Purchases","Buy wood","[1]",null),
    (4,"Purchases","Buy nails","[1]",null),
    (5,"Purchases","Buy paint","[1]",null),
    (6,"Build Airplane","Hammer nails into wood","[2,3,4]",null),
    (7,"Build Airplane","Paint wings","[5,6]",null),
    (8,"Build Airplane","Have a snack","[]",null);