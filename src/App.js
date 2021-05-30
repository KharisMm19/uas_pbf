import logo from './logo1.png';
import pl from './pricelist.jpg';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="logo" />
        <nav>
          <ul className="navlink">

            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
            <li><button className="button">Gallery</button></li>
          </ul>
        </nav>
      </header>

      <div className="content1">
        <div className="intro">
          <h1>Avidity Wedding Organizier</h1>
          <br />
          <p>Wedding Organizer adalah suatu jasa yang memberikan pelayanan khusus secara pribadi yang bertujuan untuk membantu calon pengantin dan keluarga calon pengantin dari mulai perencanaan (planning) sampai tahap pelaksanaan.</p>
          <br />
          <div className="buttonIn">
            <li><button className="button">Gallery</button></li>
            <li><button className="button2">Learn More</button></li>
          </div>
        </div>
        <div className="c1">
          <img src={img1} />
        </div>
      </div>

      <div className="about">
        <h1>Introduce Avidity Wedding Organizier</h1>
        <br />
        <p>Wedding Organizer memberikan informasi mengenai berbagai macam hal<br /> yang berhubungan dengan acara pernikahan <br />
        dan membantu merumuskan segala hal yang dibutuhkan pada saat pernikahan.</p>
        <div className="c3">
          <img src={img4} />
        </div>
      </div>
      

      <div className="gallery">
        <h1>Gallery</h1>
        <p>The Momments</p>
        <div className="c2">
          <li><img src={img2} /></li>
          <li><img src={img3} /></li>
        </div><br />
        <button className="button2">Learn More</button>
      </div>

      <div className="contact">
        <div className="contactIn">
          <h1>Contact Form</h1><br/>
          <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
        </div>
        <div className="form">
          <form>
            <label>
              Name:
              <input type="text" name="name" className="input" />
            </label>
            <label>
              Email:
              <input type="email" name="email" className="input" />
            </label>
            <label>
              Address:
              <textArea className="textarea" />
            </label>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
