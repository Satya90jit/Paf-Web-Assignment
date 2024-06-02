import { CircularProgress, Collapse } from "@mui/material";
import { useState } from "react";

const Comment = () => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const isCommentValid = comment.trim().length > 5; // not take blank space

  const handleComment = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: comment,
          postId: 3,
          userId: 5,
        }),
      });
      if (res?.ok === true) {
        setLoading(false);
        console.log("comment successful....");
      } else {
        console.log("something went wring");
        setLoading(false);
      }
      console.log("data--->", res);
    } catch (err) {
      console.log("Error posting comment:", err);
    } finally {
      setLoading(false);
      setComment("");
    }
  };

  return (
    <section
      className={`main-container my-26 mb-20 bg-gray-100 rounded-xl ${
        !open ? "shadow-lg" : ""
      } `}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`bg-gray-100 p-4 cursor-pointer`}
      >
        {!open ? (
          <p>Write Comments</p>
        ) : (
          <div className="flex gap-2 items-center">
            <span className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
              S
            </span>
            satyajit sahu
          </div>
        )}
      </div>
      <Collapse in={open}>
        <div className="bg-gray-100 p-4">
          <textarea
            id="commentId"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="write comments.."
            className="p-5 w-full min-h-[10rem] outline-none bg-gray-200 border border-gray-300 rounded-xl"
          />
          <div className="flex justify-end gap-4 mt-2">
            <button
              className="bg-red-300 px-6 py-1 rounded-2xl"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              onClick={handleComment}
              className={`bg-orange-300 px-6 py-1 rounded-2xl  common-transition ${
                !isCommentValid
                  ? "opacity-50 cursor-not-allowed hover:opacity-60"
                  : ""
              }`}
              disabled={!isCommentValid}
            >
              {loading ? (
                <div>
                  <CircularProgress size={20} color={"warning"} /> adding
                </div>
              ) : (
                "post"
              )}
            </button>
          </div>
        </div>
      </Collapse>
    </section>
  );
};

export default Comment;
