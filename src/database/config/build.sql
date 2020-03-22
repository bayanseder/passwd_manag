BEGIN;
DROP TABLE IF EXISTS userstable CASCADE;
CREATE TABLE userstable (
    id SERIAL PRIMARY KEY NOT NULL ,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL ,
    password VARCHAR(300) NOT NULL   
);

INSERT INTO userstable (user_name ,email ,password)
    values ('jahesh' ,'jahesh4@home.com' , '22334455q'),
           ('cow' ,'cow2020@cow.com' ,'zxczxc123');

COMMIT;
END;