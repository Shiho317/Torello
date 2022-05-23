import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeroWrapper } from "./Hero.style";
import List from "./List";

const Hero = () => {
  const [todolists, setTodolists] = useState([]);

  const loadLists = async () => {
    try {
      await axios
        .get("http://localhost:8888/api/list/todolists")
        .then((result) => {
          setTodolists(result.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadLists();
  }, []);

  return (
    <HeroWrapper>
      {todolists.map((list) => (
        <List key={list._id} list={list} />
      ))}
    </HeroWrapper>
  );
};

export default Hero;
