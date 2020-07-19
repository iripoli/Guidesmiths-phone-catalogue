import {
  SET_SORT_AZ,
  SET_SORT_ZA,
  SET_SORT_19,
  SET_SORT_91,
} from "../actions.types";

export const setSortCatalogueToAZ = () => ({
  type: SET_SORT_AZ,
});

export const setSortCatalogueToZA = () => ({
  type: SET_SORT_ZA,
});
export const setSortCatalogueTo19 = () => ({
  type: SET_SORT_19,
});
export const setSortCatalogueTo91 = () => ({
  type: SET_SORT_91,
});
