import {useParams} from 'react-router-dom'

const data = {
    someone: {
        name: 'John Doe',
        description: 'React Developer',
    },
    gildong: {
        name: 'Hong Gildong',
        description: 'the Hero of a classic novel, Hong Gil-Dong.',
    },   
}

const Profile = () => {
    const params = useParams();
    //debugger
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>    
            ) : ( <p>존재하지 않는 프로필입니다.</p> )}
        </div>
    )
}

export default Profile