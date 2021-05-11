import React from 'react';
import animation from '../images/animation.svg'
import language from '../data/tech'

function App() {
  return (
    <section className="about-page">
        <div className="section-center about-center">
          <img src={animation} alt='person' className="about-img-svg" />
          <article className="about-text">
            <div className="section-title" style={{textAlign: 'center'}}>
              <h2>About me</h2>
              <div className="underline" style={{marginLeft: '50%', transform: 'translateX(-50%)'}}></div>
            </div>
            <p>I am a young, communicative, ambitious person. In my spare time I love working with code, every day I program and learn new technologies, solutions and intend to tie my future with it. I would like to join interesting project or company.</p>
            <div className="about-stack">
              {language.map(({id, icon, text}) =>{
                return(
                  <span key={id} className='span-01'><span className='icon-lang'>{icon}</span> {text}</span>
                )
              })}
            </div>
          </article>
        </div>
      </section>
  )
}

export default App;