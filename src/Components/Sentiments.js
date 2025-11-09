import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaSearch, FaPaperPlane } from "react-icons/fa";
import { APIURL } from "../services/config";
import userImage from "../Assets/theTeam/user.png"

const API_URL = `${APIURL}/sentiments`;

const SentimentsPage = () => {
  const [userInfo, setUserInfo] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    getUserLocal();
  }, []);

  useEffect(() => {
    if (token) {
      fetchSentiments();
    }

    const interval = setInterval(() => {
      fetchSentiments();
    }, 3000);

    return () => clearInterval(interval);
  }, [token]);

  const getUserLocal = async () => {
    const data = localStorage.getItem("activeUser");
    const user = await JSON.parse(data);
    setToken(user.token.token);
    setUserInfo(user.token.userDetails.user);
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Advisor",
      message: "Hey Buddie make a sentiment post it is fun!",
      avatar: "https://i.pravatar.cc/150?img=1",
    }
  ]);
  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");

  // Fetch sentiments
  const fetchSentiments = async () => {
    try {
      const res = await fetch(`${API_URL}/with_full_detail`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      

      if (!res.ok) throw new Error("Failed to fetch sentiments");
      const data = await res.json();
      console.log("res", data);

      const formatted = data.map((item) => ({
        id: item.sentiment_id,
        author:
          item.reg_number === userInfo.reg_number
            ? "You"
            : `${item.name} ${item.surname}`,
        message: item.sentiment,
        avatar: item.profile_url
          ? `${APIURL}/${item.profile_url.replace(/\\/g, "/")}`
          : userImage,
      }));

      setPosts(formatted);
    } catch (error) {
      console.error("Error fetching sentiments:", error);
      Swal.fire(
        "Error",
        "Could not load sentiments. Please try again.",
        "error"
      );
    }
  };

  // Post new sentiment
  const postSentiment = async (sentimentText) => {
    try {
      const payload = {
        reg_number: "B220946B",
        sentiment: sentimentText,
      };

      const res = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to post sentiment");
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error posting sentiment:", error);
      Swal.fire("Error", "Could not post sentiment. Try again.", "error");
      return null;
    }
  };

  const handlePost = async () => {
    if (!newPost.trim()) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "warning",
        text: "Oops! Please enter a sentiment before posting!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      return;
    }

    const newSentimentData = await postSentiment(newPost);
    if (newSentimentData) {
      const newSentiment = {
        id: newSentimentData.sentiment_id || Date.now(),
        author: "You",
        message: newPost,
        avatar: "https://i.pravatar.cc/150?img=5",
      };

      setPosts([newSentiment, ...posts]);
      setNewPost("");

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Your sentiment has been shared!",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }
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
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          flexShrink: 0,
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "20px",
          borderBottom: "1px solid #e6ecf0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          borderRadius: "0 0 20px 20px",
          textAlign: "center",
          zIndex: 10,
          position: "relative",
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
          background: "transparent",
          scrollBehavior: "smooth",
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
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
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
          flexShrink: 0,
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
