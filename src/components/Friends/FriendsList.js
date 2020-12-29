import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import styles from './FriendsList.module.css';

export default function FriendsList({items}) { 
    return (
        <div className={styles.container}>
         <h2>Friends</h2>
            <ul className={styles.friendList}>
                {items.map(item => (
                    <li key={item.id}>
                        
                        <FriendsListItem
                            avatar={item.avatar}
                            name={item.name}
                            isOnline={item.isOnline}
                        />
                    </li>
                ))}
            </ul>
        
    </div>
    )
}

// export default function FriendList({ title, children }) { 
//     return (
//         <div>
//         {title && <h2>{title}</h2>}
//             <ul class="friend-list"></ul>
//         {children}
//     </div>
//     )
// }

FriendsList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};