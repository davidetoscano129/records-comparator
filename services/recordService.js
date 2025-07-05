// Simulazione API backend per records generici
const fetchRecordsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Project Alpha",
          author: "John Smith",
          category: "Technology",
          year: 2023,
          rating: 9.5,
          status: "Active",
        },
        {
          id: 2,
          title: "Market Analysis Q4",
          author: "Sarah Johnson",
          category: "Business",
          year: 2023,
          rating: 8.7,
          status: "Completed",
        },
        {
          id: 3,
          title: "Design System Guide",
          author: "Mike Chen",
          category: "Design",
          year: 2023,
          rating: 9.1,
          status: "Active",
        },
        {
          id: 4,
          title: "Customer Research",
          author: "Emma Davis",
          category: "Research",
          year: 2022,
          rating: 8.9,
          status: "Archived",
        },
        {
          id: 5,
          title: "Security Protocol",
          author: "David Wilson",
          category: "Technology",
          year: 2023,
          rating: 9.3,
          status: "Active",
        },
        {
          id: 6,
          title: "Brand Guidelines",
          author: "Lisa Brown",
          category: "Design",
          year: 2022,
          rating: 8.5,
          status: "Completed",
        },
        {
          id: 7,
          title: "Performance Metrics",
          author: "Tom Garcia",
          category: "Analytics",
          year: 2023,
          rating: 9.0,
          status: "Active",
        },
        {
          id: 8,
          title: "User Experience Study",
          author: "Amy Miller",
          category: "Research",
          year: 2023,
          rating: 8.8,
          status: "Completed",
        },
      ]);
    }, 1000);
  });
};

// Funzioni aggiuntive per il servizio
const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("recordsFavorites", JSON.stringify(favorites));
};

const loadFavoritesFromLocalStorage = () => {
  const saved = localStorage.getItem("recordsFavorites");
  return saved ? JSON.parse(saved) : [];
};
