import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
    },
    {
        name: "Avengers Endgame",
        year: "2018",
        rating: 5,
        img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
      },
      {
        name: "Avengers Endgame",
        year: "2018",
        rating: 5,
        img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
      },
      {
        name: "Avengers Endgame",
        year: "2018",
        rating: 5,
        img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
      },
      {
        name: "Avengers Endgame",
        year: "2018",
        rating: 5,
        img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
      },
      {
        name: "Avengers Endgame",
        year: "2018",
        rating: 5,
        img: "https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
      },
              
  ]);

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div key={i} className="card font-medium shadow-lg p-2 hover:-translate-y-3 duration-500 transition-all cursor-pointer mt-6">
            <img
              className="h-72"
              src={e.img}
              alt="..."
            />
            <h1>
              <span className="text-gray-500">Name:</span> {e.name}
            </h1>
            <h1>
              <span className="text-gray-500">Rating:</span>
              <ReactStars
              size={20}
              half={true}
              value={e.rating}
              edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
