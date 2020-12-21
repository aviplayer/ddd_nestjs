const sql = `
 with sample1 as (insert into public."cinema"(
        "name", 
        "numberofseats"
    ) values (
        'October Cinema',
        300
    )
    )
    insert into public."session"(
        "cinema_id", 
        "time"
    ) values (
        1,
        'now()'
    );
`;

module.exports = {
    up: queryInterface => queryInterface.sequelize.query(sql),
    down: () => {
    },
};
