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
}

module.exports = UserManager;
