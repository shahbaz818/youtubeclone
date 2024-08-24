export const API_KEY = 'AIzaSyAf5rN5rOg8pCzyFH2JLeK-Apr68tF4KDM';


export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + 'M';
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + 'K'
    } else {
        return value;
    }
}