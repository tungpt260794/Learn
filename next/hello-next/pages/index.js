import fetch from "isomorphic-unfetch";

import Link from "next/link";

import Layout from "../components/Layout";

const PostLink = ({ id, name }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${id}`}>
      <a>{name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = ({ shows }) => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {shows.map(show => (
          <PostLink key={show.id} id={show.id} name={show.name} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return { shows: data.map(entry => entry.show) };
};

export default Index;
