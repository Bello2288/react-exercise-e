import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const INITIAL_STATE = {
  title: "",
  body: "",
};

function BlogForm(props) {
  const [blog, setBlog] = useState(INITIAL_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBlog(blog);
    setBlog(INITIAL_STATE);
  };

  const { title, body } = blog;

  return (
    <Form onSubmit={handleSubmit} className="col-md-6 form-container">
      <h2>Add a new blog post</h2>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label className="title">Title</Form.Label>
        <Form.Control
          className="title-box"
          type="text"
          placeholder="Enter title.."
          name="title"
          value={title}
          onChange={(e) =>
            setBlog({ ...blog, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="body">
        <Form.Label className="blog">Blog Body</Form.Label>
        <Form.Control 
          className="blog-body" 
          as="textarea"
          placeholder="Type your blog here.."
          rows={10}
          name="body"
          value={body}
          onChange={(e) =>
            setBlog({ ...blog, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <Button className="submit-btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm;