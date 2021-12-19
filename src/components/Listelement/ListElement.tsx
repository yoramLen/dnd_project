import { ListContent } from '../../types';
import {Link} from 'react-router-dom';
import styles from './ListElement.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../App/App';
interface ListElementProps {
    listContent: ListContent,
    type?:string
  }
  
  const ListElement = ({ listContent,type }: ListElementProps) => {

const {mode}=useContext(ThemeContext)


  
    return (
      <Link to={ {pathname:`/Details/${type}/${listContent.index}`}} className={styles.linkje} >
        <div key={listContent.name} className={mode==='dark'?styles.listCard:styles.listCardLight}>
          <div>{listContent.name}</div>
        </div>
      </Link>
    )
  }
  
  export default ListElement;