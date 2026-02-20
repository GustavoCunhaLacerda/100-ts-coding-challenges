type Address = { city?: string; country?: string };
type Company = { name?: string; address?: Address };
type User = { name?: string; company?: Company; age?: number };

export function getUserCity(user: User): string {
  if (user && user.company && user.company.address && user.company.address.city) {
    return user.company.address.city;
  }
  return "Unknown";
}

export function getDisplayName(user: User): string {
  if (user && user.name) {
    return user.name;
  } else {
    return "Anonymous";
  }
}

export function getAge(user: User): number {
  if (user.age !== null && user.age !== undefined) {
    return user.age;
  }
  return 0;
}
