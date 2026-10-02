import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import posts from "./data/posts";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "JavaScript", "React", "Web Development"];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">BCA Student • Aspiring Web Developer</p>
            <h1>Hi, I'm <span>Ruchi</span>.</h1>
            <p className="hero-text">
              I am learning modern web development with HTML, CSS, JavaScript,
              React, Node.js and Express.js.
            </p>
            <div className="hero-actions">
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="outline">Contact Me</Button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>About Me</h2>
          </div>
          <div className="about-grid">
            <article className="info-card">
              <h3>Who I Am</h3>
              <p>
                I am a BCA student interested in web development and
                JavaScript. I enjoy building simple, responsive and useful
                websites while improving my coding skills.
              </p>
            </article>
            <article className="info-card">
              <h3>Skills</h3>
              <div className="skill-list">
                {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"].map(
                  (skill) => <span key={skill}>{skill}</span>
                )}
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="section alt">
          <div className="section-heading">
            <p className="eyebrow">Education</p>
            <h2>My Education</h2>
          </div>
          <article className="timeline-card">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>Currently pursuing BCA</p>
            <p className="muted">
              Coursework includes programming, software engineering, databases,
              web development and computer fundamentals.
            </p>
          </article>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>My Projects</h2>
          </div>
          <div className="project-grid">
            <Card
              title="Handmade Store"
              text="A responsive e-commerce style website for handmade keyrings and flower products."
              tag="HTML • CSS • JavaScript"
            />
            <Card
              title="React Blog UI"
              text="A React interface that displays blog posts from a JavaScript data file with search and filters."
              tag="React • Props • State"
            />
            <Card
              title="Portfolio Website"
              text="A responsive personal portfolio containing About, Education, Projects and Contact sections."
              tag="React • CSS Grid • Flexbox"
            />
          </div>
        </section>

        <section id="blog" className="section alt">
          <div className="section-heading">
            <p className="eyebrow">Mini Project</p>
            <h2>React Blog UI</h2>
            <p>Search and filter posts from a local JSON-style data file.</p>
          </div>

          <div className="blog-controls">
            <input
              type="search"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search blog posts"
            />
            <div className="filter-row">
              {categories.map((item) => (
                <button
                  className={category === item ? "filter active" : "filter"}
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  text={post.excerpt}
                  tag={post.category}
                />
              ))
            ) : (
              <p className="empty">No posts found.</p>
            )}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Get In Touch</h2>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
