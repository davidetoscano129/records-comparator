// Reducer per gestire lo stato dei favoriti
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const newStateAdd = [...state, action.payload];
      saveFavoritesToLocalStorage(newStateAdd);
      return newStateAdd;
    case "REMOVE_FAVORITE":
      const newStateRemove = state.filter((id) => id !== action.payload);
      saveFavoritesToLocalStorage(newStateRemove);
      return newStateRemove;
    case "CLEAR_FAVORITES":
      saveFavoritesToLocalStorage([]);
      return [];
    case "LOAD_FAVORITES":
      return loadFavoritesFromLocalStorage();
    default:
      return state;
  }
};
