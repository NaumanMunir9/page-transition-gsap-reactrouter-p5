import React from "react";
import Title from "../../components/Title/Title.component";
import "./Home.styles.scss";

const Home = () => {
  return (
    <div className="inner">
      <Title lineContent="This is the" lineContent2="home page" />
      <div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          saepe, doloremque aperiam ut eius nisi ipsam aliquid facilis mollitia,
          fugit, cumque nostrum quaerat. Nam exercitationem officiis omnis aut
          facilis atque deserunt hic, ipsum similique debitis nostrum fugiat
          ducimus unde explicabo molestiae maxime perspiciatis earum quod
          voluptatibus fuga aliquid obcaecati.
        </p>
      </div>
    </div>
  );
};

export default Home;
