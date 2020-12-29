import PropTypes from 'prop-types';
import styles from './FriendsListItem.module.css';


export default function FriendsListItem({avatar, name, isOnline}) {
    const statusFriendClasses = [
        styles.status,
        isOnline? styles.online: styles.ofline,
    ];
    
    return (
        <li className={styles.item}>
            <span className={statusFriendClasses.join(' ')}>{isOnline}</span>
            <img
                className={styles.avatar}
                src={avatar}
                alt="Аватар друга"
                width="48" />
            <p className={styles.name}>{name}</p>
</li>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

