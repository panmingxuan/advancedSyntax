//target 类的原型， method 方法名，parameIngdex 修饰的参数的位置
function parameDecorator(target: any, methond: string, parameIndex: number) {
  console.log(target, methond, parameIndex);
}

class parameterDecorator {
  //参数修饰器
  getInfo(@parameDecorator name: string, age: number) {
    console.log(name, age);
  }
}
const parameter = new parameterDecorator();
parameter.getInfo('lee', 30);
