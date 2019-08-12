import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  );
};

export const MyLayout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
  </div>
);

export default props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);
