import styles from './Lists.module.scss';
import ListForm from '../ListForm/ListForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSearchString } from '../../redux/searchStringRedux';
import { getAllLists } from '../../redux/listsRedux';

const Lists = () => {

    const lists = useSelector(getAllLists);

    const dispatch =useDispatch();

    const resetSearchPhrase = () => {
        dispatch(updateSearchString(''));
    }

    return (
        <section className={styles.lists}>
          <h2 className={styles.heading}>Browse lists</h2>
          {lists.map(list => (
            <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink} onClick={resetSearchPhrase}>
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </Link>
          ))}
          <ListForm />
        </section>
      );
}

export default Lists;