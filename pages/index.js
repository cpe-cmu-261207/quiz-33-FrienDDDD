import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";
import Reply from "../components/Reply";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        <PostOwner
          like={1000}
          comment="มึงทำไปทำเหี้ยไร ทำเพื่อไร"
          owner="Kasiyot Hanphairot 640610621"
          img="/profileImages/redsensei.jpg"
        />
        {comments.map((x, i) => {
          return (
            <Comment
              key={i}
              name={x.username}
              like={x.likeNum}
              imgpath={x.userImagePath}
              comment={x.commentText}
              replie={x.replies}
            />
          );
        })}
      </div>
    </div>
  );
}
