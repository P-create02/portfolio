import React from "react"
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaHtml5,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa"
import {
  DiJavascript,
} from "react-icons/di"
import {
  FiFigma,
} from "react-icons/fi"
import {
  SiSass,
  SiStyledComponents,
} from "react-icons/si"

const language = [
  {
    id: 1,
    icon: <FaReact />,
    text: "react.js",
  },
  {
    id: 2,
    icon: <DiJavascript />,
    text: "javascript",
  },
  {
    id: 3,
    icon: <FaNodeJs />,
    text: "node.js",
  },
  {
    id: 4,
    icon: <SiSass />,
    text: "SASS",
  },
  {
    id: 5,
    icon: <SiStyledComponents />,
    text: "Styled Components",
  },
  {
    id: 6,
    icon: <FaBootstrap />,
    text: "Bootstrap",
  },
  {
    id: 7,
    icon: <FaHtml5 />,
    text: "HTML",
  },
  {
    id: 8,
    icon: <FaCss3Alt />,
    text: "CSS",
  },
  {
    id: 9,
    icon: <FaGithub />,
    text: "Git",
  },
  {
    id: 10,
    icon: <FiFigma />,
    text: "Figma",
  },
]

export default language
