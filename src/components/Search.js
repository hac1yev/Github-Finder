import axios from 'axios';
import React,{useState} from 'react';
import { searchProfiles } from '../redux/actions/profilActions';
import { useDispatch,useSelector } from 'react-redux';

const Search = () => {
    const profiles = useSelector((state) => state.allProfiles.profiles); 
    const [keyword,setKeyword] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .catch((err) => {
            console.log("Err: ", err);
        })
        dispatch(searchProfiles(response.data.items));
        setKeyword("");
    }
    console.log(profiles);
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-md-12">
                <form onSubmit = {(e) => handleSubmit(e)}>
                    <div className="input-group">
                        <input type="text" onChange={(e) => handleChange(e)} value={keyword} className="form-control" placeholder='Search profiles'/>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </form>    
                </div>
                <button type="button" className="btn btn-secondary btn-sm btn-block mt-2">Clear All</button>
            </div>
        </div>
    )
}

export default Search
