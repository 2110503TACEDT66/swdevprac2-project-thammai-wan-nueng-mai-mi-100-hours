
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import coWorkSlice from './features/coworkSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  coWork: coWorkSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
