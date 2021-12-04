// action type
export const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (payload) => {
  console.log('aaaa', payload);
  return {
    type: ADD_CATEGORY,
    payload,
  };
};
