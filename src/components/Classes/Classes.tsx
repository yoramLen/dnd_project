import { useState, useEffect } from 'react';
import { ListContent } from '../../types';
import axios from 'axios';
import ListElement from '../Listelement/ListElement';
import { Spinner } from 'react-bootstrap';
import styles from './Classes.module.css';

const Classes = () =>{

    const [listClasses, setListClasses]= useState<ListContent[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const[numberToShow,setNumberToShow]=useState<number>(12);

    const GetClasses = async () => {
        setLoading(true);
        let response = await axios.get("https://www.dnd5eapi.co/api/classes", {
     
        });
        let result = await response;
        let contentClasses:ListContent[] = await result.data.results;

        console.log(contentClasses)


        setListClasses(contentClasses);

        setLoading(false);



    }

    useEffect(()=>{
        GetClasses();
        
    },[])


    const handleClick = () =>{
        setNumberToShow(numberToShow+12);
    }




    return (<div className={styles.cards}>
        {
            loading ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> :
                listClasses.slice(0, numberToShow).map((classes) => {
                    return (
                        <div>
                            <ListElement key={classes.name} listContent={classes} type={"classes"}/>
                            
                        </div>
                    )

                }
                )


        }
        {numberToShow===listClasses.length||numberToShow>listClasses.length?"":<input className={styles.button} type="button" id="submit" value="Show More..." onClick={handleClick} />}

    </div>
    )


}





export default Classes;