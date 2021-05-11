import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quidem. Harum explicabo deserunt reprehenderit praesentium necessitatibus illum impedit nam similique enim mollitia aliquam obcaecati suscipit labore, expedita consectetur ex est.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quidem. Harum explicabo deserunt reprehenderit praesentium necessitatibus illum impedit nam similique enim mollitia aliquam obcaecati suscipit labore, expedita consectetur ex est.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quidem. Harum explicabo deserunt reprehenderit praesentium necessitatibus illum impedit nam similique enim mollitia aliquam obcaecati suscipit labore, expedita consectetur ex est.`,
  },
]

export default services
