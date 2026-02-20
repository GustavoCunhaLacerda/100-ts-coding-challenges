import fs from "fs";

export function readConfig(filePath: string): object {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = JSON.parse(content);
    return parsed;
  } catch (e) {
    console.log(e);
    return {};
  }
}

export async function fetchUser(id: number): Promise<object> {
  try {
    const res = await fetch(`https://api.example.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (e) {
    return {};
  }
}
