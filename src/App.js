
import './App.css';

function App() {
  return (
    <div>
      <header id="home">
        <nav className="headernav">
          <div className="logo">Zoltan Mucha</div>
          <ul className="navlinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#xp">Experience</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="tagline">
          <h1>Portfolio site</h1>
          <a href="#Curriculum Vitae" className="btn btnfull">Curriculum Vitae</a>
          <a href="#contact" className="btn">Contact</a>
        </div>
      </header>

      <section className="experience" id="xp">
        <h2>Experience</h2>
        <div className="container">
          <div>
            <img src="./html logo.png" alt="html logo" />
            <h3>HTML5</h3>
            <p>Semantic markup, creation of professional websites, accessibility,
              SEO friendly structure.</p>
          </div>
          <div>
            <img src="./css logo.png" alt="css logo" />
            <h3>CSS</h3>
            <p>Professional display, modern, responsive style, maintainable
              architecture, Flexbox, Grid.</p>
          </div>
          <div>
            <img src="./js logo.png" alt="javascript logo" />
            <h3>JavaScript</h3>
            <p>Modern 2024 JavaScript, clean code.</p>
          </div>
          <div>
            <img src="./python logo.png" alt="python logo" />
            <h3>Python</h3>
            <p>Modern Python, clean code.</p>
          </div>
        </div>
      </section>

      <section className="projects" id="portfolio">
        <h2>Projects</h2>
        <div className="projectlist">
          <div class="projectcontainer">
            <h3>Project 1</h3>
            <a href="#project1"><img src="./project.jpg" alt="project 1" class="project__img" /></a>

          </div>
          <div class="projectcontainer">
            <h3>Project 2</h3>
            <a href="#project2"><img src="./project.jpg" alt="project 2" class="project__img" /></a>
          </div>
          <div class="projectcontainer">
            <h3>Project 3</h3>
            <a href="#project3"><img src="./project.jpg" alt="project 3" class="project__img" /></a>
          </div>
          <div class="projectcontainer">
            <h3>Project 4</h3>
            <a href="#project4"><img src="./project.jpg" alt="project 4" class="project__img" /></a>
          </div>
          <div class="projectcontainer">
            <h3>Project 5</h3>
            <a href="#project5"><img src="./project.jpg" alt="project 5" class="project__img" /></a>
          </div>
          <div class="projectcontainer">
            <h3>Project 6</h3>
            <a href="#project6"><img src="./project.jpg" alt="project 6" class="project__img" /></a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <form action="https://formspree.io/f/mnqeqlla" method="post">
          <input type="text" className="form__input" name="name" placeholder="Name" />
          <input type="email" className="form__input" name="email" placeholder="E-mail" />
          <textarea className="form__input" name="message" placeholder="message"></textarea>
          <button type="submit" className="btn form__submit">Send</button>
        </form>
      </section>

      <footer>
        <ul className="footerlinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#xp">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p>Copyright &copy; 2024 ZoltanM</p>
      </footer>
    </div>
  );
}

export default App;
