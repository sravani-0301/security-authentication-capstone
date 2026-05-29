function validateInput(input) {
    if (!input || input.trim() === "") {
        return false;
    }

    const pattern = /^[a-zA-Z0-9@._-]+$/;

    return pattern.test(input);
}
