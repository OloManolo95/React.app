import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { getFavoriteCard } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCard);

  if (favoriteCards.length === 0) {
    return(
      <section className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.noCards}>No favorites yet...</p>
      </section>
    )
  }
  return(
    <section className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.card}>
          {favoriteCards.map((card) =>
          (<Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />)
          )}
        </ul>
      </div>
    </section>
  );
};


export default Favorite;