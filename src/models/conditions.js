const db = require('../helpers/db')
const table = 'conditions'

module.exports = {
  getDetailCartModel: (id, cb) => {
    db.query(`SELECT * FROM ${table} WHERE id=${id}`, (_err, result, _field) => {
      cb(result)
    })
  },
  createCondModel: (arr, cb) => {
    db.query(`INSERT INTO ${table} (name) VALUES ('${arr[0]}')`, (_err, result, _fields) => {
      cb(result)
    })
  },
  getCartModel: (arr, cb) => {
    const query = `SELECT * FROM ${table} WHERE ${arr[0]} LIKE '%${arr[1]}%' ORDER BY ${arr[4]} ${arr[5]} LIMIT ${arr[2]} OFFSET ${(arr[3] - 1) * arr[2]}`
    db.query(query, (err, result, _field) => {
      cb(err, result)
    })
  },
  getCartModel1: (arr, cb) => {
    const query = `SELECT COUNT(*) AS count FROM ${table} WHERE ${arr[0]} LIKE '%${arr[1]}%'`
    db.query(query, (_err, data, _field) => {
      cb(data)
    })
  },
  deleteCartModel: (id, cb) => {
    const query = `SELECT * FROM ${table} WHERE id=${id}`
    db.query(query, (_err, result, _fields) => {
      cb(result)
    })
  },
  deleteCartModel1: (id, cb) => {
    const query = `DELETE FROM ${table} WHERE id=${id}`
    db.query(query, (_err, result, _fields) => {
      cb(result)
    })
  }
}
