import React, {useState} from 'react'

const  Search = () => {
    const [text,setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }

        return (
            <div>
                <form action="form"></form>
                <input type="text" name='text' placerholder='Search Users..' value={text} onChange={onChange}/>
                <input type="submit" value="search" className='btn btn-dark btn-block'/>
            </div>
        )
    
        
}

// const state = {
//     text:'', 
// }





export default Search
