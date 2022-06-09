import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mapLinks = links.map( (link) => {
        return (
          <a key = {link} href = {"#" + link}>{link}</a>
        )
    }
  )
  return <nav>
          {mapLinks}
        </nav>;
}

export default NavBar;
