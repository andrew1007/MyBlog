import React from 'react'
import Link from './link'

const linksMap = new Map()
linksMap.set("React.js Blog", ["http://www.andrewyueh.blogspot.com/", "fa fa-rss fa-2x"])
linksMap.set("Github", ["https://github.com/andrew1007", "fa fa-github fa-3x"])
linksMap.set("LinkedIn", ["https://www.linkedin.com/in/andrewyueh/", "fa fa-linkedin fa-2x"])
linksMap.set("yueh.andrew@gmail.com", ["mailto:yueh.andrew@gmail.com", "fa fa-envelope-o fa-2x"] )
linksMap.set("Resume", [require('../../images/resume.pdf'), "fa fa-file-pdf-o fa-2x resume"])

const Links = (props) => {

  const links = Array.from(linksMap).map(([name, data]) => {
    let [link, icon] = data
    let linkProps = {link, icon, name}
    return (
      <Link key={link} {...linkProps}/>
    )
  })

  return (
    <div>
      {links}
    </div>
  )
}

export default Links
