import { useEffect, useState } from "react";

export default function Tab({ children, activeTab }) {

  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);
  
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            key={index}
            className={
              active === index ? "bg-gray-600 text-white" : "bg-gray-400"
            }
            onClick={() => setActive(index)}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.Panel = ({ children }) => {
  return <div>{children}</div>;
};
