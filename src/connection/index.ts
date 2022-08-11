import { Sequelize } from "sequelize";

export default class DBConection {
  private static instance: Sequelize;

  public static getInstance(): Sequelize {
    if (!DBConection.instance) {
      DBConection.instance = new Sequelize("TOCAACADEMY", "root", "", {
        host: "localhost",
        dialect: "mysql",
        logging: true,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });
    }
    return DBConection.instance;
  }
}
