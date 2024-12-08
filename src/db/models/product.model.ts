import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

export type Product = {
    id: number;
    name: string;
    price: number;
    cover: string;
};

export type ProductCreation = Optional<Product, 'id'>;
export type ProductResult = Required<Product>;

class ProductModel extends Model<Product, ProductCreation> implements Product {
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
            type: DataTypes.DOUBLE,
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
        tableName: 'products',
    },
);

export default ProductModel;
