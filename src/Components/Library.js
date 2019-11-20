
function IsJsonFormat(value) {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}

export default IsJsonFormat