/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_HollyWoodMovies = 'LOAD_PRODUCTS';
export const ADD_TO_SAVE = 'ADD_TO_SAVE';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const ADD_TO_LIKE = 'ADD_TO_LIKE';
export const REMOVE_LIKE_ITEM = 'REMOVE_LIKE_ITEM';
export const REMOVE_TO_SAVE = 'REMOVE_TO_SAVE';
export const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE';

export const addSave = product => ({
  // add book
  type: ADD_TO_SAVE,
  payload: product,
});
export const RemoveSave = saveVideos => ({
  // add book
  type: REMOVE_TO_SAVE,
  payload: saveVideos,
});

export const addLike = product => ({
  // add book
  type: ADD_TO_LIKE,
  payload: product,
});
export const RemoveLike = LikeMovies => ({
  // add book
  type: REMOVE_LIKE_ITEM,
  payload: LikeMovies,
});

export const addFavorite = product => ({
  // add book
  type: ADD_TO_FAVORITE,
  payload: product,
});
export const RemoveFavorite = FavoriteMovies => ({
  // add book
  type: REMOVE_TO_FAVORITE,
  payload: FavoriteMovies,
});

export function loadProduct(products) {
  // add book
  return {
    type: LOAD_PRODUCTS,
    products: {
      ...products,
    },
  };
}
export function load_h_Product(HollyWoodMovies) {
  // add book
  return {
    type: LOAD_HollyWoodMovies,
    HollyWoodMovies: {
      ...HollyWoodMovies,
    },
  };
}
