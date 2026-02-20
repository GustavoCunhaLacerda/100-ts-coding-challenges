export function calc(d: number[], p: number): number {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    t += d[i];
  }
  const x = t * (1 - p / 100);
  return x;
}

export function chk(u: string, pwd: string): boolean {
  const lst = ["admin", "root"];
  let f = false;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === u) f = true;
  }
  return f && pwd.length >= 8;
}
