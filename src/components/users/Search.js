import React from 'react'

class Search extends React.Component {
    //  [text,setText] = useState('');
    

     onChange = e => this.setState({[e.target.name]:e.target.value});
     onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});
    };
    
        render(){
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <input type="text" name='text' placerholder='Search Users..' value={this.text} onChange={this.onChange}/>
                <input type="submit" value="search" className='btn btn-dark btn-block'/>
                </form>
            </div>
        )    
     }
}

export default Search
