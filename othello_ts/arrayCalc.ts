function Add(a: number[], b: number[]): number[]
{
    if (a.length == b.length)
    {
        let c = new Array<number>(a.length)
        for (let i = 0; i < a.length; i++)
        {
            c[i] = a[i] + b[i];
        }
        return c;
    }
    else
    {
        return undefined;
    }
}

function Scalar(k: number, a: number[]): number[]
{
    let c = new Array<number>(a.length);
    for (let i = 0; i < a.length; i++)
    {
        c[i] = k * a[i];
    }
    return c;
}

export default { Add, Scalar };