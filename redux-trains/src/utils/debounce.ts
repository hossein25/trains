
export function debounce(fn: Function, wait = 500) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn());
        }, wait);
    });
}
