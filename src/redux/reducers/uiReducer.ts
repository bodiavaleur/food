import {
  TOGGLE_MENU_SIDEBAR,
  uiActionTypes,
} from "../actionTypes/uiActionTypes";

const initialState = {
  showMenuSidebar: false,
};

export const uiReducer = (state = initialState, action: uiActionTypes) => {
  switch (action.type) {
    case TOGGLE_MENU_SIDEBAR:
      return { ...state, showMenuSidebar: !state.showMenuSidebar };

    default:
      return state;
  }
};
