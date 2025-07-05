// Funzioni di utilità per l'app
const filterRecords = (
  records,
  searchTerm,
  selectedCategory,
  favorites,
  showFavoritesOnly
) => {
  let filtered = records;

  if (showFavoritesOnly) {
    filtered = filtered.filter((record) => favorites.includes(record.id));
  }

  if (searchTerm) {
    filtered = filtered.filter(
      (record) =>
        record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (selectedCategory !== "All") {
    filtered = filtered.filter(
      (record) => record.category === selectedCategory
    );
  }

  return filtered;
};

const getUniqueCategories = (records) => {
  return ["All", ...new Set(records.map((record) => record.category))];
};

const calculateStats = (records, favorites) => {
  return {
    total: records.length,
    favorites: favorites.length,
    avgRating:
      records.length > 0
        ? (
            records.reduce((sum, record) => sum + record.rating, 0) /
            records.length
          ).toFixed(1)
        : 0,
  };
};
