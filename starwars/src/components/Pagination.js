import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default class Pagination extends React.Component {
  render() {
    return (
      <Pagination className="Page">
        <PaginationItem>StarWarsCard</PaginationItem>
      </Pagination>
    );
  }
}
