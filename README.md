# NEXT-LEVEL-WEB-DEVELOPEMENT-ASSIGNMENT--1

*//Question Keyof-//*
*// Answer //*
keyof জিনিসটা বেশ মজার। ধরো আমাদের একটা object type আছে, keyof সেই object এর সব property name গুলো নিয়ে একটা union type বানায়।
Example-
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const myCar = {
  brand: "Toyota",
  model: "Corolla", 
  year: 2022
};

const brand = getProperty(myCar, "brand");

*// Question Enum //*
Enum basically constants এর একটা collection। ধরো আমাদের কিছু fixed value আছে, সেগুলো enum দিয়ে সুন্দর করে organize করতে পারি।
Example-
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}
const userStatus = Status.Active;  // "ACTIVE"
console.log(userStatus);
