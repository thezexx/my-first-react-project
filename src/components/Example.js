import { useState } from "react";

export default function Example() {
  const [age, setAge] = useState(20);

  return (
    <div>
      <p>Güncell Yaşınız: {age}</p>
      <input
        type="number"
        id="ageInput"
        className=" p-4 border border-gray-400 rounded appearance-none"
      />
      <button
        className="p-4 border border-gray-400 rounded appearance-none"
        placeholder="Yaşınız?"
        onClick={() =>
          setAge(Number(document.querySelector("#ageInput").value))
        }
      >
        Yaşını Güncelle
      </button>
    </div>
  );
}