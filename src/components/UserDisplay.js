import React from 'react';
import {connect} from 'react-redux';
import './styles/UserDisplay.css';

class UserDisplay extends React.Component {

    render() {
        const { user } = this.props;
        console.log(user)
        return(
            <div className="container user-container">
                <div className="card card-box">
                    <img src={user.avatar_url} className="card-img-top card-img" alt="avatar"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        <h6 className="user-date">{user.created_at}</h6>
                        <ul className="list-group list-group-flush description-box">
                            <li className="list-group-item">Followers: {user.followers}</li>
                            <li className="list-group-item">Following: {user.following}</li>
                            <li className="list-group-item">Public repos: {user.public_repos}</li>
                        </ul>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-block card-btn">See profile</a>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
    };
  };

export default connect(mapStateToProps) (UserDisplay);
