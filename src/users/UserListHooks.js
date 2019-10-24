import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {  addUser } from './userListConstants';
import {
    getVisibleTodos
} from './userListSelectors';


export const useUser = () => {
    const dispatch = useDispatch();
    const addUserItem = useCallback(
        user => {
            dispatch(addUser(user));
        },
        [dispatch]
    );

    return {
        addUser: addUserItem
    };
};

export const useUsers = () => {
    const users = useSelector(getVisibleTodos, shallowEqual);
    return {
        users
    };
};
