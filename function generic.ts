//泛型 generic 泛指的类型。
//常用T来指代TYPE
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join(1, '1');
join(1, 1);
join('1', '1');
join('1', 1);
//此时该方法并不能类似于first为number，限制second为number，
//反之string同样
//此时我们可以使用泛型来完成这个需求
function genericJoin<T>(first: T, second: T) {
  return `${first}${second}`;
}
function genericsJoin<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
function anotherJoin<T>(first: T, second: T): T {
  return first;
}
//T[] 等价 Array<T>
function map<T>(params: T[] | Array<T>) {
  return params;
}
genericJoin<string>('1', '1');
//类型报错
// genericJoin<number>(1','1');
//自动类型推断
genericsJoin(1, '2');
//类型报错
// genericsJoin<number,number>(1,'1');
