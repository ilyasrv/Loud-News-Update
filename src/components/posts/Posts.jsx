import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/post1.png?raw=true" />
      <Post img="https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/post2.png?raw=true" />
      <Post img="https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/post3.png?raw=true" />
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    </div>
  );
}
