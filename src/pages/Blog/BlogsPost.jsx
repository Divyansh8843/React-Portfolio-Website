function BlogsPost({ blog })
{
  return (
      <li className="blog-post-item">
          <a href="#">
              <figure className="blog-banner-box">
                  <img src={blog.image} alt="" loading="lazy"/>
              </figure>
              <div className="blog-content">
                  <div className="blog-meta">
                      <p className="blog-category">{blog.category}</p>
                      <span className="dot"></span>
                      <time dateTime="date">{blog.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{blog.title}</h3>
                  <p className="blog-text">{blog.description}</p>
              </div>
          </a>
      </li>
  )
}
export default BlogsPost