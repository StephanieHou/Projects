import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";

const More = () => (
  <div>
    <nav id="navig">
      <Link to="/Home">Home</Link>
      {"  /  "}
      <Link to="/Pokedex">Pokedex</Link>
    </nav>
    <div id="more">
      <div id="topbar" />
      <div id="content">
        <Section
          image="https://media.nintendo.com/nintendo/bin/-IiuX4vsV7L1fWEPM2uoFllrGJwtcykD/XhzLq-Ayi6RnlXjaFD9UwhRnG8DmMnnd.jpg"
          header="Pokémon Crystal is back--and so is Pikachu!"
          description="Originally released for the Game Boy™ Color system in 2000, the Pokémon™ Crystal game added several new features to the Pokémon franchise."
          bigdiv="bigdiv"
          worddiv="bigword"
          alink="https://www.nintendo.com/whatsnew/detail/pokemon-crystal-is-back-and-so-is-pikachu"
        />
        <Section
          image="https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/_tiles/amazon-prime-channel/amazon-prime-channel-169.jpg"
          header="Amazon Offers Up a New Pokémon Channel"
          description="If you need more Pokémon animation in your life, get ready—starting today, Amazon is launching a new subscription-based channel devoted entirely to Pokémon animated content."
          bigdiv="smalldiv"
          worddiv="smallword"
          alink="https://www.pokemon.com/us/pokemon-news/amazon-offers-up-a-new-pokemon-channel/"
        />
        <Section
          image="https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-go/01232018/pokemon-go-169.jpg"
          header="Get Ready to Rock in Pokémon GO"
          description="Lunatone and Solrock lead the charge as Rock- and Ground-type Pokémon from the Hoenn region arrive in Pokémon GO."
          bigdiv="smalldiv"
          worddiv="smallword"
          alink="https://www.pokemon.com/us/pokemon-news/get-ready-to-rock-in-pokemon-go/"
        />
        <Section
          image="https://assets.pokemon.com/assets/cms2/img/misc/_tiles/legendary/legendary-campaign-169-en.jpg"
          header="2018 Will Be Legendary!"
          description="Join a yearlong event featuring Legendary Pokémon, including Pokémon distributions, activities, and more."
          bigdiv="smalldiv"
          worddiv="smallword"
          alink="https://www.pokemon.com/us/pokemon-news/2018-will-be-legendary/"
        />
        <Section
          image="https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/detective-pikachu/detective-pikachu-announce-169.jpg"
          header="Crack the Case with Detective Pikachu!"
          description="Talk tough and solve mysteries in Detective Pikachu for the Nintendo 3DS system; launching March 2018."
          bigdiv="smalldiv"
          worddiv="smallword"
          alink="https://www.pokemon.com/us/pokemon-news/crack-the-case-with-detective-pikachu/"
        />
      </div>
      <div id="bottombar" />
    </div>
  </div>
);

export default More;
