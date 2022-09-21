import React, { useEffect } from 'react'
import "../style/Chats.css";
const Chats = () => {
  

  
  return (
  <div style={{ marginTop:"120px", marginBottom:"20px"}}>
    <h2 className='text-center my-1 mb-3' >Nhắn tin</h2>
    <div className="container "  >
  <div className="container text" >
    <div className="col-md-8 content_chat" style={{border: '1px solid rgb(72, 141, 168)', padding: '5px', margin: '0 !important', background: 'rgba(220, 239, 245, 0.712)', marginLeft:"240px"}}>
      <div className="content_chat_top d-flex justify-content-between align-items-center  py-1" style={{background: 'rgba(220, 239, 245, 0.712)', borderBottom: '4px solid rgb(224, 234, 235)'}}>
        <div className="info_fr">
          <a className=" d-flex " >
            <img className="img_friend_content_chat" src="vit.jpg"  width="60px" height="60px" style={{borderRadius: '50%', margin: '0 13px'}} />
            <div className="content_friend_messages" style={{marginTop: 14}}>
              <p className="name_friend_messages" style={{margin: 0, fontSize: 18, fontWeight: 500, color: 'rgb(29, 46, 88)'}}>Huy
                Nguyen
              </p>
            </div>
          </a>
        </div>
        <div className="icons_content_chat_top" style={{marginLeft: 400}}>
          <i className="fa fa-users icons_chat_top" style={{fontSize: 25, color: 'rgba(15, 15, 15, 0.795)', marginRight: 10}} />
          <i className="fa fa-cog icons_chat_top" style={{fontSize: 25, color: 'rgba(15, 15, 15, 0.795 )', marginRight: 10}} />
          <i className="fa fa-bars" style={{fontSize: 25, color: 'rgba(15, 15, 15, 0.795 )', marginRight: 10}} />
        </div>
        <br />
      </div>
      {/*Khung chat  */}
      <div className="content_chat_center">
        <div className="received_chats ">
      
        </div>
        <div className="outgoing_chats">
          <div className="outgoing_chat_msg">
            {/* chat */}
            <p>Hello !! Rất vui được gặp bạn</p>
            {/* time */}
            <span className="time">12:02, Thứ 6 ngày 20</span>
          </div>
          <div className="outgoing_chats">
            <img className="outgoing_chats_img" src="./avt.jpg"  />
          </div>
        </div>
        <div className="received_chats ">
          <div className="received_chats_img">
            <img src="vit.jpg"  />
          </div>
          <div className="received_msg">
            <div className="received_msg_inbox">
              {/* chat */}
              <p>Hello !! Tôi tên là John Cena, tôi đến từ USA</p>
              {/* time */}
              <span className="time">11:02, Thứ 6 ngày 20</span>
            </div>
          </div>
        </div>
        <div className="outgoing_chats">
          <div className="outgoing_chat_msg">
            {/* chat */}
            <p>Hello !! Rất vui được gặp bạn</p>
            {/* time */}
            <span className="time">12:02, Thứ 6 ngày 20</span>
          </div>
          <div className="outgoing_chats">
            <img className="outgoing_chats_img" src="./avt.jpg"  />
          </div>
        </div>
        <div className="received_chats ">
          <div className="received_chats_img">
            <img src="vit.jpg"  />
          </div>
          <div className="received_msg">
            <div className="received_msg_inbox">
              {/* chat */}
              <p>Hello !! Tôi tên là John Cena, tôi đến từ USA</p>
              {/* time */}
              <span className="time">11:02, Thứ 6 ngày 20</span>
            </div>
          </div>
        </div>
        <div className="outgoing_chats">
          <div className="outgoing_chat_msg">
            {/* chat */}
            <p>Hello !! Rất vui được gặp bạn</p>
            {/* time */}
            <span className="time">12:02, Thứ 6 ngày 20</span>
          </div>
          <div className="outgoing_chats">
            <img className="outgoing_chats_img" src="./avt.jpg"  />
          </div>
        </div>
      </div>
      <div className="content_chat_bottom">
        <div className="content_chat_bottom_icon" style={{width: '100%', height: 50, backgroundColor: 'rgba(217, 231, 240, 0.623)', paddingTop: 10}}>
          <a  type="file" style={{width: '100%', backgroundColor: 'thistle', border: '1px solid rgb(151, 98, 98)', padding: 5, marginLeft: 10}}>
            <i className="fa fa-image" style={{fontSize: 25, color: 'rgba(15, 15, 15, 0.795)'}} />
          </a>
          <a  style={{width: '100%', backgroundColor: 'thistle', border: '1px solid rgb(151, 98, 98)', padding: 5, marginLeft: 10}}>
            <i className="fa fa-paperclip" style={{fontSize: 25, color: 'rgba(15, 15, 15, 0.795)'}} />
          </a>
        </div>
        <div className="input-group input-group my-1 ">
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
          <div className="input-group-prepend">
            <button className="btn btn-success" id="inputGroup-sizing-default">Gửi</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
    

  )
}

export default Chats