function setOutput(output: any) {
  (globalThis as any).scriptOutput = output;
}

setOutput(123);
