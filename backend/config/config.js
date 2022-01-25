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
    // This 'secret' thing means only the server we'll be able to know if it´s valid or not
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
