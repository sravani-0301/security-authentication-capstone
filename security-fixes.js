function sanitizeInput(input) {

    return input
        .replace(/</g, "")
        .replace(/>/g, "")
        .replace(/'/g, "")
        .replace(/"/g, "");
}

function safeQuery(username) {

    return {
        query: "SELECT * FROM Users WHERE username = ?",
        parameter: username
    };
}
