// Componente per singola card record
const RecordCard = ({
  record,
  isFavorite,
  isSelected,
  onToggleFavorite,
  onSelectForComparison,
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#4CAF50";
      case "Completed":
        return "#2196F3";
      case "Archived":
        return "#FF9800";
      default:
        return "#9E9E9E";
    }
  };

  return (
    <div
      className={`record-card ${isSelected ? "selected" : ""} ${
        isFavorite ? "favorite" : ""
      }`}
      onClick={() => onSelectForComparison(record)}
    >
      <h3>{record.title}</h3>
      <p>
        <strong>Author:</strong> {record.author}
      </p>
      <p>
        <strong>Category:</strong> {record.category}
      </p>
      <p>
        <strong>Year:</strong> {record.year}
      </p>
      <p>
        <strong>Rating:</strong> {record.rating}/10
      </p>
      <p>
        <strong>Status:</strong>
        <span
          style={{
            color: getStatusColor(record.status),
            marginLeft: "5px",
          }}
        >
          {record.status}
        </span>
      </p>

      <div className="card-actions">
        <button
          className="btn btn-small btn-favorite"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(record.id);
          }}
        >
          {isFavorite ? "❤️ Remove" : "🤍 Favorite"}
        </button>
        <button
          className="btn btn-small btn-compare"
          onClick={(e) => {
            e.stopPropagation();
            onSelectForComparison(record);
          }}
        >
          {isSelected ? "✓ Selected" : "Compare"}
        </button>
      </div>
    </div>
  );
};
