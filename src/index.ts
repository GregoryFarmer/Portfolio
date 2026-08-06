import { dataStore, dataStoreService } from '#utils/database.js';
import {config} from 'dotenv';
config();

declare global {
    var datastoreService: dataStoreService;
    var datastore: dataStore;
}

const datastoreService = global.datastoreService = new dataStoreService(process.env.mongo ? process.env.mongo : ``, `portfolio`);
await datastoreService.connect();
const datastore = global.datastore = datastoreService.getDataStore(`main`);
