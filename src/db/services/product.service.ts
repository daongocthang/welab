import { faker } from '@faker-js/faker';
import { FindAndCountOptions } from 'sequelize';
import ProductModel, { Product } from '../models/product.model';

class ProductService {
    fake = (): any => ({
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        cover: faker.image.url(),
    });
    bulkCreate = async (payload: Product[]): Promise<void> => {
        await ProductModel.bulkCreate(payload);
    };
    create = async (payload: Product): Promise<void> => {
        await ProductModel.create(payload);
    };

    findAndCountAll = async (options?: FindAndCountOptions<Product>): Promise<{ rows: Product[]; count: number }> => {
        return await ProductModel.findAndCountAll(options);
    };

    count = async (): Promise<number> => await ProductModel.count();
}

export default ProductService;
