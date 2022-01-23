module.exports = {
  port: 8081,
  db: {
    user: 'root',
    password: 'mysql',
    database: 'dedun',
    options: {
      dialect: 'mysql',
      host: 'localhost'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
