import React from "react";
import styled from "styled-components";
import { transparentGreen } from "./StyledComponents";

const Post = ({ title, description, imageUrl, link }) => {
  return (
    <PostContainer>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  margin: 10px;
  padding: 20px;
  //border: 0.01px solid #009246;
  box-shadow: 0 10px 10px ${transparentGreen};(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content within the anchor tag */
  }

  img {
    margin-top: 10px;
    max-width: auto;
    height: 120px;
    border-radius: 8px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
    text-align: center; /* Center the text horizontally */
  }

  p {
    font-size: 1rem;
    text-align: center; /* Center the text within the paragraph */
  }
`;

export default Post;
