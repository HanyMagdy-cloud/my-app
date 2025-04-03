import "../styles/skills.css"; // Import the CSS file (relative path from Home.jsx)
import skills from "../images/skills.jpg";

const Skills = () => {
  return (
    <section id="skills-section">
      <img src={skills} alt="skills" className="skills-image" />
      <h2>My Skills</h2>
      <div className="card-container">
        <article className="card">
          <h3>1. Proficiency in C#</h3>
          <p>
            C# is the primary programming language used in .NET development. A
            strong understanding of its syntax, features, and object-oriented
            programming principles is crucial for building robust applications.
          </p>
        </article>

        <article className="card">
          <h3>2. Familiarity with ASP.NET</h3>
          <p>
            ASP.NET is a framework for building web applications. Knowledge of
            ASP.NET MVC or ASP.NET Core is essential for developing dynamic,
            scalable web applications and APIs, along with an understanding of
            routing, controllers, and views.
          </p>
        </article>

        <article className="card">
          <h3>3. Database Management Skills</h3>
          <p>
            Proficiency in working with databases, particularly SQL Server, is
            important for .NET developers. This includes writing efficient
            queries, understanding data modeling, and using Entity Framework for
            data access and manipulation.
          </p>
        </article>

        <article className="card">
          <h3>4. Understanding of Cloud Services</h3>
          <p>
            Familiarity with cloud platforms like Azure is essential for modern
            .NET development. Knowledge of deploying applications, managing
            resources, and using cloud services enhances a developers
            capabilities in building scalable applications.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
