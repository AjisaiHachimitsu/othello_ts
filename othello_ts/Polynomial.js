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
}
//# sourceMappingURL=Polynomial.js.map