let nextTodoId = 4;
export const addUser = userDetail => ({
    type: 'ADD_USER',
    id: nextTodoId++,
    ...userDetail
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL'
};
