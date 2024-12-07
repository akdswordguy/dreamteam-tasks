"use client";
import React, { useState } from "react";
import styles from "./blog.module.css";

const Blog = ({ description }) => {
  const [likes, setLikes] = useState(0); 
  const [showCommentBox, setShowCommentBox] = useState(false); 
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(""); 


  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };


  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment(""); 
    }
  };

  return (
    <div className={styles.blog}>
      <div className={styles.blogContent}>
        <p className={styles.blogDescription}>{description}</p>
        <div className={styles.buttons}>
          <button className={styles.likeButton} onClick={handleLike}>
            👍 Like {likes > 0 && `(${likes})`}
          </button>
          <button className={styles.commentButton} onClick={() => setShowCommentBox(!showCommentBox)} >
            💬 Comment
          </button>
        </div>
        {showCommentBox && (
          <div className={styles.commentSection}>
            <input
              type="text"
              className={styles.commentInput}
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className={styles.submitButton} onClick={handleCommentSubmit}>
              Post
            </button>
          </div>
        )}
        <div className={styles.commentList}>
          {comments.map((comment, index) => (
            <p key={index} className={styles.comment}>
              {comment}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
