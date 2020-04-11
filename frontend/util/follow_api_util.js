export const fetchFollowers = (user_id) => (
    $.ajax({
        url: `/api/users/${user_id}/follows`,
        method: "GET"
    })
)

export const follow = (followee_id) => (
    $.ajax({
        url: "/api/follows",
        method: "POST",
        data: { followee_id }
    })
)

export const unfollow = (followee_id) => (
    $.ajax({
        url: `/api/follows/${followee_id}`,
        method: "DELETE"
    })
)