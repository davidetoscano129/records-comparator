// Componente per la comparazione
const ComparisonSection = ({ selectedRecords, onClearComparison }) => {
  if (selectedRecords.length === 0) return null;

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
    <div className="comparison-section">
      <h2 style={{ color: "white", marginBottom: "20px" }}>
        Records Comparison ({selectedRecords.length}/2)
      </h2>

      {selectedRecords.length === 2 && (
        <div className="comparison-grid">
          {selectedRecords.map((record) => (
            <div key={record.id} className="compare-card">
              <h3 style={{ color: "white", marginBottom: "15px" }}>
                {record.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                <strong>Author:</strong> {record.author}
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                <strong>Category:</strong> {record.category}
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                <strong>Year:</strong> {record.year}
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                <strong>Rating:</strong> {record.rating}/10
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
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
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="btn" onClick={onClearComparison}>
          Clear Comparison
        </button>
      </div>
    </div>
  );
};
