import { ListContent } from '../../types';
import {Link} from 'react-router-dom';
import styles from './ListElement.module.css';
interface ListElementProps {
    listContent: ListContent,
    type?:string
  }
  
  const ListElement = ({ listContent,type }: ListElementProps) => {




  
    return (
      <Link to={ {pathname:`/Details/${type}/${listContent.index}`}} className={`${styles.linkje}`} >
        <div key={listContent.name} className={`${styles.listCard}`}>
          <div>{listContent.name}</div>
        </div>
      </Link>
    )
  }
  
  export default ListElement;