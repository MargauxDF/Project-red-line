import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Wilder.module.css";

function Wilder() {
  const { id } = useParams();

  const [wilder, setWilder] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/wilders/${id}`)
      .then((response) => setWilder(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!wilder) return null;
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={wilder.profilPicture} alt={wilder.firstname} />
        </div>
        <div className={styles.infos}>
          <p> prénom : {wilder.firstname} </p>
          <p> nom de famille : {wilder.lastname} </p>
          <p> age : {wilder.age} </p>
          <p> campus : {wilder.campus} </p>
        </div>
      </div>
    </div>
  );
}

export default Wilder;
