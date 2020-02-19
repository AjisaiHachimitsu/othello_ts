export default class Polynomial
{
    coefficient: number[]//係数配列 昇べきの順
    constructor(coe: number[], isKobeki: boolean = false)
    {
        if (isKobeki)
        {
            this.coefficient = new Array(coe.length);
            for (let i = 0; i < coe.length; i++)
            {
                this.coefficient[i] = coe[coe.length - i - 1];
            }
        }
        else
        {
            this.coefficient = coe.slice();
        }
    }

    GetValue(x: number): number//多項式の値
    {
        let value = 0;
        for (let i = 0; i < this.coefficient.length; i++)
        {
            value += this.coefficient[i] * Math.pow(x, i);
        }
        return value;
    }
}