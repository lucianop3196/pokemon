const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   //Solo letras, empezando con mayscula
      //   is: /^[A-Za-z]+$/,
      // },
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    strength: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
  });

  sequelize.define("type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //Solo letras, empezando con mayscula
        is: /^[A-Za-z]+$/,
      },
    },
  });
};
