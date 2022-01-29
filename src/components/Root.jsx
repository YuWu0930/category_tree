import React, {useState, useEffect} from 'react';
import styled from "styled-components"
import Categories from "./Categories"
import * as uuid from "uuid"

function Root() {

    const [categoryInput, setCategoryInput] = useState("")
    const [categories, setCategories] = useState([])


    const addRoot = () => {
      setCategories((categories) => [
        ...categories,
        {
          id: uuid.v4(),
          title: categoryInput,
          category: [],
        },
      ]);
      setCategoryInput("");
    };

    const deleteChild = (id) => {
        const newArray = categories.filter(category => category.id !== id)
        setCategories(newArray)
    }

  return (
    <CategoryTreeContainer>
      <ListContainer>
          <h3 style={{marginRight:"20px", fontSize:"25px"}}>Main Root:</h3>
        <InputBox value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}/>
        <SubmitButton onClick={addRoot}>Submit</SubmitButton>
      </ListContainer>
      <TreeContainer>
          {categories.length > 0 ? categories.map((category, key) => <Categories key={key} categories={categories} setCategories={setCategories} category={category} deleteNodeFromRoot={deleteChild}/>) : ("")}
      </TreeContainer>
    </CategoryTreeContainer>
  );
}

export default Root;

const CategoryTreeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const ListContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100vw;
    margin-top:30px;
    align-items: center;
    justify-content:center;
    
`

const InputBox = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 3px gray;
  padding:5px;
  
`;
const SubmitButton = styled.button`
border: none;
   width:100px;
   font-size:15px;
   border-radius: 10px;
   margin-left:20px;
  
   box-shadow: 0px 2px 5px 3px green;
   padding:5px;
   &:hover {
         cursor: pointer;
    background-color: green;
    color: whitesmoke;
     font-weight: bold;
   }
`
const TreeContainer = styled.div`
display:flex;
flex-direction:column;
`

