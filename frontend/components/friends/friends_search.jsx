import React from 'react'
import SearchResults from '../nav/search_results'
import { connect } from 'react-redux';
import { fetchFriends } from '../../actions/user_actions'

class FriendSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
        this.debounce = this.debounce.bind(this);
    }

    search(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
        this.debounce(this.props.fetchUsers, 1000)(this.state.search, this.props.currentUserId)
    }

    clear(e) {
        this.setState({ search: "" })
    }


    debounce(func, interval) {
        let test;
        return (...args) => {
            clearTimeout(test);
            test = setTimeout(() => func(...args), interval);
        }
    }

    focus(e) {
        e.target.classList.add("search-focused");
    }

    blur(e) {
        e.target.classList.remove("search-focused")
    }

    render() {
        const { users = [] } = this.props;
        return (
            <>
                <input id="search" type="text" className="search friend-search" onBlur={this.props.toggleSearchBtn} onFocus={this.focus.bind(this)} onChange={this.search.bind(this)} placeholder="Who are you with?" value={this.state.search} />
                <SearchResults addTag={this.props.addTag} type={this.props.type} users={users} clear={this.clear.bind(this)} blur={this.blur.bind(this)} search={this.state.search} />
            </>
        )
    }
}

const msp = state => ({
    users: Object.values(state.entities.users),
    type: "friends",
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    fetchUsers: (string, id) => dispatch(fetchFriends(string, id))
})

export default connect(msp, mdp)(FriendSearch)