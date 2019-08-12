import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/" as="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about" as="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
