import { useState, useEffect } from 'react';
import { ListContent } from '../../types';
import axios from 'axios';
import styles from "./Monsters.module.css";
import ListElement from '../Listelement/ListElement';

const Monsters = () =>{

    const [listMonsters, setListMonsters]= useState<ListContent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [numberToShow, setNumberToShow] = useState<number>(12);


    const handleClick = () => {
        setNumberToShow(numberToShow + 12);
    }

    const GetMonsters = async () => {
        setLoading(true);
        let response = await axios.get("https://www.dnd5eapi.co/api/Monsters", {
     
        });
        let result = await response;
        let contentMonsters:ListContent[] = await result.data.results;

        console.log(contentMonsters)


        setListMonsters(contentMonsters);

        setLoading(false);



    }

    useEffect(()=>{
        GetMonsters();
        
    },[])
    return (<div className={styles.cards}>
        {
            loading ? <div>this content is still loading</div> :
                listMonsters.slice(0, numberToShow).map((monster) => {
                    return (
                        <div>
                            <ListElement key={monster.index} listContent={monster} type={"monsters"} />
                        </div>
                    )

                }
                )


        }
        {numberToShow===listMonsters.length||numberToShow>listMonsters.length?"":<input className={styles.button} type="button" id="submit" value="Show More..." onClick={handleClick} />}

    </div>
    )
}









export default Monsters;