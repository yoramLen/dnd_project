import { Form } from "react-bootstrap";

export interface SearchFunc{
    (name:string):void
}
interface SearchBarProps{
    handleChange:SearchFunc
}



const SearchBar = ({handleChange}:SearchBarProps)=>{



 return(
     <div>
            <input type="text" id="name" placeholder="search..." onChange={(e)=>{handleChange(e.target.value)}} value=""/>
     </div>
 );   
}


export default SearchBar;