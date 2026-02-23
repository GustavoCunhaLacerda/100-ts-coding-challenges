export function calculateDiscountedTotal(values: number[], discountPercentage: number): number {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  const totalDiscount = total * (1 - discountPercentage / 100);
  return totalDiscount;
}

export function isPrivilegedUser(user: string, password: string): boolean {
  const privilegedUsersList: string[] = ["admin", "root"] as const;
  let isPrivileged = false;
  for (let i = 0; i < privilegedUsersList.length; i++) {
    if (privilegedUsersList[i] === user) isPrivileged = true;
  }
  return isPrivileged && password.length >= 8;
}
