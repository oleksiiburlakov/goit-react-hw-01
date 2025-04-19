import css from './FriendList.module.css';
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div>
            <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendStatus, { [css.isOnline]: isOnline, [css.isOffline]: !isOnline })}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}