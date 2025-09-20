import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";

const SentimentsPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "John Doe", message: "Education is the key to success!" },
    {
      id: 2,
      author: "Alice",
      message:
        "Never give up on your dreams 🌟. Keep pushing forward no matter how hard things get.",
    },
    {
      id: 3,
      author: "Michael",
      message: "The future belongs to those who prepare today 🚀",
    },
  ]);
  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) {
      Swal.fire("Oops!", "Please enter a sentiment before posting!", "error");
      return;
    }

    const newSentiment = {
      id: posts.length + 1,
      author: "You",
      message: newPost,
    };

    setPosts([newSentiment, ...posts]);
    setNewPost("");

    Swal.fire("✨ Posted!", "Your sentiment has been shared!", "success");
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "#f5f8fa",
        overflow: "hidden",
      }}
    >
      {/* 📌 Header */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "15px 0",
          borderBottom: "1px solid #e6ecf0",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
          zIndex: 20,
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0, color: "#1da1f2", fontWeight: "bold" }}>
          Sentiment Space 
        </h1>
   {/* 🔍 Search Bar */}
      <div

      >
        <input
          type="text"
          // need to add the fa search icon
          placeholder='Search sentiments...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "95%",
            padding: "12px 15px",
            borderRadius: "30px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "12px",
            background: "#f5f8fa",
            margin: 5,
          }}
        />
      </div>

      </div>

   

      {/* Scrollable Feed */}
      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "600px",
          marginTop: "140px",
          marginBottom: "160px",
          overflowY: "auto",
          padding: "0 10px",
        }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "#fff",
                padding: "15px",
                borderRadius: "20px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.29)",
                transition: "transform 0.2s, box-shadow 0.2s",
                marginBottom: "15px",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0px 4px 12px rgba(0,0,0,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0px 2px 8px rgba(0,0,0,0.08)")
              }
            >
              <strong style={{ color: "#1da1f2", fontSize: "14px" }}>
                {post.author}
              </strong>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "15px",
                  color: "#333",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {post.message}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#555", textAlign: "center", marginTop: "20px" }}>
            No sentiments match your search 🔍
          </p>
        )}
      </div>

      {/* Sentiment Box */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "15px",
          border: "1px solidrgb(0, 0, 0)",
          borderRadius: "20px 20px 20px 20px",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.48)",
          position: "fixed",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <textarea
          placeholder="What are the views you would like to share or advise to the ZICOSU members?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          style={{
            width: "100%",
            height: "70px",
            padding: "12px",
            borderRadius: "15px",
            border: "1px solid #ddd",
            outline: "none",
            resize: "none",
            fontSize: "15px",
            background: "#f9f9f9",
            marginBottom: "10px",
          }}
        ></textarea>
        <button
          onClick={handlePost}
          style={{
            background: "#1da1f2",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
            float: "right",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0d8ddb")}
          onMouseLeave={(e) => (e.target.style.background = "#1da1f2")}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SentimentsPage;
