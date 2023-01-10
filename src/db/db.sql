CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name varchar(65) not null,
    user_mail text not null,
    user_phone varchar(13) not null,
    user_password varchar(64) not null 
);

CREATE TABLE category(
    category_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_title varchar
);

CREATE TABLE product(
    product_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_title varchar not null,
    product_price int not null,
    category_id uuid,
    product_color varchar,
    product_img varchar,
    FOREIGN KEY (category_id)
    REFERENCES category(category_id)
    ON DELETE CASCADE
);

CREATE TABLE aksia(
    aksia_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid,
    FOREIGN KEY (product_id)
    REFERENCES product(product_id)
    ON DELETE CASCADE,
    foiz int
);

CREATE TABLE likes(
    like_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid,
    FOREIGN KEY (product_id)
    REFERENCES product(product_id)
    ON DELETE CASCADE,
    user_id uuid,
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);

drop table if EXISTS karzinka;
CREATE TABLE karzinka(
    karzinka_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid,
    FOREIGN KEY (product_id)
    REFERENCES product(product_id)
    ON DELETE CASCADE,
    user_id uuid,
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);

CREATE TABLE dastavka(
    dastavka_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    city varchar not null,
    street varchar not null,
    distreet varchar not null,
    home varchar not null,
    number varchar not null,
    product_id uuid,
    FOREIGN KEY (product_id)
    REFERENCES product(product_id)
    ON DELETE CASCADE,
    user_id uuid,
    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);
