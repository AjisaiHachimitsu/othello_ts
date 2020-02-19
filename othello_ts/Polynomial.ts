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
}