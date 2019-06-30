import React from 'react';
import {connect} from 'react-redux';

class UserDisplay extends React.Component {

    render() {
        const { user } = this.props;
        console.log(user)
        return(
            <div className="container">
                <div className="card">
                    <img src={user.avatar_url} className="card-img-top" alt="avatar"/>
                    <div className="card-body">
                        <h5 className="card-title">{user.login}</h5>
                        <h6>{user.created_at}</h6>
                        <p className="card-text">Followers: {user.followers}</p>
                        <p className="card-text">Following: {user.following}</p>
                        <p className="card-text">Public repos: {user.public_repos}</p>
                        <a href={user.html_url} className="btn btn-primary">See profile</a>
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
