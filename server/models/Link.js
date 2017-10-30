const db = require('./Db');

module.exports = {
  all: function(callback) {
    return db.query("select id, CONVERT(data USING utf8) data from links", callback);
  },
  get: function(id, callback) {
    return db.query("select id, CONVERT(data USING utf8) data from links where id=?", [id], callback);
  },
  add: function(obj, callback) {
    obj.created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return db.query("INSERT INTO `links` SET ?", {
      id: obj.id,
      data: JSON.stringify(obj)
    }, callback);
  },
  update: function(id, obj, callback) {
    obj.updated_at = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return db.query("update links set data=? where id=?", [
      JSON.stringify(obj),
      obj.id
    ], callback);
  },
  delete: function(id, callback) {
    return db.query("delete from links where id=?", [id], callback);
  }
};
