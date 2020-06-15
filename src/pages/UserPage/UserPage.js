import React from 'react';
import UserService from "../../services/UserService/UserService";
import PropTypes from 'prop-types';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };

        this.userService = new UserService();
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        if (id > 0) {
            this.userService.getUser(id).then(r => {
                this.setState({user: r});
            })
        }
    }

    renderUser = () => {
        const {user} = this.state;
        if (Object.entries(user).length > 0) {
            return (
                <>
                    <h2>User:</h2>
                    <h3>Name: ${user.name}</h3>
                    <p>UserName: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                </>
            );
        }
    };

    render() {
        return (
            <div>
                {this.renderUser()}
            </div>
        );
    }
}

UserPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    })
}

export default UserPage;
