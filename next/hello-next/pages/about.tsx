import { NextPage } from "next";

// import { withLayout } from "../components/Layout";

import Link from "next/link";

const About: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <Link href="/post?title=NextJs" prefetch={false}>
      <a>Post</a>
    </Link>
    <p>This is the about page</p>
  </div>
);

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;

  return { userAgent };
};

// export default withLayout(About);
export default About;
