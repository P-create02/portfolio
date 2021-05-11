import React from 'react';
import links from "../data/links"
import socialLinks from "../data/social_links"
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa"
import { useNavContext } from "../context"

function Sidebar() {
  const { isOpen, closeSidebar } = useNavContext()
  return (
      <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={closeSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url} onClick={closeSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : null} style={{marginTop: '3rem'}}>
          {socialLinks.map(link => {
            return (
              <li key={link.id}>
                <a href={link.url} className="social-link" target='_blank' rel="noreferrer">
                  {link.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;