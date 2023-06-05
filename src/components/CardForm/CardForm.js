import styles from './CardForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';



const CardForm = ({ columnId }) => {

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ columnId, title }))
        //dispatch({ type: 'ADD_CARD', payload: { columnId, title } });
        //props.action({ title: title }, props.columnId);
        setTitle('');
    };


    return(
        <form className={styles.cardForm} onSubmit={handleSubmit}>
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <Button>ADD CARD</Button>
    </form>

    );
};

export default CardForm;