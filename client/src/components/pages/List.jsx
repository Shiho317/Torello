import React, { useState } from "react";
import {
  AddCard,
  CardOption,
  CardSetting,
  CardTitle,
  ListWrapper,
  SettingTitle,
} from "./List.style";
import { MdOutlineAdd, MdClose } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const List = ({ list }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onClickSetting = () => {
    setModalOpen((prev) => !prev);
  };

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
      <AddCard>
        <MdOutlineAdd />
        <p>Add a card</p>
      </AddCard>
    </ListWrapper>
  );
};

export default List;
