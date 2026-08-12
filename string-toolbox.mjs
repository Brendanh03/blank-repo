export function capitalise(string) {
    return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function truncate(string, length) {
    if (string.length <= length) {
        return string;
    }

    return string.slice(0, length) + '...';
}

export function camelCase(string) {
    return string
    .split(' ')
    .map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

export function reverse(string) {
    return string.split('').reverse().join('');
}

export function isPalindrome(string) {
    return string === reverse(string);
}
