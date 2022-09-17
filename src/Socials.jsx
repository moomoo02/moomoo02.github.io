import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(faCheckSquare, faCoffee)
function Socials() {

    const icons= [
        {
          image: "fa-github",
          url: "https://github.com/moomoo2202",
        },
        {
          image: "fa-youtube",
          url: "https://www.youtube.com/user/moomoo02Gaming",
        },
        {
          image: "fa-discord",
          url: "https://discordapp.com/users/708372877002539089/",
        },
        {
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/vincehnguyen/",
        },
        {
          image: "fa-twitter",
          url: "https://twitter.com/moomoo02_",
        },
    ];

  return (
    <div className="p-5">  
        {icons.map((icon, index) => (
            <a
             key={`social-icon-${index}`}
             target="_blank"
             rel="noopener noreferrer"
             href={icon.url}
             aria-label={`My ${icon.image.split("-")[1]}`}
            >
            <i style={{padding: "10px"}} className={`fab ${icon.image}  fa-5x socialicons`} />
            </a>
        ))}
    </div>
  )
}

export default Socials