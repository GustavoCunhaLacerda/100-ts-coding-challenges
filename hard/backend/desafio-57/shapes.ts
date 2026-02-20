class Rectangle {
  constructor(protected width: number, protected height: number) {}

  setWidth(w: number) { this.width = w; }
  setHeight(h: number) { this.height = h; }
  getArea(): number { return this.width * this.height; }
}

// Viola LSP: Square não pode substituir Rectangle sem quebrar comportamento
class Square extends Rectangle {
  constructor(side: number) { super(side, side); }

  // Sobrescreve para manter invariante do quadrado — mas quebra o contrato de Rectangle
  setWidth(w: number) { this.width = w; this.height = w; }
  setHeight(h: number) { this.width = h; this.height = h; }
}

// Esta função funciona com Rectangle mas quebra com Square
function testRectangle(rect: Rectangle) {
  rect.setWidth(5);
  rect.setHeight(4);
  // Espera 20, mas com Square retorna 16
  console.assert(rect.getArea() === 20, `Expected 20, got ${rect.getArea()}`);
}

testRectangle(new Rectangle(0, 0)); // OK
testRectangle(new Square(0));       // FALHA — viola LSP
