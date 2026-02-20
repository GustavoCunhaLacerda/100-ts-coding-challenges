// Hierarquia de herança profunda e frágil
class Animal {
  constructor(public name: string) {}
  breathe() { return `${this.name} breathes`; }
}

class Pet extends Animal {
  constructor(name: string, public owner: string) { super(name); }
  belongsTo() { return `${this.name} belongs to ${this.owner}`; }
}

class Dog extends Pet {
  bark() { return `${this.name} barks`; }
  fetch() { return `${this.name} fetches the ball`; }
}

class ServiceDog extends Dog {
  constructor(name: string, owner: string, public badge: string) { super(name, owner); }
  guide() { return `${this.name} guides its owner`; }
}

class PoliceServiceDog extends ServiceDog {
  track() { return `${this.name} tracks the scent`; }
  // Problema: herda fetch() de Dog, mas um cão policial não "busca bola"
  // Problema: herda belongsTo() de Pet, mas um cão policial pertence à corporação, não a uma pessoa
}

// Novo requisito: um RobotDog que late e busca, mas não respira e não tem dono
// Com herança, é impossível sem quebrar a hierarquia
