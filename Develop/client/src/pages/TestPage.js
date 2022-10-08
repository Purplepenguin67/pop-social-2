import React, { useState } from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, GET_ME } from '../utils/queries';
import { ADD_POST } from '../utils/mutations';

const TestPage = () => {
    const { data: dataPosts } = useQuery(GET_POSTS);
    const { data: dataMe } = useQuery(GET_ME);
    const posts = dataPosts?.posts || [];
    const me = dataMe?.me || [];

    const [postText, setPostText] = useState('');

    const [addPost, { error }] = useMutation(ADD_POST);

    const handleTextInput = event => {
        setPostText(event.target.value);
    };

    const handleAddPost = async (text) => {
        // get token
        console.log(text);
        const { data } = await addPost({ variables: { postContent: text } });
        console.log(data)
    };

    console.log(me);

    if (!Object.keys(posts).length) {
        return <h2>LOADING...</h2>;
    }


    console.log(posts);
    return (
        <>
            <h1>TEST</h1>
            {Auth.loggedIn() && (
                <h2>logged in user: <span>{me.username}</span></h2>
            )}
            <div>
                <textarea type="text" name="postText" value={postText}
                    onChange={handleTextInput}
                />
                <button type="submit" value="Submit"
                    onClick={() => handleAddPost(postText)}
                >Submit</button>
            </div>
        </>
    );
}

// query me {
//     me {
//       _id
//       username
//       email
//       posts
//       comments
//       friends
//     }
//   }

export default TestPage;