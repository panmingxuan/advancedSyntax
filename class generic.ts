//普通
class DataManager {
  constructor(private data: string[]) {}
  getItem(index: number): string {
    return this.data[index];
  }
}
interface Item {
  name: string;
}
//泛型
class GenericDataManager<T extends Item> {
  constructor(private data: Array<T>) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}
const data = new GenericDataManager([{ name: 'dell' }]);

class GenericDataManager2<T extends number | string> {
  constructor(private data: Array<T>) {}
  getItem(index: number): T {
    return this.data[index];
  }
}
interface Test {
  name: string;
}
//类型报错：限定了类型
const data2 = new GenericDataManager2<Test>([{ name: 'dell' }]);
