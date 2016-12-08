import {createStore, compose, Reducer, combineReducers, applyMiddleware, Middleware, Store} from 'redux';
import thunk from 'redux-thunk';
import {Action} from "./shared/types/redux";

function configureStore () : Store<Object> {
    const middlewares : Middleware[] = [
        thunk
    ];

    const reducer : Reducer<Object> = combineReducers({
        data: (state : Object = {}, action : Action) => state
    });

    return createStore(
        reducer,
        compose(
            applyMiddleware(...middlewares),
            ('development' === process.env.NODE_ENV && window.devToolsExtension) ? window.devToolsExtension() : (arg => arg)
        )
    );
}

export default configureStore;