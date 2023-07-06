import React, { useState, useEffect } from "react"

import { ContainerEducation } from "./style"

export const Education = () => {
    return (
        <ContainerEducation>

        </ContainerEducation>
    )
}

export const Page = () => {
    const fetchJsonData = async () => {
        try {
          const response = await fetch("data.json");
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("Ошибка при получении данных из JSON:", error);
        }
      };
  const [data, setData] = useState([]);

    useEffect(() => {
        fetchJsonData();
    }, []);
    
  return (
    <div>
      {data.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Продолжительность: {item.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};