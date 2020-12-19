import {
  TOGGLE_MENU_SIDEBAR,
  uiActionTypes,
} from "../actionTypes/uiActionTypes";

export function toggleMenuSidebar(): uiActionTypes {
  return {
    type: TOGGLE_MENU_SIDEBAR,
  };
}
