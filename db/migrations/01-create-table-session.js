const sql = `


    create table "session" (
        "id" smallint, 
        "cinema_id" smallint,
        "time" date, 
        primary key ("id"),
        foreign key("cinema_id") references cinema("id")
    );

`;

module.exports = {
    up: queryInterface => queryInterface.sequelize.query(sql),
    down: () => {},
};
