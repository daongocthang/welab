import { Request, Response } from 'express';
import { Product } from '../../db/models/product.model';
import ProductService from '../../db/services/product.service';
import { PagingData } from '../../types';

const getPagination = (page: number | undefined, size: number | undefined): { limit: number; offset: number } => {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (
    data: { rows: Product[]; count: number },
    page: number | undefined,
    limit: number,
): PagingData => {
    const { rows: products, count: totalItems } = data;

    return {
        totalItems,
        data: products,
        currentPage: page ? +page : 0,
        totalPages: Math.ceil(totalItems / limit),
    };
};

class ProductController {
    findAll = async (req: Request, res: Response): Promise<void> => {
        const { p, s } = req.query;
        const page = p ? Number(p) : undefined;
        const size = s ? Number(s) : undefined;
        const service = new ProductService();
        const { limit, offset } = getPagination(page, size);
        try {
            const data = await service.findAndCountAll({ limit, offset });
            res.send(getPagingData(data, page, limit));
        } catch (error) {
            res.status(500).send({ message: error || 'Some error occurred while retrieving tutorials.' });
        }
    };
}

export default new ProductController();
