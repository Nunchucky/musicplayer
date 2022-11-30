import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/HomePage.module.css";
import logo from '../images/spotify_logo_white.png'
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const baseUrl = 'https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/'

export const HomePage = () => {
    const [data, setData] = useState([]);

    const Item = (props) =>{
        <Card>
            <Card.Body>
                
            </Card.Body>
        </Card>
    }
    useEffect(() => {
        (async () => {
          const songs = await axios.get(
            `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/1/playlists`
          );
    
          console.log(songs.data);
          setData(songs.data);
        })();
      }, []);
    
    return(
        <div className={styles.Container}>
            <div className={styles.column}>
                <img src="logo" className={styles.logo}/>
            </div>
            <div className={styles.top}></div>
            <div className={styles.main}></div>
            <div className={styles.friends}></div>
            <div className={styles.bottom}></div>
        </div>
    );
}
