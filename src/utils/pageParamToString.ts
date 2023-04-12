export default function pageParamToString (val: string | string[] | undefined): string {
  switch (typeof val) {
    case "string": return val;
    case "object": return val[0];
    case "undefined": return "";
    default: return "";
  }
}