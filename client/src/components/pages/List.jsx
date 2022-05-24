import React, { useState } from "react";
import {
  AddCard,
  CardOption,
  CardSetting,
  CardTitle,
  CreateCard,
  ListWrapper,
  SettingTitle,
  TodosWrapper,
} from "./List.style";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import NewCard from "./NewCard";
import Todos from "./Todos";

const List = ({ list, loadLists }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickSetting = () => {
    setModalOpen((prev) => !prev);
  };

  const [addNewCard, setAddNewCard] = useState(false);

  return (
    <ListWrapper>
      <CardTitle>
        <h4>{list.title}</h4>
        <CardOption onClick={() => onClickSetting()}>
          <button>
            <BiDotsHorizontalRounded />
          </button>
          {modalOpen && (
            <CardSetting>
              <SettingTitle>
                <p>List options</p>
                <button>
                  <MdClose />
                </button>
              </SettingTitle>
              <ul>
                <li>Rename</li>
                <li>Delete</li>
              </ul>
            </CardSetting>
          )}
        </CardOption>
      </CardTitle>
      <TodosWrapper>
      {list.todos.map((item, index) => (
        <Todos key={index} todo={item} />
      ))}
      </TodosWrapper>
      <CreateCard>
        {addNewCard ? (
          <NewCard list={list} setAddNewCard={setAddNewCard} loadLists={loadLists}/>
        ) : (
          <AddCard onClick={() => setAddNewCard(true)}>
            <MdOutlineAdd />
            <p>Add a card</p>
          </AddCard>
        )}
      </CreateCard>
    </ListWrapper>
  );
};

export default List;
