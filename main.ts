const addf: Record<number, string> = {
    3: "Fizz",
    5: "Buzz",
    15: "FizzBuzz",
};

function fb(n: number): string[] | string {
    if (n <= 0) {
        return "n value has to be more than 0";
    }

    const result = Array.from({ length: n }, (_, i) => {
        let output = "";
        for (const key in addf) {
            if ((i + 1) % Number(key) === 0) {
                output += addf[Number(key)];
            }
        }
    return output || String(i + 1);
    });
return result;
}

const n = 15; //change this to the desired value of n
console.log(fb(n));