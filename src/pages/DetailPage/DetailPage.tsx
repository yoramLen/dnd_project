import React, { useEffect, useState } from 'react';
import {  DetailContent } from '../../types';
import { useParams } from 'react-router-dom';
import styles from './DetailPage.module.css';
import axios from 'axios';


interface ParamTypes {
    index: string,
    type:string
}

  

const DetailPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedContent, setSelectedContent]=useState<DetailContent>({name:"",desc:""});




    const { index, type } = useParams<ParamTypes>();

    const getDetails = async() =>{
        setLoading(true);
        let response = await axios.get(`https://www.dnd5eapi.co/api/${type}/${index}`, {
    
        });
        let result = await response;
        let specificContent;


        switch(type){
            case "spells":{
                specificContent={
                    name: result.data.name,
                    desc: result.data.desc
                }
                setSelectedContent(specificContent)

                break;
            }
            case "races":{
                specificContent={
                    name:  result.data.name,
                    desc:  result.data.alignment +  result.data.age +  result.data.size_des
                    
                }
                setSelectedContent(specificContent)
                break;
            }
            case "classes":{
                    let proficiencystring:string[]=[];
                proficiencystring= result.data.proficiency_choices[0].from.map((skill:any)=>{
                    let trimmedstring:string = skill.name
                    trimmedstring=trimmedstring.substring(6);
                    return trimmedstring
                })
                
              
               

                specificContent={name:await result.data.name, desc:`choose one of the following proficiencies: ${proficiencystring.toLocaleString()}`}
                setSelectedContent(specificContent);
                break;
            }
            case "monsters":{
                let specials:string[]=[];
                specials =result.data.special_abilities !== undefined? result.data.special_abilities.map((abil:any)=>{
                    return abil.desc;
                }):specials=["we don't have any special info about this monster, either it has evaded our researchers or it is of no import to your quest. Regardless, caution is advised when approaching this beast!"]
                specificContent={name: await result.data.name, desc:`${specials.join(" ")}`}
                setSelectedContent(specificContent);
                break;
            }
            default:{
                specificContent={name:"OOPSIE", desc:"there appears to be no content for this, sorry"}
                setSelectedContent(specificContent)
                break;
            }
        }
            console.log(specificContent)
    
    
        setLoading(false);
    
    
    
    
    }

    useEffect(()=>{

            getDetails();
      


    },[])
    return(
        loading ?<div>content is loading</div> :
        <div className='contentWrapper'>
        <h1 className={styles.centertext}>{selectedContent.name}</h1>
        <div className={styles.textwrapper}>
        <div>{selectedContent.desc}</div>

        </div>
        </div>


    )
    

}

export default DetailPage;