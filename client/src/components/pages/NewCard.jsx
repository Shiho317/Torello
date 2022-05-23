import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { FormButtons, NewCardWrapper } from "./NewCard.style";

const NewCard = ({ setAddNewCard }) => {

  const { userInfo } = useContext(AppContext);

  const [cardValue, setCardValue] = useState("");
  const [ dateValue, setDateValue ] = useState("");

  const currUser = JSON.parse(userInfo)

  const addTodos = async(e) => {
    e.preventDefault()

    const newTodo = {
      todo: cardValue,
      due: dateValue,
      user: currUser.name,
    }

    try {
      await axios.post("http://localhost:8888/api/list/todolists", newTodo)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NewCardWrapper onSubmit={addTodos}>
      <textarea
        placeholder="your new card here"
        rows={5}
        onChange={(e) => setCardValue(e.target.value)}
        value={cardValue}
      />
      <input type='date' placeholder="due date" value={dateValue} onChange={(e) => setDateValue(e.target.value)}/>
      <p className="user">{currUser.name}</p>
      <FormButtons>
        <button type="submit" className="submit-btn">
        Create
      </button>
      <div className="cancel-btn" onClick={() => setAddNewCard(false)}>
        <p>Cancel</p>
      </div>
      </FormButtons>
    </NewCardWrapper>
  );
};

export default NewCard;
