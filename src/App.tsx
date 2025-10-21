import { useEffect, useState } from "react";
import BeerCard, { type BeerCardProps } from "./components/BeerCard";

const App = () => {
  const [data, setData] = useState<BeerCardProps[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="beerCardWrapper">
      {data.map((data) => (
        <BeerCard {...data} />
      ))}
    </div>
  );
};

export default App;
