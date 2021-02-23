/**
 * 联合类型是指类似于animal: Bird | Dog
 * 解决联合类型的问题使用类型保护
 */
interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

//animal就是联合类型(Union type)，联合类型只会获取共性属性

//使用类型断言 进行类型保护
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}
//in语法 进行类型保护
function trainAnimalSecond(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}
//typeof 进行类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

//使用instanceof 进行类型保护
//interface无法使用instanceof
class NumberObj {
  count: number;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
