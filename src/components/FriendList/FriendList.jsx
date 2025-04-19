import css from './FriendList.module.css';
import clsx from "clsx";
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={css.friendCard}>
                    <FriendListItem 
                        avatar={friend.avatar} 
                        name={friend.name} 
                        isOnline={friend.isOnline} 
                    />
                </li>
            ))}
        </ul>
    );
}