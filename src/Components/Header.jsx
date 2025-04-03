
import '../styles/header.css'; // Adjust the path to point to the styles folder



const Header = ()=>{

    return(
        <header className="header">
        <div className="logo-container">
         
          <h1>Hany Magdy</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="#skills-section">Skills</a>
          <a href="#my-projects">Projects</a>
          <a href="#About-Me">About Me</a>
          <a href="#Contact-Me">Contacts</a>
        </nav>
      </header>

    );
}

export default Header;
