import React, { useState } from "react";
import axios from "axios";
import {axiosWithAuth} from '../helpers/axiosWithAuth';

import EditMenu from './EditMenu';
const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/colors/${colorToEdit.id}`, colorToEdit)
    .then(res => {
      console.log(res.data)
        axiosWithAuth().get('/colors')
        .then(response => {
          // console.log(response.data)
          updateColors(response.data)
        })
    })
    .catch(err => {
      console.log(err.response)
    })
  };


  // console.log(`colors`, colors);

  const deleteColor = color => {
    axiosWithAuth().delete(`/colors/${color.id}`)
    .then(res => {
      console.log(res.data)
      updateColors(colors.filter(color => color.id !== Number(res.data)))

    })
    .catch(err => {
      console.log(err.response)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span 
                data-testid='color-test'
                className="delete" 
                onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }
              >
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }
    </div>
  );
};
export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.