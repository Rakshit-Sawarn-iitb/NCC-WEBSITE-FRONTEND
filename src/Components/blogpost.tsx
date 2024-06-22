import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./blogcard";
import * as React from "react";

interface Props {
  theme: string;
}

interface BlogProps {
  image: string;
  title: string;
  display_content: string;
  main_content: string;
  likes: number;
}

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function BlogPost({ theme }: Props) {
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000"; // Adjust colors as needed
  }, [theme]);
  const [blogData, setBlogData] = useState<BlogProps[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/active/blogs")
      .then((res) => {
        console.log(res);
        setBlogData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1
          className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
        >
          BLOGS BY NCC IITB
        </h1>
        <div className={theme === "light" ? "line-light" : "line-dark"}></div>
      </div>
      <div className="d-flex align-items-center justify-content-around flex-wrap">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            display_content={blog.display_content}
            likes={blog.likes}
            main_content={blog.main_content}
            title={blog.title}
            theme={theme}
          />
        ))}
      </div>
    </>
  );
}

export default BlogPost;
