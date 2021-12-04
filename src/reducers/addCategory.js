import { ADD_CATEGORY } from '../action/action';

const incitialState = {
  foodArr: [],
  moviesArr: [],
  bikeArr: [],
};

export const reducer = (state = incitialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      let catObj = action.payload;
      if (catObj.category == 'Food') {
        return {
          ...state,
          foodArr: [...state.foodArr, catObj.inputValue],
        };
      } else if (catObj.category == 'Movies') {
        return {
          ...state,
          moviesArr: [...state.moviesArr, catObj.inputValue],
        };
      } else if (catObj.category == 'Bikes') {
        return {
          ...state,
          bikeArr: [...state.bikeArr, catObj.inputValue],
        };
      }

    default:
      return state;
  }
};
