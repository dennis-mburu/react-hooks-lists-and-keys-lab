import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const [home, about, projects] = links
  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  return(
    <nav>
      <a key={home} href='#home'>home</a>
      <a key={about} href='#about'>about</a>
      <a key={projects} href='#projects'>projects</a>
    </nav>
  )
}

export default NavBar;
