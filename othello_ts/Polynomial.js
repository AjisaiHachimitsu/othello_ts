export default class Polynomial {
    constructor(coe, isKobeki = false) {
        if (isKobeki) {
            this.coefficient = new Array(coe.length);
            for (let i = 0; i < coe.length; i++) {
                this.coefficient[i] = coe[coe.length - i - 1];
            }
        }
        else {
            this.coefficient = coe.slice();
        }
    }
    GetValue(x) {
        let value = 0;
        for (let i = 0; i < this.coefficient.length; i++) {
            value += this.coefficient[i] * Math.pow(x, i);
        }
        return value;
    }
}
//# sourceMappingURL=Polynomial.js.map