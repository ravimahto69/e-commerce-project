function FeatureSection() {
  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "60px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Why Choose Us?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3> Fast Delivery</h3>
          <p>Quick and reliable shipping.</p>
        </div>

        <div>
          <h3> Secure Payments</h3>
          <p>100% protected transactions.</p>
        </div>

        <div>
          <h3> Quality Products</h3>
          <p>Trusted by thousands of customers.</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;