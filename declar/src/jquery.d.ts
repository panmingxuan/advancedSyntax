//ES6 模块化

declare module 'jquery' {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }

  //混合类型
  function $(readFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  namespace $ {
    namespace fn {
      //构造函数使用类的方式
      class init {}
    }
  }
  export = $;
}
