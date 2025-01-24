import React from "react";

const Header = () => (
  <header style={{ background: "#333", color: "#fff", padding: "1rem" }}>
    <h1>Dhanushbalan's Codefolio</h1>
    <nav>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><a href="#objective" style={{ color: "#fff" }}>Objective</a></li>
        <li><a href="#education" style={{ color: "#fff" }}>Education</a></li>
        <li><a href="#experience" style={{ color: "#fff" }}>Experience</a></li>
        <li><a href="#skills" style={{ color: "#fff" }}>Skills</a></li>
        <li><a href="#certifications" style={{ color: "#fff" }}>Certifications</a></li>
        <li><a href="#extracurricular" style={{ color: "#fff" }}>Extracurricular</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;