const Blog = require("./../models/blog");

async function addBlog(blogData) {
    let blog = await Blog.create(blogData);
    return blog;
}

async function searchBlogs(searchParam, paramData) {
    let res;
    if (searchParam === "author") {
        res = await Blog.find({ author: paramData });
    } else if (searchParam === "title") {
        res = await Blog.find({ title: paramData });
    } else if (searchParam === "tags") {
        res = await Blog.find({ tags: paramData });
    } else if (searchParam === "slug") {
        res = await Blog.findOne({ slug: paramData });
    } else if (searchParam === "id") {
        res = await Blog.findById(paramData);
    } else {
        res = await Blog.find().sort({ createdAt: "desc" });
    }
    return res;
}

async function deleteBlog(id) {
    let res = Blog.findByIdAndRemove(id);
    return res;
}

async function saveBLog(blog) {
    return blog.save();
}

module.exports = { addBlog, searchBlogs, deleteBlog, saveBLog };
