/*
 * @Date: 2023-01-12 00:03:48
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2023-01-12 14:13:21
 * @Description: 这是****文件
 */
/*
----------------定义全局的组件---------------------*/
import { Component } from 'vue'

interface FileType {
  [key: string]: Component
}
interface ComponentItem {
  name: string,
  sfc: Component
}

const comList: Record<string, FileType> = import.meta.globEager('./*.vue')

// import.meta.glob
// console.log(comList, 'comListcomListcomList')

// const comlist = import.meta.glob('./*.vue')
// console.log(comlist, 'comlistcomlist')
// console.log(Object.entries(comlist), 'comlistcomlistcomlist')

// export default function install (app: any){
//   // Object.entries(comlist) ----> ["./EmptyBox.vue", ƒ]
//   for (const [ key, value ] of Object.entries(comlist) as any[]) {
//     const comName = key.substring(2, key.length - 4)
//     console.log(value.sfc)
//     app.component(comName, value)
//   }
// }
// const componentList: ComponentItem[] = []
// Object.keys(comList).forEach(key => {
//   // const component = comList[key]?.default
//   const comName = key.substring(2, key.length - 4)
//   console.log(comName, 'comNamecomNamecomName')
//   console.log(() => comList[key](), 'comList[key]comList[key]')
//   componentList.push({ name: comName.toLocaleLowerCase(), sfc: comList[key] })
// })

// export default componentList
export default function install(app: any) {
  Object.keys(comList).forEach(key => {
    const comName = key.substring(2, key.length - 4)
    console.log(comList[key], 'comList[key]')
    console.log(comName.toLocaleLowerCase(), 'comList[key]')
    app.component(comName.toLocaleLowerCase(), comList[key].default)
  })
}
// Object.keys(comList).forEach(key => {
//   const comName = key.substring(2, key.length - 4)
//   console.log(comName, 'comNamecomName')
//   console.log(comList[key].default, 'comList[key].default')
// })