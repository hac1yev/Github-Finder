import React from 'react';
import { useSelector } from 'react-redux';

const ProfilComponent = () => {
    const profiles = useSelector((state) => state.allProfiles.profiles);
    const GithubProfiles = profiles.map((profile) => {
        return (
            <div className='col-md-3 mt-3' key={profile.id}>
                <div className="card ">
                    <div className="image">
                        <img src={profile.avatar_url} alt={profile.login} className="card-img"/>
                    </div>
                    <div className="card-body">
                        <h3>{profile.login}</h3>
                        <a href={profile.html_url} className='btn btn-primary'>Go Profile</a>
                    </div>
                </div>
            </div> 
        )
    })
        
    return (
          <>
            {GithubProfiles}
          </>
    )
}

export default ProfilComponent
