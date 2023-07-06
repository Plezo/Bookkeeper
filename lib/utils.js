export function camelToTitle(str) {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

export function formatNum(num) {
  return num.toLocaleString("en-US");
}
