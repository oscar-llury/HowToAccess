import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";

/* eslint-disable import/no-webpack-loader-syntax */
import perceptible from "!babel-loader!mdx-loader!./../data/perceptible.mdx";
import operable from "!babel-loader!mdx-loader!./../data/operable.mdx";
import entendible from "!babel-loader!mdx-loader!./../data/entendible.mdx";
import robusto from "!babel-loader!mdx-loader!./../data/robusto.mdx";
import BreadcrumbCustom from "components/Breadcrumb";

export default function Principle({ breadcrumb }) {
  let location = useLocation();
  const paths = location.pathname.split("/");
  const slug = paths[paths.length - 1];

  /*
  function importAll(r) {
    r.keys()
      .map(r)
      .forEach((element) => {
        console.log(element);
        //const { data, content } = matter(element);
      });
  }
  const images = importAll(require.context("./../data/", false, /\.(mdx)$/));
*/

  const Content = {
    perceptible: perceptible,
    operable: operable,
    entendible: entendible,
    robusto: robusto,
  }[slug];

  const [crumbs, setCrumbs] = useState([
    {
      title: paths[1].replaceAll("-", " "),
      link: "/" + paths[1],
    },
    { title: slug },
  ]);

  return (
    <Container>
      <BreadcrumbCustom breadcrumb={crumbs} />
      <Content />
    </Container>
  );
}
