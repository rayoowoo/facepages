import React from 'react';
import {withRouter} from 'react-router-dom';


class ProfileFriendItem extends React.Component {

    goToFriend(friend) {
        return e => {
            e.preventDefault();
            this.props.history.push(`/user/${friend.id}`)
        }
    }

    render() {
        const {friend} = this.props;
        return (
            <div className="profile-friends-index-item">
                <div className="profile-friends-index-item-picture">
                    <img src={friend.photoUrl} alt="" />
                </div>
                <section>
                    <div className="profile-friends-index-item-label">
                        <span className="profile-friends-index-item-name" onClick={this.goToFriend(friend).bind(this)}>{friend.first_name} {friend.last_name}</span>
                        <span className="profile-friends-index-item-count">{friend.friend_ids.length} friends</span>
                    </div>
                </section>
            </div>
        )
    }
}



export default withRouter(ProfileFriendItem);