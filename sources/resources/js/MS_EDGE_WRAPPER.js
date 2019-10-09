export default function (object) {
    return {
        width: object.width,
        height: object.height,
        y: object.y || object.top,
        x: object.x || object.left,
    }
}