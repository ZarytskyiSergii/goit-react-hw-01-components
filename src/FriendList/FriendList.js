import PropTypes from "prop-types";
// import friends from "../friends.json";

export default function FriendList({ avatar, name, isOnline }) {
  return (
    <ul class="friend-list">
      <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
