import Tailwind from "./tailwind.js";
import "./tailwind.css";

export default function FirstFileStyles() {
  <div className="App">
    <img src="logo512.png" alt="React Icon" />
    <p>{process.env.NODE_ENV}</p>
    <Tailwind />
    <h3>{process.env.REACT_APP_PORT}</h3>
    {process.env.NODE_ENV === "production" && (
      <>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Test Image"
        />
        <p>hello</p>
      </>
    )}
  </div>;
}
