CREATE TABLE users (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50),
  password VARCHAR(50),
  created_at DATE,
  PRIMARY KEY(user_id)
);

CREATE TABLE messages (
  message_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT,
  content TEXT,
  emotional_rating INT,
  created_at DATE,
  PRIMARY KEY(message_id),
  CONSTRAINT fk_user
    FOREIGN KEY(user_id)
      REFERENCES users(customer_id)
      ON DELETE CASCADE
);

