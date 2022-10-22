import React from "react";
import GoBack from "components/GoBack";
import { Container } from "react-bootstrap";
import BreadcrumbCustom from "components/Breadcrumb";

//data
import Data from "data/Data";

export default function Pauta({ crumbs, slug, pages }) {
  //search in Data the actual page info
  const principle = pages.reduce((o, key) => ({ ...o, [key]: Data[key] }), {})[slug.replaceAll("-", "_")];

  return (
    <Container className="app-principle main-container">
      <BreadcrumbCustom breadcrumb={crumbs} />
      <GoBack />
      <article>
        <header>
          <span className="index">{principle.key}</span>
          <h1>{principle.name}</h1>
        </header>
      </article>
    </Container>
  );
}
