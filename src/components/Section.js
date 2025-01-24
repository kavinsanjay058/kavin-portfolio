import React from "react";

const Section = ({ title, children }) => (
  <section style={{ margin: "2rem auto", maxWidth: "800px", padding: "1rem", background: "#f9f9f9", borderRadius: "8px" }}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;