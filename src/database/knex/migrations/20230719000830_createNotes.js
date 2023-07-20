
exports.up = knex => knex.sckema.createTable("notes", table => {
    table.increments("id");
    table.text("title");
    table.text("description");
    table.interger("user_id").references("id").inTable("users");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("created_at").default(knex.fn.now());

});



exports.down = knex => knex.sckema.dropTable("notes");