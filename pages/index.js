import { getClient } from "../utils/client";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";

export default function Home({ data }) {
  return (
    <Layout site={data.site} menu={data.menu}>
      <Hero />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getClient().fetch(`{
    "menu": *[_type == "navMenu" && title == "Topnav"][0],
    "site": *[_type == "globalSettings"][0],
    "page": *[_type == "homePage"][0],
  }`);

  // Check for 404
  if (!data.page.title) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
