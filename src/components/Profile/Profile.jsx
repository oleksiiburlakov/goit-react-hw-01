import css from './Profile.module.css';

export default function Profile({name, 
    tag, location, 
    image, stats}) {
        const { followers, views, likes } = stats;

    return (
    <>
    <div className={css.profile}>
      <div>
        <img className={css.image}
          src={image}
          alt="User avatar"
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    
      <ul className={css.stats}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
    </>)
    
}