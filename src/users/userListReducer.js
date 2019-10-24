import { visibilityFilters } from './userListConstants';
import { Users } from '../data/users'
export const users = (state = [...Users], action) => {
    const newAction = {...action};
    delete newAction['type']
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    ...newAction,
                    completed: false,
                }
            ];

        default:
            return state;
    }
};

export const visibilityFilter = (
    state = visibilityFilters.SHOW_ALL,
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};
