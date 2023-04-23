import { useEffect, useState } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("İlk Yüklenme.");
    return () => {
      // yok olduğunda veya silindiğinde çalışır
      console.log("Yol olma/silinme");
    };
  }, []); // ilk yüklendiğinde çalışır

  useEffect(() => {
    console.log("Güncellendim.");
  }); //update olduğunda çalışır

  return (
    <>
      <h3>Sayaç: {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
      <hr />
      Test Component
    </>
  );
}
