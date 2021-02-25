import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.css';

const Profile = ({name, tag, location, avatar, stats}) => {
    console.log(name, tag, location, avatar, stats);
    const { followers, views, likes } = stats;
    return (<>
        <div className={styles.profile}>
            <div className={description}>
                <img
                    src={avatar}
                    alt={name}
                    class="avatar"
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    </>)
}

export default Profile;

Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}