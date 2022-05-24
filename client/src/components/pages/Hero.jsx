import axios from "axios";
import React, { useEffect, useState } from "react";
import { AddList, HeroWrapper } from "./Hero.style";
import List from "./List";
import { MdOutlineAdd } from 'react-icons/md'
import AddNewList from "./AddNewList";

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

  const [ addNewList, setAddNewList ] = useState(false)

  return (
    <HeroWrapper>
      {todolists.map((list) => (
        <List key={list._id} list={list} loadLists={loadLists} />
      ))}
      { addNewList ? (
        <AddNewList setAddNewList={setAddNewList} loadLists={loadLists} />
      ) : (
        <AddList onClick={() => setAddNewList(true)}>
        <MdOutlineAdd/>
        <h4>Add another list</h4>
        </AddList>
      )}
      
    </HeroWrapper>
  );
};

export default Hero;
