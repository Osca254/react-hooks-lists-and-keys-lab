import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const myListLinks = links.map(element => <a key={element} href={"#" + element}>{element}</a> )
  return <nav>{myListLinks}</nav>;
}

export default NavBar;
