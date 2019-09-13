import React from "react";
import styled from "styled-components";

import HomeWorldCard from "./HomeWorldCard";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 35%;
  margin: 10px;
  padding: 25px;
  justify-content: center;
`;

const TextHeader = styled.h2`
  text-align: center;
  background-color: magenta;
  color: white;
`;

const StarWarsCard = props => {
  return (
    <Wrapper classname="wrapper">
      <TextHeader className="H2">{props.name}</TextHeader>
      <HomeWorldCard url={props.homeworld} />
      <p>Birth Year: {props.birth_year}</p>
      <p>Eye Color: {props.eye_color}</p>
      <p>Hair Color: {props.hair_color}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Skin Color: {props.skin_color}</p>
    </Wrapper>
  );
};

export default StarWarsCard;
