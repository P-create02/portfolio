import pht1 from "../images/project01.png"
import pht2 from "../images/project02.png"
import pht3 from "../images/project03.png"
import pht4 from "../images/project04.png"
import pht5 from "../images/project05.png"

const projects = [
  {
    id: 1,
    title: "webshop filters",
    image: pht1,
    description: `The application includes products with many interesting filtering options. We can choose products, create our own basket and finally pay for them with a card. Technical aspect of the code you can find on my github.`,
    githubLink: 'https://github.com/P-create02/shop-products-filters-payment',
    url: 'https://webshop-filters-payment.netlify.app/',
  },
  {
    id: 2,
    title: "travel app",
    image: pht2,
    description: `After writting name of any city on earth, the application returns to us a map with the location, name of the country and weather conditions such as temperature, wind, cloud cover or a brief description of the weather condition. As well as all projects, also in the version for the phone. Technical aspect of the code you can find on my github.`,
    githubLink: 'https://github.com/P-create02/travelApp',
    url: 'https://weather-travel-app.netlify.app/',
  },
  {
    id: 3,
    title: "Restaurant project",
    image: pht3,
    description: `The modern restaurant website has versions for both computers and smartphones. It includes a retractable submenu, a functional menu with a specific description of dishes, galleries, a location map and the option to subscribe to the newsletter. The website logo is a proprietary creation. Technical aspect of the code you can find on my github.`,
    githubLink: 'https://github.com/P-create02/Restaurant',
    url: 'https://hamburger-restaurant.netlify.app/',
  },
  {
    id: 4,
    title: "search github mate",
    image: pht4,
    description: `After logging in, the website recognizes you as a user. You can easily search for any github user. You can follow him, check where he works, see his friends and check charts summarizing his struggles on github. The website has two light and dark modes, which are perfect for the night. Technical aspect of the code you can find on my github.`,
    githubLink: 'https://github.com/P-create02/searchUsersGithub',
    url: 'https://search-users-from-github.netlify.app/login',
  },
  {
    id: 5,
    title: "Search photos films",
    image: pht5,
    description: `Search engine for photos and video. You can search for any movie you want, read a short description and find out in which year it was produced. You can also search for a photo on any subject, copy it and go to the website of the photographer who took it. Technical aspect of the code you can find on my github.`,
    githubLink: 'https://github.com/P-create02/search_engine_for_photo_or_film',
    url: 'https://search-photos-videos.netlify.app/',
  },
]

export default projects
