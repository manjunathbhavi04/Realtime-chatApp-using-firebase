import React, { useEffect, useRef, useState } from 'react';
import EmojiPicker from "emoji-picker-react"
import "./chat.css";


const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect( () => {
    endRef.current?.scrollIntoView({behavior: "smooth"})
  }, []);

  const handleEmojiCLick = (e) => {
    setText(prev => prev + e.emoji);
  }

  return (
    <div className='chat'>

      {/* Top of the Chat */}
      <div className="top">

        {/* user section */}
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Manju</span>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>

        {/* icons section*/}
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="info.png" alt="" />
        </div>

      </div>



      {/* Center chatbox */}

      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.macrumors.com/t/wQZaEI3A20Fl4l212wLx4ak674w=/2250x/article-new/2021/03/Whatsapp-Feature.jpg" alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus esse atque voluptates libero inventore dolorem deleniti, qui officia aperiam similique ad at, rerum voluptas aliquam dolorum aut, maxime magnam.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef} ></div> 
      </div>





      {/* Bottom of chatBox for sending messages */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />

        </div>
        <input type="text" placeholder='Type a message...' value={text} onChange={e => setText(e.target.value)} />
        <div className="emoji">
          <img onClick={() => setOpen((prev) => !prev)} src="./emoji.png" alt="" />
          <div className="emojiPicker">
            <EmojiPicker open={open} onEmojiClick={handleEmojiCLick} height={300} width={300} />
          </div>

        </div>
        <button className='sendButton'>Send</button>



      </div>


    </div>
  )
}

export default Chat;