export const fetchAllPosts = () => (
    $.ajax({
        url: "/api/posts",
        method: "GET"
    })
);

export const fetchPost = (postId) => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: "GET"
    })
);

export const createPost = (post) => (
    $.ajax({
        url: "/api/posts/",
        method: "POST",
        data: { post }
    })
);

export const updatePost = (post) => (
    $.ajax({
        url: `/api/posts/${post.id}`,
        method: "PATCH",
        data: { post }
    })
);

export const deletePost = (postId) => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: "DELETE"
    })
);

export const createImage = (formData) => (
    $.ajax({
        url: "/api/posts",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false
    })
)

export const updateImage = (formData, postId) => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: "PATCH",
        data: formData,
        contentType: false,
        processData: false
    })
)
