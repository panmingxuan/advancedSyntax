//属性装饰器没有descriptor属性
//target 是类原型，key是属性名
function nameDecorator(target: any, key: string): any {
  // console.log(target, key);

  //无法修改属性的值，target指向的是类的原型，
  //相当于在类的原型上添加了name='lee'的属性
  target[key] = 'lee';

  //修改属性的property
  const descriptor: PropertyDescriptor = {
    writable: false,
  };
  return descriptor;
}

class propertyDecorator {
  //属性装饰器，可以通过属性装饰器修改属性的property
  @nameDecorator
  name = 'Dell';
}
const property = new propertyDecorator();
property.name = 'dell lee';
console.log(property.name);
