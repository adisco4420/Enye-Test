// @flow

// #2: You don't need to create this const variable, you can pass the string directly.
// I like to use this const variable to prevent typos, maybe another dev will try to dispatch `LIST_REFRESHED` instead of `LIST/REFRESHED`
export const ActionTypes = {
  REFRESH_LIST: "LIST/REFRESHED"
};

export const ActionCreators = {
  // #3: Make sure the REFRESH_LIST action will send an Array of Todo in the payload
  updateList: (items) => {
    return {
      type: ActionTypes.REFRESH_LIST,
      payload: items
    }
  }
};
