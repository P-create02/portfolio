import React from "react"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa"
import {ImProfile} from "react-icons/im"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon" />,
    url: "https://github.com/P-create02",
  },
  {
    id: 2,
    icon: <FaFacebookSquare className="social-icon" />,
    url: "https://www.facebook.com/wojtek.sikora.754/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/wojciech-sikora-a81013212/",
  },
  {
    id: 4,
    icon: <ImProfile className="social-icon" />,
    url: "#",
  },
]

export default data
