// 


import "./App.css";
import image1 from "./assets/image1.jpg";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            PORTFOLIO
          </a>

          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="py-5" style={{ backgroundColor: "#f4ffff" }}>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img
                src={image1}
                alt="My Photo"
                className="img-fluid rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-8">
              <h1 className="fw-bold">Here I'm</h1>
              <h1 className="fw-bold">ANJANA HARI</h1>

              <p className="lead mt-3">
                I am a BTech Computer Science student | Aspiring Full Stack Developer
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Me</h2>
           <p className="mt-3 text-center">
            I am a BTech Computer Science student at RIT Kottayam passionate about web development,
            problem solving <br />and currently learning full stack development.
          </p>
          {/* <ul className="">
            <li>. BTech Computer Science student at RIT Kottayam</li>
            <li>. Interested in web development and problem solving</li>
            <li>. Currently learning React,Node,js and databases</li>
          </ul> */}
        </div>
       </section>
      {/* SKILLS SECTION */}
<section id="skills" className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Skills</h2>

    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <h4 className="card-title fw-bold">PROGRAMMING LANGUAGES-C,JAVA</h4>
          </div>
        </div>
      </div>
       {/* Skill 1 */}
        <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">HTML</h5>
            {/* <p className="card-text">
              Creating structured and semantic web pages.
            </p> */}
          </div>
        </div>
      </div>

      {/* Skill 2 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">CSS & Bootstrap</h5>
            {/* <p className="card-text">
              Styling responsive layouts using modern CSS and Bootstrap.
            </p> */}
          </div>
        </div>
      </div>

      {/* Skill 3 */}
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">React JS</h5>
            {/* <p className="card-text">
              Building component-based user interfaces with React.
            </p> */}
          </div>
        </div>
      </div> 
      {/* skill 4 */}
      <div className="col-md-5 mb-5">
        <div className="card shadow h-100">
          <div className="card-body text-center">
            <h6 className="card-title fw-bold">Database-MYSQL</h6>
          </div>
        </div>
      </div>
    </div>

  </div>   
</section>
<section id="projects" className="bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row">
              <div className="col-md mb-4">
                <div className="card shadow h-100">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Ticket booking website</h5>
                    <p className="card-text">
                      DBMS project-Railway management system
                    </p>
                  </div>
                </div>
              </div>
                <div className="col-md-4 mb-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <h5 className="card-title fw-bold">Event registration Website</h5>
            <p className="card-text">
              A college event registration page is built using HTML to showcase my skills and projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CONTACT SECTION */}
{/* <section id="contact" className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Contact Me</h2>

    <div className="row justify-content-center">
      <div className="col-md-6">

        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>

      </div>
    </div>
  </div>
</section> */}

 <div className="container my-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <p>
            <strong>Phone:</strong> <a href="tel:7902659660">7902659660</a>
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:anjanahari256@gmail.com">anjanahari256@gmail.com</a>
          </p>
          <p><strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/anjana-hari-b582002b4/">linkedin.com/in/anjana-hari-b582002b4</a>
          </p>
          <p><strong>GitHub:</strong>
          <a href="https://github.com/ANJANA-HARI-256">github.com/in/ANJANA-HARI-256</a></p>
        </div>
      </div>
    </div>
   
</>
  );

    }

export default App;
