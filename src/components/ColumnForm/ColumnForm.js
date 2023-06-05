import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ColumnForm = props => {

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    };

    const dispatch = useDispatch();

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon:</span>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>ADD COLUMN</Button>
        </form>
    );    
};

export default ColumnForm;
