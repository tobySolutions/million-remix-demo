import type { MetaFunction } from "@remix-run/node";
import { block } from "million/react";

export const meta: MetaFunction = () => {
  return [
    { title: "OmoOlogo App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


const DemoApp = () => {
  return (
    <div>
      <h1>Hello, Million with Remix!</h1>
      <OmoOlogo />
      <OmoOlogoBlock />
    </div>
  );
};

const OmoOlogoBlock = block(() => {
  return <p>OmoOlogo Block</p>;
});

const OmoOlogo = () => {
  return <p style={{ color: "green", fontSize: "30px" }}>OmoOlogo React Component demo</p>;
};


export default DemoApp;
