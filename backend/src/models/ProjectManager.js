const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.database.query(
      `INSERT INTO ${this.table} (name, description, link, user_id) VALUES (?, ?, ?, ?)`,
      [project.name, project.description, project.link, project.user_id]
    );
  }

  update(project) {
    return this.database.query(
      `UPDATE ${this.table} set name = ?, description = ?, link = ?, user_id = ? WHERE id = ?`,
      [
        project.name,
        project.description,
        project.link,
        project.user_id,
        project.id,
      ]
    );
  }

  findProjectsWithUserId(userId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE user_id = ?`,
      [userId]
    );
  }
}

module.exports = ProjectManager;
