//方法装饰器
//普通方法: target 是类的prototype; 静态方法: target是类的构造函数
//key 是装饰的方法名字
//decorator 是PropertyDescriptor，
//和Object.defineProperty类似，有configurable,enumerable,value和writable,功能也相同
function getNameDecorator(
  target: any,
  key: string,
  decorator: PropertyDescriptor
) {
  console.log(target, key, decorator);
}

class FunctionDecorator {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //方法装饰器
  //类创建好后，立即对方法进行装饰
  @getNameDecorator
  getName() {
    return this.name;
  }
}
