import React, { useState, useEffect } from "react";
import { ContainerEducation, CategoryTitle, ItemTitle, ItemDuration } from "./style.js"

export const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Ошибка при получении данных из JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContainerEducation>

    </ContainerEducation>
  );
};