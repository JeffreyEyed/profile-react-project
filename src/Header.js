import image from './Profile1.png'
import link from './linkedin-logo.png'
import email from './email-envelope.png'

function Header() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="header-head-shot" alt="head shot" />
          <div className='background-box'>
          <section className='header-text'>
            <h1>Jeffrey Muresan</h1>
            <h2>Software Engineer</h2>
            <h3>jeffreymuresan.website</h3>
        </section>
        <section className='header-buttons'>
            <button className='email'><img src={email} className='envelope' alt="" />Email</button>
            <button className='linkedin'><img src={link} className='linkedin-logo' alt="linkedin logo" />LinkedIn</button>
        </section>
          </div>
        </header>
      </div>
    );
  }

  export default Header 