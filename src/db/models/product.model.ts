import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

export type ProductAttrs = {
  id: number;
  name: string;
  price: number;
  cover: string;
};

export type ProductCreation = Optional<ProductAttrs, "id">;
export type ProductResult = Required<ProductAttrs>;

class ProductModel
  extends Model<ProductAttrs, ProductCreation>
  implements ProductAttrs
{
  declare id: number;
  declare name: string;
  declare price: number;
  declare cover: string;
}

ProductModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    timestamps: false,
    tableName: "products",
  }
);

export default ProductModel;
