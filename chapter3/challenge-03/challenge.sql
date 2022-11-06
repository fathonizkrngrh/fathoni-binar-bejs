-- 1. DDL
CREATE DATABASE game_data;

CREATE TABLE user_game (
	id BIGSERIAL PRIMARY KEY,
	username VARCHAR(20) NOT NULL,
	password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
	
);

CREATE TABLE user_game_biodata (
    id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    telephone_number VARCHAR(14) NOT NULL,
);

CREATE TABLE user_game_history (
    id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    points INT NOT NULL DEFAULT 0,
    match_played INT NOT NULL DEFAULT 0,
    rank VARCHAR(20) NOT NULL DEFAULT 0
);

ALTER TABLE user_game_biodata ADD CONSTRAINT id_user_game FOREIGN KEY (user_id) REFERENCES user_game(id) ON DELETE CASCADE;
ALTER TABLE user_game_history ADD CONSTRAINT id_user_game FOREIGN KEY (user_id) REFERENCES user_game(id) ON DELETE CASCADE;

-- DML

INSERT INTO user_game(username, password, email) VALUES
    ('fathonizkr', 1111, 'fathoni@gmail.com' ),
    ('tonizkr', 2222, 'tonizkr@gmail.com' ),
    ('fajas', 3333, 'faja@gmail.com' ),
    ('rangga', 4444, 'rangga@gmail.com' ),
    ('aripp', 5555, 'arip@gmail.com' );

INSERT INTO user_game_biodata(
    user_id, 
    first_name, 
    last_name, 
    birthdate, 
    telephone_number) 
VALUES
    (1, 'fathoni', 'zikri', '30-10-2002', 03984732),
    (2, 'toni', 'zkr', '20-11-2002', 0983425),
    (3, '', 'faja', '30-12-2002', 5423452),
    (4, '', 'rangga', '12-7-2002', 25345253),
    (5, 'arip', 'rahman', '5-8-2002', 235253534);

INSERT INTO user_game_history(
    user_id, 
    points, 
    match_played, 
    rank) 
VALUES
    (1, 90, 5, 'Bronze'),
    (2, 200, 12, 'Gold'),
    (3, 120, 7, 'Silver'),
    (4, 250, 15, 'Platinum'),
    (5, 60, 4, 'Bronze');

SELECT * FROM user_game;
SELECT * FROM user_game_biodata;
SELECT * FROM user_game_history;
SELECT AVG(points) AS average_point FROM user_game_history;
SELECT SUM(match_played) AS total_played FROM user_game_history;
SELECT a.username, b.rank from user_game a JOIN user_game_history b ON a.id = b.user_id;
UPDATE user_game SET username='fathzkr' WHERE id=1;
DELETE FROM user_game WHERE id=5;

