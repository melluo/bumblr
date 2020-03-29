export const signup = (user) => (
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
);

export const login = (user) => (
    $.ajax({ //api call sending a request hitting the backend, responds with the data or errors
        method: "POST",
        url: "/api/session",
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
)

