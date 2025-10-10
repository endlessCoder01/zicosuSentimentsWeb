import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const SentimentsPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "John Doe",
      message: "Education is the key to success!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      author: "Alice",
      message:
        "Never give up on your dreams 🌟 Keep pushing forward no matter how hard things get.",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      author: "Michael",
      message: "The future belongs to those who prepare today 🚀",
      avatar: "https://i.pravatar.cc/150?img=3",
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
      avatar: "https://i.pravatar.cc/150?img=5",
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
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        background: "#f2f5f9",
        padding: "10px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "20px",
          borderBottom: "1px solid #e6ecf0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#1da1f2",
            fontWeight: "700",
            fontSize: "22px",
            letterSpacing: "0.5px",
          }}
        >
          Sentiment Space 💭
        </h1>

        <div
          style={{
            marginTop: "12px",
            position: "relative",
            width: "90%",
            marginInline: "auto",
          }}
        >
          <FaSearch
            style={{
              position: "absolute",
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
          />
          <input
            type="text"
            placeholder="Search sentiments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 15px 12px 40px",
              borderRadius: "30px",
              border: "1px solid #ddd",
              outline: "none",
              fontSize: "13px",
              background: "#f5f8fa",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#1da1f2")}
            onBlur={(e) => (e.target.style.borderColor = "#ddd")}
          />
        </div>
      </div>

      {/* Feed */}
      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "600px",
          overflowY: "auto",
          padding: "20px",
          marginBottom: "90px",
        }}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "#fff",
                padding: "18px 20px",
                borderRadius: "18px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s, box-shadow 0.2s",
                marginBottom: "15px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0, 0, 0, 0.08)";
              }}
            >
              {/* Profile Picture */}
              <img
                src={post.avatar}
                alt={post.author}
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                }}
              />

              {/* Message */}
              <div>
                <strong style={{ color: "#1da1f2", fontSize: "14px" }}>
                  {post.author}
                </strong>
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "15px",
                    color: "#333",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {post.message}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p
            style={{
              color: "#777",
              textAlign: "center",
              marginTop: "40px",
              fontSize: "15px",
            }}
          >
            No sentiments match your search 🔍
          </p>
        )}
      </div>

      {/* Post Box */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "15px 20px",
          borderTop: "1px solid #ddd",
          boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <textarea
          placeholder="Share your thoughts, advice or motivation for ZICOSU members..."
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
            fontSize: "14px",
            background: "#f9f9f9",
            marginBottom: "10px",
            transition: "border 0.3s ease",
          }}
          onFocus={(e) => (e.target.style.border = "1px solid #1da1f2")}
          onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
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
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginLeft: "auto",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0c8ae4")}
          onMouseLeave={(e) => (e.target.style.background = "#1da1f2")}
        >
          <FaPaperPlane />
          Send
        </button>
      </div>
    </div>
  );
};

export default SentimentsPage;
