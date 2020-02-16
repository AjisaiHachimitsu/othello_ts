function Add(a, b) {
    if (a.length == b.length) {
        let c = new Array(a.length);
        for (let i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i];
        }
        return c;
    }
    else {
        return undefined;
    }
}
function Scalar(k, a) {
    let c = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        c[i] = k * a[i];
    }
    return c;
}
export default { Add, Scalar };
//# sourceMappingURL=arrayCalc.js.map