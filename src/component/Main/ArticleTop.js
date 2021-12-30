import styles from './ArticleTop.module.css';

const ArticleTop = ({title}) => {
    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default ArticleTop;