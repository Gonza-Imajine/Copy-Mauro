import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducer';

const reducer = persistReducer(
    {
        key: 'imajine-office',
        storage,
        whitelist: ['auth'],
    },
    rootReducer,
);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

    return {
        persistor: persistStore(store),
        store,
    };
};

const { store, persistor } = configStore();

global.store = store;

export { store, persistor };
