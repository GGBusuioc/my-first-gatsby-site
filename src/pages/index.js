// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nunta Vlad si Irina"
        src="https://i.imgur.com/cxDtBRE_d.webp?maxwidth=760&fidelity=grand"
      />
      <p></p>
      <StaticImage alt="Formatia" src="../images/Formatia.jpg" />
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
