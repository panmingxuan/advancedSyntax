function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

class accessorsDecorator {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  //访问器装饰器
  //访问器同时只能在一个属性的一个访问器上使用
  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}
const decorator = new accessorsDecorator('dell');
decorator.name = '123';
