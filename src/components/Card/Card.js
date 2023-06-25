import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch =  useDispatch();

    const favoriteHandler = () => {
        dispatch(toggleFavorite( props.cardId ));
    };

    const removeHandler = () => {
        console.log('hello');
        dispatch(removeCard( props.cardId ));
    }

    return(
        <li className={styles.card}>
            {props.title}
            <div className={styles.buttons}>
                <button className={styles.actionButton} onClick={favoriteHandler}>
                    <i className={clsx('fa', 'fa-star-o', styles.favoriteIcon, props.isFavorite && styles.active)}></i>
                </button>
                <button className={styles.actionButton} onClick={removeHandler}>
                    <i className={clsx('fa fa-trash', styles.removeButton)}></i>
                </button>
            </div>
        </li>
    )
}

export default Card;