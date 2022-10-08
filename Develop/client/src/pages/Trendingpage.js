import React, { useState } from 'react';
// import Auth from '../utils/auth';
import { Nav, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useQuery, useMutation } from '@apollo/client';
// import { GET_POSTS, GET_ME } from '../utils/queries';
// import { ADD_POST } from '../utils/mutations';

const Trending = () => {
    // const { data: dataPosts } = useQuery(GET_POSTS);
    // const { data: dataMe } = useQuery(GET_ME);
    // const posts = dataPosts?.posts || [];
    // const me = dataMe?.me || [];

    // const [postText, setPostText] = useState('');

    // const [addPost, { error }] = useMutation(ADD_POST);

    // const handleTextInput = event => {
    //     setPostText(event.target.value);
    // };

    // const handleAddPost = async (text) => {
    //     // get token
    //     console.log(text);
    //     const { data } = await addPost({ variables: { postContent: text } });
    //     console.log(data)
    // };

    // console.log(me);

    // if (!Object.keys(posts).length) {
    //     return <h2>LOADING...</h2>;
    // }


    // console.log(posts);
    // return (
    //     <>
    //         <h1>TEST</h1>
    //         {Auth.loggedIn() && (
    //             <h2>logged in user: <span>{me.username}</span></h2>
    //         )}
    //         <div>
    //             <textarea type="text" name="postText" value={postText}
    //                 onChange={handleTextInput}
    //             />
    //             <button type="submit" value="Submit"
    //                 onClick={() => handleAddPost(postText)}
    //             >Submit</button>
    //         </div>
    //     </>
    // );

      const homeHeader = { fontFamily: 'Shrikhand', color:'#61769D', fontSize:35};
      const trendingHeader = { fontFamily: 'Shrikhand', color:'#FFA3BB', fontSize:35, text:'center'};
        return (
          // here starts the left side of the Navbar
          <div>
             <div class="row">
            <div class="col-md-2">
              <nav className="navbar navbar-expand-lg navbar-light d-grid gap-2 mt-3 ml-3">
                  <Nav.Link id='homeNavbar' className="navbar-brand" href="/home">
                        Home
                  </Nav.Link>
                  <Nav.Link id='homeNavbar' className="navbar-brand" href="/profile">
                        Profile
                  </Nav.Link>
                  <Nav.Link id='homeNavbar' className="navbar-brand" href="/friends">
                        Friends
                  </Nav.Link>
                  <Nav.Link id='homeNavbar' className="navbar-brand" href="/trending">
                        Trending
                  </Nav.Link>
                  <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
         aria-label="Toggle navigation"
                                   >
                  <span className="navbar-toggler-icon"></span>
                   </button>
            </nav>
            </div>
            {/* here starts the center content portion. The User's social timeline */}
            <div class="row col-lg-6 mx-auto">
            <div id="status" class="column h-100">
            <Form.Group className="mb-3 g-4">
            <Form.Label style={homeHeader}>Trending...</Form.Label>
            </Form.Group>
            <div className="d-grid gap-3">
                <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                <div style={{backgroundColor:'#efe8ad'}} class="card h-100">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
                </div>
            </div>
            </div>
    
            {/* Here starts the Trending section */}
            <div id="trending" class="row col-md-2 ">
            <div style={{backgroundColor:'#AADD96'}}className="square rounded-6 text-center">
            <Form.Label className="mx-auto" style={trendingHeader}>Friends</Form.Label>
            <div></div>
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </div>
            </div>
            </div>
            </div>
        );
    };
    
    export default Trending;
