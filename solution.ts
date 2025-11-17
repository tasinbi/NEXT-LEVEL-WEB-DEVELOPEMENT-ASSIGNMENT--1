//* Next Level Web DevelopeMent Batch 6 Assignment NO -1 \\*
//* Assignment Date: 18-11-2025 \\*
//* Name: Md Jubayer Ahmed\\**
//* Email: tasinahmed423@gmail.com \\*



// formateValue function
function formateValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else {
        return !value;
    }
}

// getLength function
function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}

// constructor function
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// filterByRating function
interface Item {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4.0);
}

// active users function
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}


// interface 
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? 'Yes' : 'No';
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}

// getUniqueValues function
function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr1[i]!);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr2[i]!);
    }
  }

  return result;
}

// calculateTotalPrice function
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    let subtotal = product.price * product.quantity;

    if (typeof product.discount === 'number') {
      subtotal -= (subtotal * product.discount) / 100;
    }

    return total + subtotal;
  }, 0);
}





