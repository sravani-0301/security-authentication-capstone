function login(username, password) {

    const storedUser = "admin";
    const storedPassword = "Secure123";

    return (
        username === storedUser &&
        password === storedPassword
    );
}
