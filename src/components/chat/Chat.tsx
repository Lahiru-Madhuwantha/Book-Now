import React, { useState } from 'react'
import './chat.scss'

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
            alt=""
          />
          <span>Kumara Kumara</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg"
                alt=""
              />
              Kumara Kumara
            </div>
            <span className="close" onClick={()=>setChat(false)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat