import styles from './List.module.scss'

const List = () => {

    return (
        <div>
            <header className={styles.header}>
               <h2 className={styles.title}>Things to do <span>soon</span></h2>
               <p className={styles.description}>Interesting things I want to check out</p>
            </header>
            <section className={styles.columns}>
                <article>
                  <h2 className="title">Books</h2>
                </article>
                <article>
                  <h2 className="title">Movies</h2>
                </article>
                <article>
                  <h2 className="title">Games</h2>
                </article>
            </section>
        </div>
    );
};

export default List;