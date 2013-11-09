insert into vitamine (name, description, vitamineType, amount) values ('Vitamine A', 'Vitamine A desc.', 'VITAMINE_A', 50);
insert into vitamine (name, description, vitamineType, amount) values ('Vitamine B', 'Vitamine B desc.', 'VITAMINE_B', 50);
insert into vitamine (name, description, vitamineType, amount) values ('Vitamine C', 'Vitamine C desc.', 'VITAMINE_C', 50);
insert into vitamine (name, description, vitamineType, amount) values ('Calcium', 'Calcium desc.', 'CALCIUM', 50);

insert into activity (name, description, foodType, calories) values ('Sleep', 'Sleep desc.', 'SLEEP', 20);
insert into activity (name, description, foodType, calories) values ('Run', 'Run desc.', 'RUN', 100);
insert into activity (name, description, foodType, calories) values ('Play', 'Play desc.', 'PLAY', 50);
insert into activity (name, description, foodType, calories) values ('TV', 'TV desc.', 'TV', 30);

insert into food (name, description, happiness, calories, foodType) values ('Meat', 'Pig meat', 50, 200, 'MEAT' );
insert into food (name, description, happiness, calories, foodType) values ('Fish', 'Fish', 30, 100, 'FISH' );
insert into food (name, description, happiness, calories, foodType) values ('Legume', 'Legume', 10, 150, 'LEGUME' );
insert into food (name, description, happiness, calories, foodType) values ('Banana', 'Banana', 30, 70, 'FRUIT' );
insert into food (name, description, happiness, calories, foodType) values ('Candy', 'Candy', 100, 240, 'CANDY' );
insert into food (name, description, happiness, calories, foodType) values ('Cereals', 'Cereals', 70, 100, 'CEREAL' );

insert into food_vitamines (food_id, vitamines_id) values (1, 1);
insert into food_vitamines (food_id, vitamines_id) values (1, 2);
insert into food_vitamines (food_id, vitamines_id) values  (1, 3);

insert into food_vitamines (food_id, vitamines_id) values  (2, 1);
insert into food_vitamines (food_id, vitamines_id) values  (2, 3);
insert into food_vitamines (food_id, vitamines_id) values  (2, 2);

insert into food_vitamines (food_id, vitamines_id) values  (3, 1);
insert into food_vitamines (food_id, vitamines_id) values  (3, 2);

insert into food_vitamines (food_id, vitamines_id) values  (4, 4);
insert into food_vitamines (food_id, vitamines_id) values  (5, 2);
insert into food_vitamines (food_id, vitamines_id) values  (6, 3);


insert into lobster (name, password, email) values ('lobster1', 'pwd1', 'lob1@mail.com');
insert into lobster (name, password, email) values ('lobster2', 'pwd2', 'lob2@mail.com');
insert into lobster (name, password, email) values ('lobster3', 'pwd3', 'lob3@mail.com');
insert into lobster (name, password, email) values ('lobster4', 'pwd4', 'lob4@mail.com');
insert into lobster (name, password, email) values ('lobster5', 'pwd5', 'lob5@mail.com');
insert into lobster (name, password, email) values ('lobster6', 'pwd6', 'lob6@mail.com');


insert into status (idealCalories, happiness, lastEat)  values (300, 200, null) ;
insert into status (idealCalories, happiness, lastEat)  values (300, 200, null) ;
insert into status (idealCalories, happiness, lastEat)  values (300, 200, null) ;
insert into status (idealCalories, happiness, lastEat)  values (300, 200, null) ;

insert into statusvitamine (vitamine_id, amount, status_id) values (1, 100, 1);
insert into statusvitamine (vitamine_id, amount, status_id) values (2, 100, 1);
insert into statusvitamine (vitamine_id, amount, status_id) values (3, 100, 1);
insert into statusvitamine (vitamine_id, amount, status_id) values (4, 100, 1);

insert into statusvitamine (vitamine_id, amount, status_id) values (1, 100, 2);
insert into statusvitamine (vitamine_id, amount, status_id) values (2, 100, 2);
insert into statusvitamine (vitamine_id, amount, status_id) values (3, 100, 2);
insert into statusvitamine (vitamine_id, amount, status_id) values (4, 100, 2);

insert into statusvitamine (vitamine_id, amount, status_id) values (1, 100, 3);
insert into statusvitamine (vitamine_id, amount, status_id) values (2, 100, 3);
insert into statusvitamine (vitamine_id, amount, status_id) values (3, 100, 3);
insert into statusvitamine (vitamine_id, amount, status_id) values (4, 100, 3);

insert into statusvitamine (vitamine_id, amount, status_id) values (1, 100, 4);
insert into statusvitamine (vitamine_id, amount, status_id) values (2, 100, 4);
insert into statusvitamine (vitamine_id, amount, status_id) values (3, 100, 4);
insert into statusvitamine (vitamine_id, amount, status_id) values (4, 100, 4);

update lobster set status_id = 1 where name = 'lobster1';
update lobster set status_id = 2 where name = 'lobster2';
update lobster set status_id = 3 where name = 'lobster3';
update lobster set status_id = 4 where name = 'lobster4';

