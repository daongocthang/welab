import ProductModel, { Product } from './models/product.model';
import ProductService from './services/product.service';

const developing = process.env.NODE_ENV === 'development';

export const fakeData = async (count: number): Promise<void> => {
    const service = new ProductService();

    const payload: Array<Product> = [];
    for (let i = 0; i < count; i++) {
        payload.push(service.fake());
    }
    await service.bulkCreate(payload);
};

const dbInit = async (): Promise<void> => {
    await ProductModel.sync({ alter: developing });
};

export default dbInit;
