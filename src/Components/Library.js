
export function IsJsonFormat(value) {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
}



// default IsJsonFormat