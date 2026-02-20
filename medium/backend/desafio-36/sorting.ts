// Bubble sort manual onde Array.sort() seria suficiente
export function sortByPrice(products: { name: string; price: number }[]) {
  const arr = [...products];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].price > arr[j + 1].price) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Ordenação múltipla sem critério de desempate
export function sortUsers(users: { name: string; age: number; score: number }[]) {
  return [...users].sort((a, b) => b.score - a.score);
  // Bug: sem critério de desempate quando scores são iguais — ordem instável
}

// Ordenação de strings sem considerar locale
export function sortNames(names: string[]): string[] {
  return [...names].sort();
  // Bug: "Álvaro" vem depois de "Zebra" porque sort() usa Unicode, não locale
}
