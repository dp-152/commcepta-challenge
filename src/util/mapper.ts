export function map(data: any, map: [string, string][]) {
  const result = {} as any;
  for (const [srcProp, dstProp] of map) {
    result[dstProp] = data[srcProp];
  }

  return result;
}
