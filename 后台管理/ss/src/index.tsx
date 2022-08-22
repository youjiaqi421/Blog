/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-08-22 11:28:52
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-08-22 12:30:45
 * @FilePath: /ss/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <BrowserRouter>
    <App />
  </BrowserRouter>,
);


