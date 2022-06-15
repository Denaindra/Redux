import {createStore} from 'redux';
import * as te from './reducer';

export const storeA = createStore(te.default);
export const storeB = createStore(te.default);
export const storeC = createStore(te.default);
export const storeD = createStore(te.default);
