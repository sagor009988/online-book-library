import toast from "react-hot-toast";

export const getBlogs=()=>{
    let blogs=[];
    const storedBlogsData=localStorage.getItem("blogs");
    if(storedBlogsData){
        blogs=JSON.parse(storedBlogsData)
    }
    return blogs;

};

export const saveBlog=(blog)=>{
    const blogs=getBlogs();
    const isExist=blogs.find(b=>b.id==blog.id);
    if(isExist){
        return toast.error("Already Added to Bookmarked!!!!!!")
    }
    blogs.push(blog);

    localStorage.setItem("blogs",JSON.stringify(blogs))
    toast.success("Blog Bookmarked Successfully")
};


export const deleteBlog=id=>{
    let blogs=getBlogs();
    const remainingBlogs=blogs.filter(b=>b.id !==id);
    localStorage.setItem("blogs",JSON.stringify(remainingBlogs));
    toast.success("Blog Removed SuccessFully")
    
}

