import React, { useState } from 'react';
import Auth from '../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { GET_POSTS, GET_ME } from '../utils/queries';
import { REMOVE_POST, REMOVE_COMMENT } from '../utils/mutations';
import { ADD_POST } from '../utils/mutations';

const Profile = () => {


    const { data: dataPosts } = useQuery(GET_POSTS);
    const { data: dataMe } = useQuery(GET_ME);
    const posts = dataPosts?.posts || [];
    const me = dataMe?.me || [];

    const [removePost, { error: errorPost }] = useMutation(REMOVE_POST);
    const [removeComment, { error: errorComment }] = useMutation(REMOVE_COMMENT);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleRemovePost = async event => {
        // get token
        const postId = event.target.getAttribute("postid");
        const { data } = await removePost({ variables: { postId: postId } });
        console.log(data)
        refreshPage();
    };

    console.log(me);

    if (!Object.keys(posts).length) {
        return <h2>LOADING...</h2>;
    }

    const profileUsername = me.username;
    const profilePosts = posts.filter(function (arr) {
        return arr.username == profileUsername;
    });

    const postStyle = {
        border: "2px solid green"
    }

    console.log(profilePosts);
    return (
        <>
            <div>
                <h1>Username: </h1>
                <h1>{profileUsername}</h1>
                <h2>random image generator</h2>
            </div>
            <div>
                <h1>Your Posts: </h1>
                {profilePosts.map((post) => {
                    return (
                        <div style={postStyle}>
                            <h1>{post.postContent}</h1>
                            <h2>Upvotes: <span>{post.upvotes}</span></h2>
                            <button postid={post._id}
                                onClick={handleRemovePost}>🗑</button>
                        </div>
                    );
                })}
            </div>
            {/* {Auth.loggedIn() && (
                <h2>logged in user: <span>{me.username}</span></h2>
            )}
            <div>
                <textarea type="text" name="postText" value={postText}
                    onChange={handleTextInput}
                />
                <button type="submit" value="Submit"
                    onClick={() => handleAddPost(postText)}
                >Submit</button>
            </div> */}
        </>
    );
}

export default Profile;