import { createSelector } from 'reselect';

export const getVisibilityFilter = state => state && state.visibilityFilter;

export const getAllUsers = (state) => {
    return state.users
};


export const getVisibleTodos = createSelector(
    getVisibilityFilter,
    getAllUsers,
    (filter, all) => {
       return all;
    }
);
