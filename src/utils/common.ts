/*
 * @Date: 2023-01-08 12:08:47
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-14 18:00:35
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

// 图片上传
type ChooseMediaRes = {
  tempFiles: any[]
}
type UploadImage = {
  url: string,
  success_tips: string,
  error_tips: string
}
export const uploadImag = (record: UploadImage ) => {
  return new Promise((resolve, reject) => {
    // 选择照片
    uni.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: (res:ChooseMediaRes) => {
        console.log(res)
        uni.showLoading({ title: record.success_tips, mask: true })
        uni.uploadFile({
          url:record.url,
          filePath: res.tempFiles[0].tempFilePath,
          name: 'file',
          header: { accept: 'application/json' },
          success: (file) => {
            resolve(JSON.parse(file.data).data)
            // console.log(JSON.parse(file.data).data, 'filefilefile')
            // fileList.value.push(JSON.parse(file.data).data)
            // console.log(fileList.value, 'fileList.value')
          },
          fail: (err) => {
            uni.showToast({ title: record.error_tips, icon: 'error', duration: 600 })
            reject(err)
          },
          complete: () => {
            uni.hideLoading()
            // emit('update:modelValue', fileList.value)
          }
        })
      },
      fail: (err) => {
        uni.showToast({ title: record.error_tips, icon: 'error', duration: 600})
        console.log(err)
        reject(err)
      }
    })
  })
  
}