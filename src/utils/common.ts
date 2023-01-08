/*
 * @Date: 2023-01-08 12:08:47
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-08 13:33:55
 * @Description: 这是相关的公用方法文件
 */
// 责任链
Function.prototype["after"] = function (fn:Function) {
  // console.log(fn());
  const self = this;
  return (...args:Array<any>) => {
      const result = self.apply(null, args);
      if (Object.prototype.toString.call(result) === "[object Promise]") {
          return (async () => {
              const pResult = await result
              /* eslint-disable no-useless-call */
              return fn.call(null, pResult);
          })()
      }
      return fn.call(null, result);
  }
}
// 组合
export const compose = function (...args: Array<any>) {
  if (args.length) {
    return args.reduce(function (f1, f2) {

      return f1.after(f2);
    });
  }
};

// 柯里化
export const curry = (fn:Function, ...args:Array<any>) =>
  args.length >= fn.length ? fn(...args) : (..._args:Array<any>) => curry(fn, ...args, ..._args);