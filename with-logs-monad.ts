interface WithLogs<T> {
  result: T;
  logs: string[];
}

function wrapWithLogs<T>(input: T): WithLogs<T> {
  return {
    result: input,
    logs: [],
  };
}

function runWithLogs<T>(
  input: WithLogs<T>,
  transform: (_: T) => WithLogs<T>
): WithLogs<T> {
  const output = transform(input.result);
  return {
    result: output.result,
    logs: input.logs.concat(output.logs),
  };
}
