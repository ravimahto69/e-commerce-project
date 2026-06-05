function CategorySection() {

  const categories = [
    "Electronics",
    "Fashion",
    "Books",
    "Home",
    "Sports",
    "Beauty"
  ];

  return (
    <div style={{ padding: "50px" }}>
      <h2 style={{ textAlign: "center" }}>
        Shop By Category
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "20px",
          marginTop: "30px"
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              padding: "40px",
              background: "#f3f4f6",
              textAlign: "center",
              borderRadius: "10px",
              fontWeight: "bold"
            }}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;