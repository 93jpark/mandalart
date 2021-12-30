import styles from './BoxContainer.module.css';

const BoxContainer = ( {children, boxId, clicked} ) => {
    const getBoxId = () => {
        clicked(boxId);
    }
    return (
        <div onClick={getBoxId} className={styles.container}>
            {children}
        </div>
    )
}

export default BoxContainer;