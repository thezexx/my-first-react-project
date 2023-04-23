import { useState } from "react";

export default function GTab({ children, activeTab }) {
  const [active, setActive] = useState(activeTab);

  return (
    <div className="bg-gray-500 flex flex-col items-center w-80 h-80">
      <nav>
        {children.map((tab, index) => (
          <button
          key={index}
          onClick={() => setActive(index)}
            className={active === index ? "bg-slate-400" : "bg-slate-500"}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      <div>
      {children[active]}
      </div>
    </div>
);
}

GTab.Panel = ({ children }) => {
  return <div>{children}</div>;
};
