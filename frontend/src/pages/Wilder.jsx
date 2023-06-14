import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Wilder.module.css";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

function Wilder() {
  const { id } = useParams();

  const [wilder, setWilder] = useState(null);

  const sendEmail = () => {
    window.location.href = `mailto:${wilder.email}`;
  };

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/wilders/${id}`)
      .then((response) => setWilder(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!wilder) return null;
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={wilder.profile_picture} alt={wilder.firstname} />
        </div>
        <div className={styles.infos}>
          <p> prénom : {wilder.firstname} </p>
          <p> nom de famille : {wilder.lastname} </p>
          <p> age : {wilder.age} </p>
          <p> campus : {wilder.campus} </p>
          <button
            type="button"
            onClick={sendEmail}
            className={styles.contactMeButton}
          >
            Contactez-moi
          </button>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/wilders" className={styles.button}>
          Retour à la liste
        </Link>
      </div>
    </div>
  );
}

export default Wilder;
