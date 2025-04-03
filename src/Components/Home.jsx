import '../styles/Home.css'; // Import the CSS file (relative path from Home.jsx)
import HanyImage from '../images/Hany.png'; // Correct path to Hany.png
function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h1>Welcome to Our Website</h1>
        <h3>Your Journey to Innovation Begins Here</h3>
        <p>
          We craft beautiful and functional experiences that empower businesses
          and individuals to thrive in the digital age. Join us in shaping the
          future.
        </p>
      </div>
      <div className="home-image"> {/* Corrected class name */}
        <img src={HanyImage} alt="Hany Magdy" /> {/* Corrected alt text */}
      </div>
    </section>
  );
}

export default Home;