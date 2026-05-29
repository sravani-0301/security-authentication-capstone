function checkAccess(role) {

    if (role === "admin") {
        return "Access Granted";
    }

    return "Access Denied";
}
