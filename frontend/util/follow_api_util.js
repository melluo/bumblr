export const fetchFollowers = () => (
    $.ajax({
        url: `/api/follows`,
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

export const unfollow = (follower_id) => (
    $.ajax({
        url: `/api/follows/${follower_id}`,
        method: "DELETE"
    })
)