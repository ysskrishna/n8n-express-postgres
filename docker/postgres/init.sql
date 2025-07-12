CREATE DATABASE n8ndb;
CREATE DATABASE expressdb;

-- Create items table in expressdb
\connect expressdb;

CREATE TABLE IF NOT EXISTS items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR,
    description VARCHAR
);