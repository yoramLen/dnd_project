import { useState, useEffect } from 'react';
import { ListContent } from '../../types';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import ListElement from '../Listelement/ListElement';
import styles from "./Races.module.css";


const Races = () =>{

    const [listRaces, setListRaces]= useState<ListContent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const[numberToShow, setNumberToShow]= useState<number>(12);

    const GetRaces = async () => {
        setLoading(true);
        let response = await axios.get("https://www.dnd5eapi.co/api/races", {
     
        });
        let result = await response;
        let contentRaces:ListContent[] = await result.data.results;

        console.log(contentRaces)


        setListRaces(contentRaces);

        setLoading(false);



    }

    useEffect(()=>{
        GetRaces();
        
    },[])
    const handleClick = () => {
        setNumberToShow(numberToShow + 12);
    }




    return (<div className={styles.cards}>
        {
            loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> :
                listRaces.slice(0, numberToShow).map((race) => {
                    return (
                        <div>
                            <ListElement key={race.index} listContent={race} type={"races"} />
                        </div>
                    )

                }
                )


        }
        {numberToShow===listRaces.length||numberToShow > listRaces.length?"":<input className={styles.button} type="button" id="submit" value="Show More..." onClick={handleClick} />}

    </div>
    )



}





export default Races;