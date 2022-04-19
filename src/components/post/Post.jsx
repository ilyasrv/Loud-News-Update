import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
  return (
    <>
      <div className="liney">
        <div className="header-txt-title">Latest Posts</div>
      </div>
      <div className="post">
        <img className="postImg" src={img} alt="" />

        <div className="postInfo">
          <div className="postdatatime">
            <span className="postDate">23 Sept</span>

            <div className="postTime">
              <img
                className="time-icon"
                src="https://github.com/ilyasrv/Loud-News/blob/master1/assets/images/time-icon.png?raw=true"
              />
              <span>1 hour ago</span>
            </div>
          </div>

          <span className="postTitle">
            <Link to="/post/abc" className="header-txt">
              Heading of article 24px
            </Link>
          </span>
          <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}
