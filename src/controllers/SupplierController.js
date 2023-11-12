const { Supplier } = require('../models');
const { Op } = require('sequelize');

const addSupplier = async (req, res, next) => {
    try {
        const { company_name, address, email, zip_code } = req.body;

        await Supplier.create({ company_name, address, email, zip_code });

        res
            .status(200)
            .json({ status: true, message: 'Supplier Created Successfully' });
    } catch (error) {
        console.log(error.name);
        next(error);
    }
}

const getAllSupplier = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const company_nameFilter = req.query.q || '';

        const offset = (page - 1) * limit;

        const { count, rows: suppliers } = await Supplier.findAndCountAll({
            where: {
                company_name: {
                    [Op.iLike]: `%${company_nameFilter}%`,
                },
            },
            offset,
            limit,
        });

        const totalPages = Math.ceil(count / limit);

        const nextPage = page < totalPages ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;

        const paginationInfo = {
            totalItems: count,
            totalPages,
            currentPage: page,
            nextPage,
            prevPage,
            items: suppliers,
        };

        return res.status(200).json(paginationInfo);
    } catch (err) {
        next(err);
    }
}

const getSupplierbyId = async (req, res, next) => {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if (!supplier) {
            return res.status(404).json({ status: false, message: 'Supplier Not Found' });
        }

        return res.status(200).json({ data: supplier });
    } catch (err) {
        next(err);
    }
}

const updateSupplier = async (req, res, next) => {
    try {
        const { company_name, address, email, zip_code } = req.body;
        const { id } = req.params;

        const supplier = await Supplier.findOne({
            where: {
                id,
            },
        });

        if (!supplier) {
            return res.status(404).json({ status: false, message: 'Supplier Not Found' });
        }

        await supplier.update({
            company_name: company_name || supplier.company_name,
            address: address || supplier.address,
            email: email || supplier.email,
            zip_code: zip_code || supplier.zip_code
        }, { returning: true });

        res.status(200).json({ message: 'Supplier Updated Successfully', data: supplier });
    } catch (error) {
        next(error);
    }
}

const deleteSupplier = async (req, res, next) => {
    try {
        const { id } = req.params;

        const supplier = await Supplier.findOne({
            where: {
                id,
            },
        });

        if (!supplier) {
            return res.status(404).json({ status: false, message: 'Supplier Not Found' });
        }

        await supplier.destroy();

        res.status(200).json({ message: 'Supplier Deleted Successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addSupplier,
    getAllSupplier,
    getSupplierbyId,
    updateSupplier,
    deleteSupplier
};