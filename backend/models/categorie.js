"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categorie.hasMany(models.product, { foreignKey: "categoryId" });
    }
  }
  categorie.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "categorie",
    }
  );
  return categorie;
};
