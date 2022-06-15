import * as actions from "./actions";
import { BUG_ADDED } from "./ActionTypes";
import * as stores from "./store"


const unsubscribe = stores.storeA.subscribe(()=>{
    console.log("Store changed!", stores.storeA.getState())
});

stores.storeA.dispatch(actions.bugAdded(BUG_ADDED));
stores.storeA.dispatch(actions.bugAdded(BUG_ADDED));
stores.storeA.dispatch(actions.bugAdded(BUG_ADDED));
stores.storeA.dispatch(actions.bugAdded(BUG_ADDED));

console.log(stores.storeA.getState());



