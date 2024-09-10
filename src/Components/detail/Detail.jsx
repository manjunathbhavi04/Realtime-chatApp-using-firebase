import React from "react";
import "./detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Manju</h2>
        <p>Lorem ipsum dolor sit amet consectetur</p>


      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoDeatil">
              <div className="photoItem">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VuJfZepsmghuglByBpsb1rFIkgSeSK6nqA&s" alt="" />
                <span>Photo_820_q</span>

              </div>
            </div>
            <img src="download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>

    </div>
  )
}

export default Detail;