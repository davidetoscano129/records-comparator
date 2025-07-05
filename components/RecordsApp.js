// Componente principale dell'applicazione
const RecordsApp = () => {
  const { useState, useEffect, useReducer, useMemo, useCallback, useRef } =
    React;

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [favorites, dispatchFavorites] = useReducer(favoritesReducer, []);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const searchInputRef = useRef(null);

  // useEffect per caricare i dati
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchRecordsData();
        setRecords(data);
        // Carica favoriti dal localStorage
        dispatchFavorites({ type: "LOAD_FAVORITES" });
      } catch (error) {
        console.error("Error loading records data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // useMemo per filtrare i records
  const filteredRecords = useMemo(() => {
    return filterRecords(
      records,
      searchTerm,
      selectedCategory,
      favorites,
      showFavoritesOnly
    );
  }, [records, searchTerm, selectedCategory, favorites, showFavoritesOnly]);

  // useMemo per le categorie uniche
  const uniqueCategories = useMemo(() => {
    return getUniqueCategories(records);
  }, [records]);

  // useMemo per statistiche
  const stats = useMemo(() => {
    return calculateStats(records, favorites);
  }, [records, favorites]);

  // useCallback per gestire i favoriti
  const handleToggleFavorite = useCallback(
    (recordId) => {
      if (favorites.includes(recordId)) {
        dispatchFavorites({ type: "REMOVE_FAVORITE", payload: recordId });
      } else {
        dispatchFavorites({ type: "ADD_FAVORITE", payload: recordId });
      }
    },
    [favorites]
  );

  // useCallback per gestire la selezione per comparazione
  const handleSelectForComparison = useCallback((record) => {
    setSelectedRecords((prev) => {
      if (prev.find((r) => r.id === record.id)) {
        return prev.filter((r) => r.id !== record.id);
      } else if (prev.length < 2) {
        return [...prev, record];
      } else {
        return [prev[1], record];
      }
    });
  }, []);

  // useCallback per clear comparison
  const handleClearComparison = useCallback(() => {
    setSelectedRecords([]);
  }, []);

  // useCallback per focus search
  const focusSearch = useCallback(() => {
    searchInputRef.current?.focus();
  }, []);

  if (loading) {
    return <div className="loading">Loading records library...</div>;
  }

  return (
    <div className="app-container">
      <h1>📋 Records Management App</h1>

      <div className="controls">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search records or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="btn"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          className={`btn ${showFavoritesOnly ? "active" : ""}`}
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
        >
          {showFavoritesOnly ? "Show All" : "Favorites Only"}
        </button>

        <button className="btn" onClick={focusSearch}>
          🔍 Focus Search
        </button>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">{stats.total}</div>
          <div>Total Records</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.favorites}</div>
          <div>Favorites</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{stats.avgRating}</div>
          <div>Avg Rating</div>
        </div>
      </div>

      <div className="records-grid">
        {filteredRecords.map((record) => (
          <RecordCard
            key={record.id}
            record={record}
            isFavorite={favorites.includes(record.id)}
            isSelected={selectedRecords.some((r) => r.id === record.id)}
            onToggleFavorite={handleToggleFavorite}
            onSelectForComparison={handleSelectForComparison}
          />
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="loading">No records found matching your criteria.</div>
      )}

      <ComparisonSection
        selectedRecords={selectedRecords}
        onClearComparison={handleClearComparison}
      />
    </div>
  );
};
