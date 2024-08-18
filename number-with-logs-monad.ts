interface NumberWithLogs {
    result: number;
    logs: string[];
}

function square(x: number): NumberWithLogs {
    return {
        result: x * x,
        logs: [`Squared ${x} to get ${x * x}.`]
    };
}

function increment(x: number): NumberWithLogs {
    return {
        result: x + 1,
        logs: [`Incremented ${x} to get ${x + 1}.`]
    };
}

function wrapNumberWithLogs(x: number): NumberWithLogs {
    return {
        result: x,
        logs: []
    };
}

function runNumberWithLogs(
    x: NumberWithLogs, 
    transform: (_: number) => NumberWithLogs
): NumberWithLogs {
    const y = transform(x.result);
    return {
        result: y.result,
        logs: x.logs.concat(y.logs)
    };  
}

// main program
const a = wrapNumberWithLogs(2);
const b = runNumberWithLogs(a, square);
const c = runNumberWithLogs(b, increment);

console.log(c.result);
console.log(c.logs.join('\n'));