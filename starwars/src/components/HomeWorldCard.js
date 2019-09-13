import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const HomeWorldCard = props => {
  const [homeworldData, setHomeworldData] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then(response => {
        const data = response.data;
        console.log("Data", data);
        setHomeworldData(data);
      })
      .catch(error => {
        console.log("Sorry no homeworld data", error);
      });
  }, []);
  return <div>Homeworld Name: {homeworldData.name}</div>;
};

export default HomeWorldCard;
