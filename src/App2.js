import "./tailwind.css"; // Css
import Button from "./components/Button"; // Button
import Example from "./components/Example";
import Tab from "./components/Tab";
import { useState } from "react";
import GTab from "./components/GT";

function App2() {
  const todos = ["Merhaba", "Selamlar", "Hayda!"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Ayarlara Git</button>
        <Tab activeTab={activeTab}>
          <Tab.Panel title="Profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            className="bg-gray-600 font-semibold px-6 py-3 hover:bg-gray-500 text-center text-white"
            key={index}
          >
            {todo}
          </li>
        ))}
      </ul>
      <Button text="Default Button" />
      <Button text="Danger Button" varidant="danger" />
      <Button text="Success Button" varidant="success" />
      <Button text="Warning Button" varidant="warning" />
      <Example />
      <br />
      <GTab>
        <GTab.Panel title="Profile">Profile</GTab.Panel>
        <GTab.Panel title="about">About</GTab.Panel>
        <GTab.Panel title="contact">Contact</GTab.Panel>
      </GTab>
    </>
  );
}

export default App2;
