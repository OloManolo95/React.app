import styles from './List.module.scss'
import Column from '../Column/Column.js'
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList} from '../../redux/store';
import { getListById } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {

    //const columns = useSelector(state => state.columns);
    const { listId } = useParams();

    const listData = useSelector(state => getListById(state, listId));

    const columns = useSelector(state => getColumnsByList(state, listId));

    return (
        <div className={styles.list}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              { listData.title }
            </h2>
          </header>
          <p className={styles.description}>
            { listData.description }
          </p>
          <section className={styles.columns}>
            {columns.map(column =>
              <Column
                key={column.id}
                {...column}  />
            )}
          </section>
          <ColumnForm listId = { listData.id } />
        </div>
      );

};

export default List;