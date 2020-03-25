export const signup = (user) => {
    return $.ajax({
        method: "post",
        url: "/api/users",
        data: { user }
    });
};

export const login = (user) => (
    $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: { user }
    });
);

export const logout = () => (
    $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
)

