export function getImgUrl(imgName) {
    return new URL(`../assets/products/${imgName}`, import.meta.url).href;
}