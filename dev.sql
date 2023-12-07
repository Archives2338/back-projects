
create table projects
(
    id_project   int auto_increment
        primary key,
    name_project varchar(500) null
);

create table task
(
    id_task     int auto_increment
        primary key,
    title       varchar(500) null,
    description varchar(500) null,
    state       int          null comment '1: To do ; 2 : Progress , 3 : Complete',
    id_project  int          not null,
    constraint id_project
        foreign key (id_project) references projects (id_project)
);
create table type_user
(
    id_type int auto_increment
        primary key,
    name    varchar(100) null
);

create table users
(
    id_user      int auto_increment
        primary key,
    name         varchar(500) null,
    mail         varchar(500) null,
    password     varchar(500) null,
    id_type_user int          null,
    constraint id_type_user
        foreign key (id_type_user) references type_user (id_type)
);


INSERT INTO  type_user (id_type, name) VALUES (1, 'admin');
INSERT INTO  type_user (id_type, name) VALUES (2, 'consumidor');


INSERT INTO projects (name_project) VALUES ('Proyecto 1');
