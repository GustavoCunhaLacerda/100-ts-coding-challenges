type Item = { name: string; weight: number; value: number };

// Solução de força bruta — O(2^n)
export function knapsack(items: Item[], capacity: number): { maxValue: number; selected: string[] } {
  let maxValue = 0;
  let bestSelection: string[] = [];

  function bruteForce(index: number, currentWeight: number, currentValue: number, selected: string[]) {
    if (index === items.length) {
      if (currentValue > maxValue) {
        maxValue = currentValue;
        bestSelection = [...selected];
      }
      return;
    }
    // Não incluir item
    bruteForce(index + 1, currentWeight, currentValue, selected);
    // Incluir item (se couber)
    if (currentWeight + items[index].weight <= capacity) {
      bruteForce(index + 1, currentWeight + items[index].weight, currentValue + items[index].value, [...selected, items[index].name]);
    }
  }

  bruteForce(0, 0, 0, []);
  return { maxValue, selected: bestSelection };
}

export const sampleItems: Item[] = [
  { name: "Laptop", weight: 3, value: 4000 },
  { name: "Phone", weight: 1, value: 2000 },
  { name: "Camera", weight: 2, value: 1500 },
  { name: "Tablet", weight: 2, value: 1800 },
  { name: "Headphones", weight: 1, value: 800 },
  { name: "Charger", weight: 1, value: 300 },
];
