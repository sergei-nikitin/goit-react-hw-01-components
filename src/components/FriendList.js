import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';


export default function FriendList({items}) { 
    return (
        <div>
         <h2>Friends</h2>
            <ul class="friend-list">
                {items.map(item => (
                    <li key={item.id}>
                        
                        <FriendListItem
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

FriendList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};