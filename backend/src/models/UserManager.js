const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, age, campus, profile_picture, email) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.age,
        user.campus,
        user.profile_picture,
        user.email,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} set firstname = ?, lastname = ?, age = ?, campus = ?, profile_picture = ?, email = ? WHERE id = ?`,
      [
        user.firstname,
        user.lastname,
        user.age,
        user.campus,
        user.profile_picture,
        user.email,
        user.id,
      ]
    );
  }

  countUsers() {
    return this.database.query(`SELECT COUNT(*) AS total from ${this.table}`);
  }

  findAll(limit, offset) {
    return this.database.query(`SELECT * FROM ${this.table} LIMIT ? OFFSET ?`, [
      limit,
      offset,
    ]);
  }
}

module.exports = UserManager;
