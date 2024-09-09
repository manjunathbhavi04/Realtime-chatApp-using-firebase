import React, { useState } from 'react';
import "./chatlist.css";
 
 
const ChatList = () => {

  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatlist'>
        <div className="search"> 
          <div className="searchBar">
            <img src="./search.png" alt="" />
            <input type="text" className="" placeholder='Search'/>
          </div>
          <img onClick={ () =>  setAddMode((prev) => !prev)} src={(addMode)?"./minus.png":"plus.png"} alt="" className='add' />
        </div>
    </div>
  )
}

export default ChatList;