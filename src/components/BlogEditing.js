import { useState } from "react";

function BlogEditing({ blog, ...props }) {
  const [isEditing, setEditing] = useState(false);
  const [editedBlog, setEditedBlog] = useState({ ...blog });

  const cancelEdit = () => {
    setEditing(false);
    setEditedBlog({ ...blog });
  };

  const handleSave = () => {
    props.updateBlog(editedBlog);
    setEditing(false); 
  };

  const previewTemplate = (
    <li className="main-blog-title">
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button className="edit-btn" type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
      <button className="delete-btn" type="button" onClick={() => props.removeBlog(blog.id)}>
        Delete
      </button>
    </li>
  );

  const editTemplate = (
    <li className="edit-box">
      <label className="edit-title">Title</label>
      <input
        type="text"
        name="title"
        value={editedBlog.title}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <label className="edit-body">Body</label>
      <textarea
        rows={10}
        cols={40}
        name="body"
        value={editedBlog.body}
        onChange={(e) =>
          setEditedBlog({ ...editedBlog, [e.target.name]: e.target.value })
        }
      />
      <div className="buttons-box">
        <button className="save-btn" type="button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </li>
  );

  return <>{isEditing ? editTemplate : previewTemplate} </>;
}

export default BlogEditing;