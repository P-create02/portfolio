import React from 'react';
import socialLinks from "../data/social_links"

function Footer(){
  return (
    <footer className="footer">
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link" target='_blank' rel="noreferrer">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright  &copy;  {new Date().getFullYear()}
        </h4>
    </footer>
  )
}

export default Footer;