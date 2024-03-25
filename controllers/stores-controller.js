const logger = require('../logging');
// const { Stores } = require('../models');
const { commonUtil } = require('../utils');
const StoresRepository = require('../repository/stores-repository');

const storesRepository = new StoresRepository();
exports.getAllStores = async (req, res) => {
  try {
    const storesList = await storesRepository.getAllStores();
    commonUtil.updateSuccessObject(res, storesList);
  } catch (error) {
    console.error(error);
    const response = commonUtil.updateErrorObject(res, error);
    res.status(response.statusCode).json(response);
  }
};

// Controller method to get a store by ID
exports.getStoreById = async (req, res) => {
  const id = req.params.id;
  logger.info(`Fetching details of Store ${id}`);
  try {
    const store = await storesRepository.getStoreByStoreId(id);
    let address = await store.getCustomerAddress();
    store.setDataValue('customerAddress', address);
    if (store) {
      commonUtil.updateSuccessObject(res, store);
    } else {
      res.status(404).json({ error: 'store not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller method to create a new store
// exports.createStore = async (req, res) => {
//   const { task, createdDate, percentCompleted, isCompleted } = req.body;
//   try {
//     const newstore = await stores.create({
//       task,
//       createdDate,
//       percentCompleted,
//       isCompleted,
//     });
//     res.status(201).json(newstore);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Controller method to update a store by ID
// exports.updateStore = async (req, res) => {
//   const id = req.params.id;
//   const { task, createdDate, percentCompleted, isCompleted } = req.body;
//   try {
//     const store = await stores.findByPk(id);
//     if (store) {
//       store.task = task;
//       store.createdDate = createdDate;
//       store.percentCompleted = percentCompleted;
//       store.isCompleted = isCompleted;
//       await store.save();
//       res.json(store);
//     } else {
//       res.status(404).json({ error: 'store not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
// // Controller method to delete a store by ID
// exports.deleteStore = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const store = await stores.findByPk(id);
//     if (store) {
//       await store.destroy();
//       res.json(store);
//     } else {
//       res.status(404).json({ error: 'store not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
