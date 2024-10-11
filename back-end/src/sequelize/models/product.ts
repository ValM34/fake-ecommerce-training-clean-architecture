import { Sequelize, DataTypes } from 'sequelize';

export const sequelize = new Sequelize(`${process.env.DATABASE_DIALECT}://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);

const product = sequelize.define(
  'Product',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  },
);

export default product;