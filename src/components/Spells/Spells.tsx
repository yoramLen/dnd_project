import { useState, useEffect } from 'react';
import { ListContent } from '../../types';
import axios from 'axios';
import ListElement from '../Listelement/ListElement';
import styles from './Spells.module.css';
import Spinner from 'react-bootstrap/Spinner';
import SearchBar from '../SearchBar/SearchBar';





const Spells = () => {
    const [listSpells, setListSpells] = useState<ListContent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [numberToShow, setNumberToShow] = useState<number>(12);


    const handleClick = () => {
        setNumberToShow(numberToShow + 12);
    }

    const GetSpells = async () => {
        setLoading(true);
        let response = await axios.get("https://www.dnd5eapi.co/api/spells", {

        });
        let result = await response;
        let contentSpells: ListContent[] = await result.data.results;

        console.log(contentSpells)


        setListSpells(contentSpells);

        setLoading(false);



    }

   /* const getDetails = async(item:ListContent) =>{
            setLoading(true);
            let response = await axios.get(`https://www.dnd5eapi.co${item.url}`, {
    
            });
            let result = await response;
            let specificSpell: ListContent = await result.data;
    
            console.log(specificSpell)
    
    
            setSelectedContent(specificSpell)
    
            setLoading(false);
    
    
    

    }*/

    useEffect(() => {
        GetSpells();

    }, [])


    



    return (<div className={styles.cards}>
        {
            loading ? <Spinner animation="border" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner> :
                listSpells.slice(0, numberToShow).map((spell) => {
                    return (
                        <div>
                            <ListElement key={spell.index} listContent={spell} type={"spells"} />
                        </div>
                    )

                }
                )


        }
        {numberToShow===listSpells.length||numberToShow>listSpells.length?"":<input className={styles.button} type="button" id="submit" value="Show More..." onClick={handleClick} />}

    </div>
    )
}






export default Spells;