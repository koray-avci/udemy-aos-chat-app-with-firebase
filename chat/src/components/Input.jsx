import React from 'react'
import Attach from '../img/Attach.png'
import Img from '../img/imgfiles.png'


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Mesajınızı Yazınız'/>
      <div className='send'>
        <img src={Attach} alt="" />
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img  src={Img} alt="" />
        </label>
        <button>Gönder</button>
      </div>
    </div>
  )
}

export default Input
