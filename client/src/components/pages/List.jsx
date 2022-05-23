import React, { useState } from "react";
import {
  AddCard,
  CardOption,
  CardSetting,
  CardTitle,
  CreateCard,
  ListWrapper,
  SettingTitle,
} from "./List.style";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import NewCard from "./NewCard";

const List = ({ list }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickSetting = () => {
    setModalOpen((prev) => !prev);
  };

  const [ addNewCard, setAddNewCard ] = useState(false);

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
      <CreateCard onClick={() => setAddNewCard(true)}>
        {addNewCard ? (
          <NewCard setAddNewCard={setAddNewCard} />
        ) : (
          <AddCard>
            <MdOutlineAdd />
            <p>Add a card</p>
          </AddCard>
        )}
      </CreateCard>
    </ListWrapper>
  );
};

export default List;
