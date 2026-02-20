// Mistura inconsistente de type aliases e interfaces sem critério

type UserType = {
  id: number;
  name: string;
  email: string;
};

type AddressType = {
  street: string;
  city: string;
  zip: string;
};

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface OrderInterface {
  id: number;
  user: UserType;
  items: { product: ProductInterface; quantity: number }[];
  address: AddressType;
  status: string; // poderia ser um union type
  createdAt: string; // poderia ser Date
}

// Função que aceita qualquer objeto com name — sem genérico, sem interface
export function printName(entity: any): void {
  console.log(entity.name);
}

// Tipo de retorno desnecessariamente amplo
export function createUser(name: string, email: string): object {
  return { id: Math.random(), name, email };
}
