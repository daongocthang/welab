import ProductModel from './models/product.model';

const developing = process.env.NODE_ENV === 'development';

const dbInit = () => {
    ProductModel.sync({ alter: developing });
};

export default dbInit;
