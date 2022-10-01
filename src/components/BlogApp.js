import { useState } from "react";
import BlogForm from "./BlogForm";
import BlogEditing from "./BlogEditing";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "Why is Bill Murray running the cash register!",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perspiciatis adipisci odio magni assumenda sapiente. Dolore, dolorem sunt sapiente harum, cumque deleniti officiis fuga nobis ipsam id eos repellat corporis. Modi, asperiores inventore? Voluptatem, sed numquam praesentium incidunt delectus nobis officiis soluta? Id consectetur fugit incidunt illum, molestias non maxime explicabo dicta? Impedit, tempora aperiam doloribus itaque accusantium quidem quibusdam. Ipsum aliquid dignissimos ad blanditiis adipisci consectetur omnis id repudiandae possimus similique fugit laudantium fugiat quisquam asperiores iure, perferendis ipsa. Enim nostrum ut sequi? Quae obcaecati unde ratione aspernatur laboriosam! Aspernatur neque sed placeat nam quam veritatis itaque enim, hic aliquid! Sed vero animi harum. Officiis ratione tempora, distinctio ipsa sit optio pariatur quaerat magni! Porro illo atque dolorem quibusdam?",
  },
  {
    id: 2,
    title: "Who wants to go skydiving?",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus perspiciatis adipisci odio magni assumenda sapiente. Dolore, dolorem sunt sapiente harum, cumque deleniti officiis fuga nobis ipsam id eos repellat corporis. Modi, asperiores inventore? Voluptatem, sed numquam praesentium incidunt delectus nobis officiis soluta? Id consectetur fugit incidunt illum, molestias non maxime explicabo dicta? Impedit, tempora aperiam doloribus itaque accusantium quidem quibusdam.Ipsum aliquid dignissimos ad blanditiis adipisci consectetur omnis id repudiandae possimus similique fugit laudantium fugiat quisquam asperiores iure, perferendis ipsa. Enim nostrum ut sequi? Quae obcaecati unde ratione aspernatur laboriosam! Aspernatur neque sed placeat nam quam veritatis itaque enim, hic aliquid! Sed vero animi harum. Officiis ratione tempora, distinctio ipsa sit optio pariatur quaerat magni! Porro illo atque dolorem quibusdam? Accusamus beatae consequuntur nisi, ipsum nobis provident voluptate eius perferendis atque eos quaerat? Ipsum nemo fugiat, a nostrum ut tempora vitae molestiae possimus unde. Molestiae eaque dolore non qui quisquam! Quae officia voluptates explicabo a, quibusdam ab accusantium nemo tempore, quaerat porro numquam ipsam dolor cupiditate natus quia nobis nam totam aliquid quasi veniam dolorum, velit ratione. Quo, veritatis aliquid.Odio natus, earum quae voluptas iusto saepe laborum nobis aspernatur fugiat nam error exercitationem similique. Magnam ea illo voluptatibus nam. Quaerat nobis earum quidem officia deserunt dignissimos suscipit, tempora sed! Rerum asperiores cupiditate eum non, expedita blanditiis enim, nulla sunt a ipsum, harum officia? Possimus obcaecati itaque totam pariatur non! Deleniti molestiae recusandae quos aperiam sint molestias ducimus soluta! Nostrum. Quaerat eligendi similique doloribus nulla amet iste quod error in veritatis culpa. Labore harum qui quibusdam incidunt laboriosam porro. Quis corporis quidem, earum eius nemo expedita ea fugit rerum blanditiis. Ex vero unde qui. Quidem magni fugit veritatis pariatur adipisci quasi quia? Itaque laboriosam consequuntur architecto optio accusantium ullam rem quasi, recusandae voluptatibus molestiae quisquam rerum. Id quasi temporibus quidem.",
  },
];

function BlogApp() {
  const [blogList, setBlogList] = useState(INITIAL_POSTS);

  const addBlog = (newBlog) => {
    setBlogList([newBlog, ...blogList]);
  };

  const removeBlog = (id) => {
    const index = blogList.findIndex((blog) => blog.id === id);
    const updatedBlogList = [...blogList];
    updatedBlogList.splice(index, 1);
    setBlogList(updatedBlogList);
  };

  const updateBlog = (updatedBlog) => {
    const index = blogList.findIndex((blog) => blog.id === updatedBlog.id);
    const updatedBlogList = [...blogList];
    updatedBlogList[index] = updatedBlog;
    setBlogList(updatedBlogList);
  };

  const blogsHTML = blogList.map((blog) => (
    <BlogEditing
      key={blog.id}
      blog={blog}
      removeBlog={removeBlog}
      updateBlog={updateBlog}
    />
  ));

  return (
    <div className="row">
      <BlogForm addBlog={addBlog} />
      <ul className="col-md-6 blog-list">{blogsHTML}</ul>
    </div>
  );
}

export default BlogApp;