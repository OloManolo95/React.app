import styles from './ListForm.module.scss';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addList } from '../../redux/listsRedux';
import TextInput from "../TextInput/TextInput";
import Button from '../Button/Button';

const ListForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }))
        setTitle('');
        setDescription('');
    }

    return(
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title:</label>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label>description</label>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>ADD LIST</Button>
        </form>
    )

}
export default ListForm;