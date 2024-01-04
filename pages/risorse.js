import React from "react";
import Post from "../components/Post";
import { posts } from "../components/risorseData";

import styled from "styled-components";

const Risorse = () => {
  return (
    <>
      <h1>Risorse</h1>
      <PostsPage>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </PostsPage>
    </>
  );
};

export default Risorse;

const PostsPage = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
