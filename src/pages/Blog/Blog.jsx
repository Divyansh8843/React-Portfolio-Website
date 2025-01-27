import { useEffect, useState } from "react";
import BlogsPost from "./BlogsPost";
import "./Blogs.css"
export default function Blog ()
{
    const [blogs, setBlogs] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [postperpage] = useState(4); // post per page
    useEffect(() =>
    {
        fetch("blogs.json")
          .then((res) => res.json())
          .then((data) => {
              setBlogs(data);
          });
    }, [])
    // pagination
    const indexoflastPost = currPage * postperpage;
    const indexoffirstPost = indexoflastPost - postperpage;
    const currentposts = blogs.slice(indexoffirstPost, indexoflastPost);
    const paginate = (pagenumber) =>
    {
        setCurrPage(pagenumber);
    }
    return (
      <section>
        <h2 className="h2 article-title">Blogs</h2>
        <div className="blog-posts">
          <ul className="blog-posts-list">
            {currentposts.map((post, index) => (
              <BlogsPost key={index} blog={post} />
            ))}
          </ul>
        </div>
        {/* pagination */}
        <nav>
          <div className="pagination">
            <li className={`page-items ${currPage === 1 ? "disabled" : ""}`}>
              <button
                onClick={() => currPage > 1 && paginate(currPage - 1)}
                className="page-link"
                disabled={currPage === 1} 
              >
                Previous
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(blogs.length / postperpage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currPage === index + 1 ? "active" : ""}`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-items ${
                currPage === Math.ceil(blogs.length / postperpage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                onClick={() =>
                  currPage < Math.ceil(blogs.length / postperpage) &&
                  paginate(currPage + 1)
                }
                className="page-link"
                disabled={currPage === Math.ceil(blogs.length / postperpage)} 
              >
                Next
              </button>
            </li>
          </div>
        </nav>
      </section>
    );
}