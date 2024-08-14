// models/userModel.js
const db = require('../db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM workshop'; // Changed to 'info'
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (userData, callback) => {
    const query = 'INSERT INTO workshop (name, age, phn, emailid) VALUES (?, ?)'; // Changed to 'info'
    db.query(query, [userData.name, userData.age, userData.phn, userData.emailid], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM workshop WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  rename: (id, newName, callback) => {
    const query = 'UPDATE workshop SET name = ? WHERE id = ?';
    db.query(query, [newName, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};


module.exports = User;