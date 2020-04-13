export const fetchUserLikes = (user_id) => (
    $.ajax({
        url: `/api/users/${user_id}/likes`,
        method: "GET"
    })
)

export const like = (post_id) => (
    $.ajax({
        url: "/api/likes",
        method: "POST",
        data: { post_id }
    })
)

export const unlike = (id) => (
    $.ajax({
        url: `/api/likes/${id}`,
        method: "DELETE"
    })
) 