/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-08-22 11:28:52
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-08-22 14:30:57
 * @FilePath: /ss/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes,Route } from "react-router-dom";
import Login from './compoents/login'
import Sign from './compoents/sign'
import Result from './compoents/result'
import  './App.less'
function App() {
  return (
    <div className = 'App'>
      <Routes>
        <Route path='/'   element={<Login/>} />
        <Route path='/Login'  element={<Login/>}  />
        <Route path='/Sign'  element={<Sign/>} />
        <Route path='/Result'  element={<Result/>} />
      </Routes>
     </div> 
  )
}

export default App;
