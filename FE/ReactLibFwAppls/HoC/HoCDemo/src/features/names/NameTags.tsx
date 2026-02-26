import styles from './NameTags.module.css'

export const NameTags = (props) => {
    return (
        <div className={`${styles['name-tags']}`}>
            Name is <span className={`${styles['name-tags-name']} ${props.className || ''}`}>{props.name}</span>
        </div>
    )
}

