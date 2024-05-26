import styled from "styled-components";
import PostBox from "../../components/PostBox";

function Home() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  return (
    <Wrapper>
    
      {posts.map((post, index) => (
        <PostBox
          key={index}
          postId={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
  background-color: #e0f7fa; /* 연한 하늘색 */
`;
