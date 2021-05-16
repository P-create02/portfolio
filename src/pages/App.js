import React from 'react';
import animation from '../images/animation.svg'
import Technology from '../elements/Technology'
import Main from '../elements/Main'
import { Link } from 'react-router-dom'
import AOS from 'aos'

function App() {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (<>
    <Main />
    <section className="about-page">
        <div className="section-center about-center">
          <img src={animation} alt='person' className="about-img-svg" data-aos="flip-right" data-aos-duration="1500" />
          <article className="about-text" data-aos="flip-left" data-aos-duration="1500">
            <div className="section-title">
              <h2>About me</h2>
              <div className="underline" style={{marginLeft: '50%', transform: 'translateX(-50%)'}}></div>
            </div>
            <div style={{textAlign: 'center'}}>
              <p>I am a young, communicative, ambitious person. In my spare time I love working with code, every day I program and learn new technologies, solutions and intend to  tie my future with it. I would like to join interesting project or company.</p>
              <Link to='/contact' className='btn'>Text Me</Link>
            </div>
          </article>
        </div>
      </section>
      <Technology />
      </>
  )
}

export default App;