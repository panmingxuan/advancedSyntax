// 类的装饰器(decorators)，本身是一个函数
// 接受的参数是构造函数
// 通过 @ 符号使用

function testDecorator(constrcutor: any) {
  console.log('decorator');
  constrcutor.prototype.getName = () => {
    console.log('dell');
  };
}
function testDecorator1(constrcutor: any) {
  console.log('decorator1');
}

//工厂模式的装饰器
//工厂模式的装饰器可以传递参数并根据参数返回不同的装饰器
function testDecorator2(flag: boolean) {
  if (flag) {
    return function (constrcutor: any) {
      console.log('decorator');
      constrcutor.prototype.getName1 = () => {
        console.log('dell1');
      };
    };
  } else {
    return function (constrcutor: any) {};
  }
}

//常规写法的装饰器 <T extends new (...args: any[]) => any>
//new (...args: any[]) => any 指接收参数的constrcutor
//T 代表带有构造函数的一个东西
function Decorator<T extends new (...args: any[]) => any>(constrcutor: T) {
  return class extends constrcutor {
    name = 'lee';
    getName2() {
      return this.name;
    }
  };
}
//常规写法的装饰器工厂(完善语法提示)
function decoratorFactory() {
  return function <T extends new (...args: any[]) => any>(constrcutor: T) {
    return class extends constrcutor {
      name = 'lee';
      getName3() {
        return this.name;
      }
    };
  };
}

//装饰器会在类被创建时运行,
//并且运行顺序是从下到上
@testDecorator
@testDecorator1
@testDecorator2(true)
@Decorator
class classDecorator {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const classDecorator1 = decoratorFactory()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new classDecorator('dell');
const test2 = new classDecorator1('dell');

//常规使用
console.log(test2.getName3());

//非常规用法
// (test as any).getName();
// (test as any).getName1();
