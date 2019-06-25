import React, { Component, Fragment } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        console.log(this.props.User);
    }

    static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    }

    render() {
        const {name, avatar_url, location,hireable, bio, blog, login, html_url, followers, following, public_reps, public_gist} = this.props.user;
        const {loading} = this.props;
        if (loading){
            return <Spinner/ >;
        }
        return (
            <Fragment>
            <Link to='/' className ='btn btn-light' >Back to Search</Link>
            Hirable: {''}
            {hireable ? <i className="fas fa-check text-success"/> : <i className = 'fas fa-times-circle text-danger' /> }
            </Fragment>
        )
    }
}

export default User
