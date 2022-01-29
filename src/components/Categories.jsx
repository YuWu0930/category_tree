import React,{useState} from 'react';
import styled from "styled-components"
import * as uuid from "uuid"

function Categories({category, deleteNodeFromRoot}) {

    const [title, setTitle] = useState(category.title);
    const [categoryRoot, setCategoryRoot] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [showChildren, setShowChildren] = useState(false)

    const addChildCategory = () => {
        const newArray = [...categoryRoot];
        newArray.push({
            id:uuid.v4(),
            title:"Please Edit Your Title"
        })
        setShowChildren(true)
        setCategoryRoot(newArray)
    }



    const deleteNode = (id) => {
         const newArray = categoryRoot.filter(category => category.id !== id)
          setCategoryRoot(newArray)
    }

  return (
    <NodeContainer>
      <ChildrenContainer>
        <ArrowContainer
          onClick={() => setShowChildren(!showChildren)}
          style={showChildren ? { transform: "rotate(90deg" } : {}}
        >
          <img src="/assets/rightArrow.png" />
        </ArrowContainer>
        <TitleContainer>
          {editMode ? (
            <InputBox
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <>
              <h2>{title}</h2>
            </>
          )}
        </TitleContainer>
        <ButtonContainer>
          {editMode ? (
            <EditButton onClick={() => setEditMode(!editMode)}>Save</EditButton>
          ) : (
            <EditButton onClick={() => setEditMode(!editMode)}>Edit</EditButton>
          )}

          <AddButton onClick={addChildCategory}>Add</AddButton>
          <DeleteButton onClick={() => deleteNodeFromRoot(category.id)}>
            Delete
          </DeleteButton>
        </ButtonContainer>
      </ChildrenContainer>

      {categoryRoot.map((categoryChild) => (
        <div style={showChildren ? ({}):({ display: "none" })}>
          <Categories
            category={categoryChild}
            deleteNodeFromRoot={deleteNode}
          />
        </div>
      ))}
    </NodeContainer>
  );
}

export default Categories;

const NodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 10px;
  width: 500px;
`;
const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 3px gray;
`;
const ArrowContainer = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.div`
  display: flex;
  flex: 5;
  align-items: flex-start;
  justify-content: flex-start;
 
`;
const ButtonContainer = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: space-between;
`;

const EditButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 3px blue;
  &:hover {
    cursor: pointer;
    background-color: blue;
    color: whitesmoke;
    font-weight: bold;
  }
`;
const DeleteButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 3px red;
  &:hover {
    cursor: pointer;
    background-color: red;
    color: whitesmoke;
    font-weight: bold;
  }
`;
const AddButton = styled.button`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 5px 3px green;
  &:hover {
    cursor: pointer;
    background-color: green;
    color: whitesmoke;
    font-weight: bold;
  }
`;

const InputBox = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 3px gray;
  padding:5px;
`;