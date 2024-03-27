import { useContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

const Chats = () => {

  const [chats,setChats]=useState([])
  const {girisKullanici}=useContext(AuthContext)

  useEffect(()=>{
    const getChats=()=>{
      const unsub=onSnapshot(doc(db,'kullaniciChatler',girisKullanici.uid),(doc)=>{
        setChats(doc.data())
      })

      return ()=>{
        unsub()
      }
    }

    girisKullanici.uid && getChats(); 
  },[girisKullanici.uid])

  console.log(chats)
  console.log(Object.entries(chats))

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/13160157/pexels-photo-13160157.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Luffy</span>
          <p>Son Mesaj</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/13160157/pexels-photo-13160157.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Luffy</span>
          <p>Son Mesaj</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/13160157/pexels-photo-13160157.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Luffy</span>
          <p>Son Mesaj</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
