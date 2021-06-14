import React from "react";

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="section-title">about</h1>
      <p>
        This is a website built using React 
        and <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noreferrer" style={{textDecoration:"underline"}}>CocktailDB API</a> for 
        displaying different cocktails and their details,buil to learn the react router along with API fetching and content
        display
      </p>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <p style={{fontSize:"20px"}}>Built by Thilak</p>
        <div style={{display:"flex",gap:"5px",textDecoration:"underline"}}>
          <a href="https://twitter.com/thilak_ch"  target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://github.com/thilak009"  target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/thilak-reddy-87ab4b1b3/"  target="_blank" rel="noreferrer">Linkedin</a>
        </div>
      </div>
    </section>
  );
}
