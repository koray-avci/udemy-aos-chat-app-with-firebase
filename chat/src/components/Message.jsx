import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://images.pexels.com/photos/13160157/pexels-photo-13160157.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
        <span>Biraz Önce</span>
      </div>
      <div className='messageContent'>
        <p>Merhaba</p>
      </div>
    </div>
  )
}

export default Message
