import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import StarWarsCard from "./components/StarWarsCard";
// import Pagination from "./components/Pagination";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 80%;
  font-family: roboto;
  margin: 0 auto;
  padding-top: 30px;
  dispay: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-family: roboto;
`;

const Header = styled.h1`
  color: black;
  text-align: center;
  font-family: "Geostar Fill", cursive;
  font-weight: bold;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-family: "Geostar Fill", cursive;
  font-weight: bold;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsData, setStarWarsData] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        const data = response.data;
        console.log("Data", data);
        setStarWarsData(data.results);
      })
      .catch(error => {
        console.log("Sorry no StarWars character", error);
      });
  }, []);

  return (
    <div className="logo">
      <Header className="h1">Star Wars</Header>
      <Text className="paragraph">May the fourth be with you</Text>

      <MainDiv className="character-list">
        {starWarsData.map(data => (
          <StarWarsCard
            name={data.name}
            homeworld={data.homeworld}
            birth_year={data.birth_year}
            eye_color={data.eye_color}
            gender={data.gender}
            hair_color={data.hair_color}
            height={data.height}
            mass={data.mass}
            skin_color={data.skin_color}
          />
        ))}
      </MainDiv>
    </div>
  );
};

export default App;
