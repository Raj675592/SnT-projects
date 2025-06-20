import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const clubsData = [
  {
    name: "Robotics Club",
    description:
      "Build autonomous robots and explore the fascinating world of robotics and automation.",
    icon: "🤖",
    projectCount: 8,
    id: "robotics",
  },
  {
    name: "Programming Club",
    description:
      "Master programming languages and develop software solutions for real-world problems.",
    icon: "💻",
    projectCount: 12,
    id: "programming",
  },
  {
    name: "BCS Club",
    description:
      "Dive into theoretical computer science, algorithms, and computational complexity.",
    icon: "🧮",
    projectCount: 6,
    id: "bcs",
  },
  {
    name: "Electronics Club",
    description:
      "Design circuits, work with microcontrollers, and create innovative electronic systems.",
    icon: "⚡",
    projectCount: 10,
    id: "electronics",
  },
  {
    name: "Aerospace Club",
    description:
      "Explore aerospace engineering through UAV design and aerodynamics research.",
    icon: "✈️",
    projectCount: 5,
    id: "aero",
  },
  {
    name: "Web Development",
    description:
      "Create modern web applications using cutting-edge frameworks and technologies.",
    icon: "🌐",
    projectCount: 9,
    id: "web",
  },
];

const projectsData = [
  {
    title: "Autonomous Drone Navigation",
    club: "Robotics Club",
    description:
      "Develop an AI-powered drone that can navigate through obstacles using computer vision and machine learning algorithms.",
    duration: "8 weeks",
    difficulty: "advanced",
    tags: ["Python", "OpenCV", "Machine Learning", "ROS"],
    mentor: "Dr. Rajesh Kumar",
  },
  {
    title: "E-commerce Platform",
    club: "Programming Club",
    description:
      "Build a full-stack e-commerce platform with payment integration, user authentication, and inventory management.",
    duration: "10 weeks",
    difficulty: "intermediate",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    mentor: "Prof. Anita Sharma",
  },
  {
    title: "Quantum Computing Simulator",
    club: "BCS Club",
    description:
      "Create a quantum computing simulator to understand quantum algorithms and their applications.",
    duration: "12 weeks",
    difficulty: "advanced",
    tags: ["Python", "Quantum Computing", "Linear Algebra", "Qiskit"],
    mentor: "Dr. Vikram Singh",
  },
  {
    title: "IoT Home Automation",
    club: "Electronics Club",
    description:
      "Design and implement a smart home system using IoT devices and mobile app control.",
    duration: "6 weeks",
    difficulty: "beginner",
    tags: ["Arduino", "IoT", "Mobile App", "Sensors"],
    mentor: "Prof. Priya Gupta",
  },
  {
    title: "Weather Prediction System",
    club: "Aero Club",
    description:
      "Develop a machine learning model to predict weather patterns using atmospheric data.",
    duration: "8 weeks",
    difficulty: "intermediate",
    tags: ["Python", "Machine Learning", "Data Analysis", "Meteorology"],
    mentor: "Dr. Suresh Patel",
  },
  {
    title: "Social Media Analytics",
    club: "Web Development",
    description:
      "Create a web application that analyzes social media trends and user behavior patterns.",
    duration: "9 weeks",
    difficulty: "intermediate",
    tags: ["React", "Python", "Data Visualization", "APIs"],
    mentor: "Prof. Kavya Reddy",
  },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getClubIdByName(name) {
  const club = clubsData.find((c) => c.name === name);
  return club ? club.id : "";
}

const App = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [clubValue, setClubValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true, offset: 100 });
    AOS.refresh();
  }, [filteredProjects]);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line
  }, [searchValue, clubValue, difficultyValue]);

  const applyFilters = () => {
    let filtered = projectsData.filter((project) => {
      let matchesSearch =
        project.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.description.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.club.toLowerCase().includes(searchValue.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase()));
      let matchesClub = !clubValue || getClubIdByName(project.club) === clubValue;
      let matchesDifficulty = !difficultyValue || project.difficulty === difficultyValue;
      return matchesSearch && matchesClub && matchesDifficulty;
    });
    setFilteredProjects(filtered);
  };

  const filterProjectsByClub = (clubName) => {
    setClubValue(getClubIdByName(clubName));
    if (projectsSectionRef.current) {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Modal close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        loginModalOpen &&
        event.target.classList &&
        event.target.classList.contains("modal")
      ) {
        setLoginModalOpen(false);
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [loginModalOpen]);

  // Prevent form submission (demo only)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginModalOpen(false);
    alert("Login functionality is not implemented in this demo.");
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav className="container">
          <a href="#" className="logo">
            SnT Summer Projects
          </a>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#clubs">Clubs</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <a
              href="#"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                setLoginModalOpen(true);
              }}
            >
              Login
            </a>
            <a href="#" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <h1>Summer Projects @ IIT Kanpur</h1>
            <p className="hero-subtitle">Explore, Learn, Contribute</p>
            <p className="hero-description">
              Discover exciting summer projects from all Science and Technology Council clubs. Join innovative projects, learn cutting-edge technologies, and contribute to meaningful research.
            </p>
            <div className="hero-buttons">
              <a href="#clubs" className="btn btn-primary">
                Explore Projects
              </a>
              <a href="#" className="btn btn-outline">
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="container">
          <div className="search-container" data-aos="fade-up">
            <div className="search-box">
              <input
                type="text"
                className="search-input"
                placeholder="Search projects by keywords, tech stack, or club..."
                id="searchInput"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <select
              className="filter-dropdown"
              id="clubFilter"
              value={clubValue}
              onChange={(e) => setClubValue(e.target.value)}
            >
              <option value="">All Clubs</option>
              {clubsData.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              ))}
            </select>
            <select
              className="filter-dropdown"
              id="difficultyFilter"
              value={difficultyValue}
              onChange={(e) => setDifficultyValue(e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid" data-aos="fade-up">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Active Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12</span>
              <span className="stat-label">SnT Clubs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">200+</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">Expert Mentors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="clubs-section" id="clubs">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Our Clubs
          </h2>
          <div className="clubs-grid" id="clubsGrid">
            {clubsData.map((club, idx) => (
              <div
                className="club-card"
                key={club.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() => filterProjectsByClub(club.name)}
                style={{ cursor: "pointer" }}
              >
                <div className="club-icon">{club.icon}</div>
                <h3 className="club-name">{club.name}</h3>
                <p className="club-description">{club.description}</p>
                <span className="project-count">{club.projectCount} Projects</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-section" id="projects" ref={projectsSectionRef}>
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">
            Featured Projects
          </h2>
          <div className="projects-grid" id="projectsGrid">
            {filteredProjects.length === 0 && (
              <div style={{ color: "#fff", textAlign: "center", gridColumn: "1/-1" }}>
                No projects found.
              </div>
            )}
            {filteredProjects.map((project, idx) => {
              let difficultyClass = "";
              if (project.difficulty === "beginner") difficultyClass = "difficulty-beginner";
              else if (project.difficulty === "intermediate") difficultyClass = "difficulty-intermediate";
              else if (project.difficulty === "advanced") difficultyClass = "difficulty-advanced";
              return (
                <div
                  className="project-card"
                  key={project.title + idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="project-header">
                    <div>
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-club">{project.club}</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="project-duration">{project.duration}</span>
                    <span className={`project-difficulty ${difficultyClass}`}>
                      {capitalize(project.difficulty)}
                    </span>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ color: "#666", fontSize: "0.95rem" }}>
                    Mentor: <b>{project.mentor}</b>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About SnT Council</h3>
              <p>
                The Science and Technology Council at IIT Kanpur promotes technical excellence through various clubs and innovative projects.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#">Home</a>
              <a href="#">Clubs</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>IIT Kanpur, Kalyanpur</p>
              <p>Kanpur, UP 208016</p>
              <p>snt@iitk.ac.in</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 Science and Technology Council, IIT Kanpur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {loginModalOpen && (
        <div id="loginModal" className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <span className="close" onClick={() => setLoginModalOpen(false)}>
              &times;
            </span>
            <h2>Login to SnT Portal</h2>
            <form id="loginForm" onSubmit={handleLoginSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  placeholder="your.email@iitk.ac.in"
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="password"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                  placeholder="Enter your password"
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="role"
                  style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}
                >
                  Role:
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #e0e0e0",
                    borderRadius: "10px",
                    outline: "none",
                  }}
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginBottom: "1rem" }}
              >
                Login
              </button>
              <p style={{ textAlign: "center", color: "#666" }}>
                Don't have an account?{" "}
                <a href="#" style={{ color: "#667eea", textDecoration: "none" }}>
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default App; 