//定义全局变量
// declare var $: (param: () => void) => void;

//定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}
declare function $(readFunc: () => void): void;
//函数重载
declare function $(
  selector: string
): {
  html: (html: string) => {};
};
//或者
declare function $(selector: string): JqueryInstance;

//对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    //构造函数使用类的方式
    class init {}
  }
}

//interface 语法，实现函数重载
// interface JQuery {
//   (readFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: JQuery;
