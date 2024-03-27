import { useState, useContext } from "react";
import { auth, db } from "../firebase/config";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

const Search = () => {
  const [arananKullanici, setArananKullanici] = useState("");
  const [kullanici, setKullanici] = useState(null);
  const [hata, setHata] = useState(false);

  const { girisKullanici } = useContext(AuthContext);

  const handleAra = async () => {
    const q = query(
      collection(db, "kullanicilar"),
      where("kullaniciAd", "==", arananKullanici)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setKullanici(doc.data());
      });
    } catch (err) {
      setHata(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleAra();
  };

  const handleSec = async () => {
    const birlestirilmisId =
      girisKullanici.uid > kullanici.uid
        ? girisKullanici.uid + kullanici.uid
        : kullanici.uid + girisKullanici.uid;
    try {
      const res = await getDoc(doc(db, "chatler", birlestirilmisId));

      if (!res.exists()) {
        await setDoc(doc(db, "chatler", birlestirilmisId), { mesajlar: [] });

        await updateDoc(doc(db, "kullaniciChatler", girisKullanici.uid), {
          [birlestirilmisId + ".kullaniciBilgi"]: {
            uid: kullanici.uid,
            kullaniciAd: kullanici.kullaniciAd,
            fotoURL: kullanici.fotoURL,
          },
          [birlestirilmisId + ".tarih"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "kullaniciChatler", kullanici.uid), {
          [birlestirilmisId + ".kullaniciBilgi"]: {
            uid: girisKullanici.uid,
            kullaniciAd: girisKullanici.displayName,
            fotoURL: girisKullanici.photoURL,
          },
          [birlestirilmisId + ".tarih"]: serverTimestamp(),
        });
      }
    } catch (error) {}

    setKullanici(null);
    setArananKullanici("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Kullanıcı Ara"
          onKeyDown={handleKey}
          onChange={(e) => setArananKullanici(e.target.value)}
          value={arananKullanici}
        />
      </div>
      {hata && <span>Kullanıcı Bulunamadı</span>}
      {kullanici && (
        <div className="userChat">
          <img src={kullanici.fotoURL} alt="foto" />
          <div className="userChatInfo">
            <span>{kullanici.kullaniciAd}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
