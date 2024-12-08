import ProductModel, { Product } from './models/product.model';
import ProductService from './services/product.service';

const developing = process.env.NODE_ENV === 'development';

const fakeDataIfNotExists = async (): Promise<void> => {
    const service = new ProductService();
    const count = await service.count();
    if (count > 0) return;
    const payload: Array<Product> = [];
    for (let i = 0; i < 100; i++) {
        payload.push(service.fake());
    }
    await service.bulkCreate(payload);
};

const dbInit = async (): Promise<void> => {
    ProductModel.sync({ alter: developing });

    if (!developing) return;
    await fakeDataIfNotExists();
};

export default dbInit;
