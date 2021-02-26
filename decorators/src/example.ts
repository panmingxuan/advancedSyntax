const userInfo: any = undefined;

//使用装饰器统一捕获异常
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(msg);
      }
    };
  };
}

class UserInfo {
  @catchError('userInfo.name 不存在')
  getName() {
    return userInfo.name;
  }
  @catchError('userInfo.age不存在')
  getAge() {
    return userInfo.age;
  }
}
const example = new UserInfo();
example.getName();
