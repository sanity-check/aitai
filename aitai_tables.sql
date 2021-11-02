DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50),
  password VARCHAR(100),
  created_at DATE,
  PRIMARY KEY(user_id)
);

CREATE TABLE messages (
  message_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT,
  content TEXT,
  emotional_rating FLOAT(2),
  created_at DATE,
  PRIMARY KEY(message_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(user_id)
      ON DELETE CASCADE
);

insert into users (username, password, created_at) values ('nbyk0', 'TXuUvpwy', '2020-12-12 01:13:57');
insert into users (username, password, created_at) values ('eworsnap1', 'jtx8tl', '2021-01-15 09:13:07');
insert into users (username, password, created_at) values ('dardern2', 'teyql0pAGj4', '2021-07-14 02:54:25');
insert into users (username, password, created_at) values ('rcamerati3', 'x97IUjE', '2021-06-05 21:46:45');
insert into users (username, password, created_at) values ('mjorin4', 'EuXsYtUbl', '2021-01-02 04:40:15');
insert into users (username, password, created_at) values ('achowne5', 'yucl0Z2cue6', '2020-11-24 12:44:53');
insert into users (username, password, created_at) values ('fhoyte6', 'ZDuayjf4', '2020-11-17 14:46:59');
insert into users (username, password, created_at) values ('jdict7', '0sPKmWtBn', '2021-07-05 10:42:21');
insert into users (username, password, created_at) values ('abish8', 'bT0QocClF', '2021-02-19 04:15:58');
insert into users (username, password, created_at) values ('acarryer9', 'ZacG1SGmh', '2021-10-09 13:40:52');
insert into users (username, password, created_at) values ('lbolluma', 'yBoaW5Hp69xQ', '2021-02-20 10:30:04');
insert into users (username, password, created_at) values ('jhannafordb', 'XkIRGIF', '2021-03-25 13:48:13');
insert into users (username, password, created_at) values ('eshaftoc', '1H3MPiCK', '2021-01-26 23:02:57');
insert into users (username, password, created_at) values ('gbrammard', 'elEpWca89eB', '2021-04-23 05:30:10');
insert into users (username, password, created_at) values ('ppilipetse', 'm5i85tfsA', '2020-12-25 04:04:20');
insert into users (username, password, created_at) values ('flovewellf', 'PmyvpfwBJGE', '2021-07-05 07:59:31');
insert into users (username, password, created_at) values ('strattlesg', 'B16BUzsXE', '2021-01-24 01:29:16');
insert into users (username, password, created_at) values ('ddupeyh', 'hKFl4V5', '2021-10-27 06:07:29');
insert into users (username, password, created_at) values ('nlamperdi', 'gqcraWDrMd', '2021-01-06 11:54:57');
insert into users (username, password, created_at) values ('jclaricoatsj', 'h7MS7BB9KymM', '2021-02-18 02:33:06');
insert into users (username, password, created_at) values ('jbrandhamk', 'Enu05E', '2020-12-02 02:46:56');
insert into users (username, password, created_at) values ('gjohanssonl', 'gefRJYcQobgy', '2021-06-30 00:05:59');
insert into users (username, password, created_at) values ('rfoskettm', 'OreGvRTYfw', '2021-06-13 20:55:50');
insert into users (username, password, created_at) values ('psifleetn', '35PF0vkYT', '2021-02-18 21:25:41');
insert into users (username, password, created_at) values ('rposnero', 'usxA8FwWUOh', '2020-12-24 07:27:35');
insert into users (username, password, created_at) values ('kettritchp', 'WFK2MlGxPye7', '2021-08-20 14:23:03');
insert into users (username, password, created_at) values ('spevrealq', 'O0gMfA', '2020-12-27 05:01:02');
insert into users (username, password, created_at) values ('cstollenbeckerr', 'jvo0txWMd', '2021-08-12 16:16:42');
insert into users (username, password, created_at) values ('aheislers', 'YD26W1LpVG', '2020-11-03 22:34:30');
insert into users (username, password, created_at) values ('rspadollinit', 'QRKtfdNys', '2021-07-22 06:50:40');


insert into messages (user_id, content, emotional_rating, created_at) values (1, 'Down-sized zero tolerance policy', 34, '2021-10-12 20:41:14');
insert into messages (user_id, content, emotional_rating, created_at) values (2, 'Automated optimal architecture', 21, '2021-07-08 22:37:12');
insert into messages (user_id, content, emotional_rating, created_at) values (3, 'Object-based explicit matrices', 52, '2021-05-15 21:57:50');
insert into messages (user_id, content, emotional_rating, created_at) values (4, 'Expanded fresh-thinking array', 44, '2021-03-01 14:47:52');
insert into messages (user_id, content, emotional_rating, created_at) values (5, 'Networked impactful function', 95, '2021-05-22 08:05:36');
insert into messages (user_id, content, emotional_rating, created_at) values (5, 'A second beautiful message', 95, '2021-05-22 08:05:36');
insert into messages (user_id, content, emotional_rating, created_at) values (6, 'Balanced zero administration help-desk', 6, '2021-03-28 16:35:27');
insert into messages (user_id, content, emotional_rating, created_at) values (7, 'Ergonomic bifurcated moratorium', 24, '2021-06-24 20:22:55');
insert into messages (user_id, content, emotional_rating, created_at) values (8, 'Ameliorated intangible throughput', 95, '2021-04-16 12:39:36');
insert into messages (user_id, content, emotional_rating, created_at) values (9, 'Stand-alone tertiary throughput', 70, '2021-03-08 17:19:46');
insert into messages (user_id, content, emotional_rating, created_at) values (10, 'Enterprise-wide explicit superstructure', 71, '2021-02-10 09:26:06');
insert into messages (user_id, content, emotional_rating, created_at) values (11, 'Pre-emptive national extranet', 51, '2020-12-22 04:19:34');
insert into messages (user_id, content, emotional_rating, created_at) values (12, 'Diverse next generation throughput', 45, '2021-07-26 23:25:32');
insert into messages (user_id, content, emotional_rating, created_at) values (13, 'Assimilated solution-oriented knowledge user', 87, '2021-06-25 15:03:19');
insert into messages (user_id, content, emotional_rating, created_at) values (14, 'Open-architected logistical interface', 31, '2020-11-30 12:39:30');
insert into messages (user_id, content, emotional_rating, created_at) values (15, 'Grass-roots neutral frame', 77, '2020-12-31 20:39:44');
insert into messages (user_id, content, emotional_rating, created_at) values (16, 'Cloned web-enabled contingency', 31, '2021-05-04 09:59:42');
insert into messages (user_id, content, emotional_rating, created_at) values (17, 'Horizontal zero administration knowledge user', 98, '2021-02-13 23:00:37');
insert into messages (user_id, content, emotional_rating, created_at) values (18, 'Function-based impactful initiative', 76, '2021-10-28 11:13:49');
insert into messages (user_id, content, emotional_rating, created_at) values (19, 'User-centric responsive hardware', 25, '2021-10-07 08:23:05');
insert into messages (user_id, content, emotional_rating, created_at) values (20, 'Multi-layered bifurcated hardware', 27, '2021-08-18 23:43:18');
insert into messages (user_id, content, emotional_rating, created_at) values (21, 'Multi-layered 3rd generation monitoring', 34, '2021-01-28 02:53:15');
insert into messages (user_id, content, emotional_rating, created_at) values (22, 'Mandatory systemic algorithm', 65, '2021-03-10 21:08:33');
insert into messages (user_id, content, emotional_rating, created_at) values (23, 'Distributed even-keeled capability', 32, '2021-08-27 00:58:29');
insert into messages (user_id, content, emotional_rating, created_at) values (24, 'Proactive attitude-oriented flexibility', 2, '2021-08-06 12:59:45');
insert into messages (user_id, content, emotional_rating, created_at) values (25, 'Open-source discrete parallelism', 37, '2021-02-21 07:05:24');
insert into messages (user_id, content, emotional_rating, created_at) values (26, 'Operative non-volatile focus group', 10, '2021-10-17 10:14:07');
insert into messages (user_id, content, emotional_rating, created_at) values (27, 'Exclusive bottom-line frame', 99, '2021-05-15 10:34:46');
insert into messages (user_id, content, emotional_rating, created_at) values (28, 'Expanded client-server intranet', 21, '2021-08-01 19:39:39');
insert into messages (user_id, content, emotional_rating, created_at) values (29, 'Total systematic application', 43, '2020-11-07 19:23:05');
insert into messages (user_id, content, emotional_rating, created_at) values (30, 'Fundamental high-level secured line', 82, '2020-11-04 12:27:02');