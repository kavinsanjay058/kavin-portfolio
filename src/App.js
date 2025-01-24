import React, { useState } from "react";

const App = () => {
  // State to manage the current section
  const [activeSection, setActiveSection] = useState("objective");

  // Data for each section
  const sections = {
    objective: (
      <div>
        <h2>Objective</h2>
        <p>
          Aspiring Cloud Computing expert with a PhD and 3 years of experience
          at Amazon. Passionate about leveraging cloud technology to solve
          business challenges.
        </p>
      </div>
    ),
    education: (
      <div>
        <h2>Education</h2>
        <p>Degree: B.Tech in Artificial Intelligence & Data Science</p>
        <p>Institution: Sri Eshwar College of Engineering</p>
        <p>Graduation Year: 2027</p>
      </div>
    ),
    experience: (
      <div>
        <h2>Experience</h2>
        <p>Job Title: Cloud Computing</p>
        <p>Company: Amazon</p>
        <p>Experience: 3 years</p>
        <p>Achievement: PhD in Cloud Computing</p>
      </div>
    ),
    skills: (
      <div>
        <h2>Skills</h2>
        <p>Technical Skills: Python, SQL, Excel</p>
        <p>Soft Skills: Communication, Leadership</p>
      </div>
    ),
    certifications: (
      <div>
        <h2>Certifications</h2>
        <p>Certification: NPTEL</p>
        <p>Date: 12.12.2024</p>
      </div>
    ),
    extracurricular: (
      <div>
        <h2>Extracurricular Activities</h2>
        <p>Activity: National Bike Racer</p>
      </div>
    ),
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Navigation */}
      <nav style={{ background: "#333", padding: "10px", marginBottom: "20px" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "15px",
            padding: 0,
            margin: 0,
          }}
        >
          {Object.keys(sections).map((key) => (
            <li key={key} style={{ display: "inline" }}>
              <button
                style={{
                  background: activeSection === key ? "#555" : "transparent",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                }}
                onClick={() => setActiveSection(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Section Content */}
      <div style={{ padding: "20px", border: "1px solid #ddd" }}>
        {sections[activeSection]}
      </div>

      {/* Footer */}
      <footer style={{ marginTop: "20px", textAlign: "center" }}>
        <p>Contact: 9942950320 | kavinsanjay873@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/kavin-sanjay-596371293/" target="_blank" rel="noreferrer">
            KavinSanjay
          </a>
        </p>
        <p>
          Portfolio:{" "}
          <a href="#" target="_blank" rel="noreferrer">
            Portfolio Link
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;