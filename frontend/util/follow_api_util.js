export const fetchFollowers = () => (
    $.ajax({
        url: `/api/follows`,
        method: "GET"
    })
)

export const follow = (followerId) => (
    $.ajax({
        url: "/api/follows",
        method: "POST",
        data: { followerId }
    })
)

export const unfollow = (followeeId) => (
    $.ajax({
        url: `/api/follows/${followeeId}`,
        method: "DELETE"
    })
)