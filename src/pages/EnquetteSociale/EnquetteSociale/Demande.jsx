import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Button, Header } from '../../components';
import {Link} from 'react-router-dom';
import Items from '../Items';

import { employeeData } from '../../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../../contexts/ContextProvider';

function Demande() {
    let grid;
    const [showF, setShowModalF] = React.useState(false);
    const [showP, setShowModalP] = React.useState(false);
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    const recordClick = (args) => {
        if (args.target.classList.contains('empData')) {
            let rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid'));
            console.log(rowObj);
        }
    };
    return (
      
        <div class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
                <h6 class="text-blueGray-700 text-right text-xl font-bold">
                طلب التسجيل
                </h6>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
             
              <form>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    
                      <label
                       class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
             اسم الولي                     
  </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right  uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    نسب  الولي 
                      </label>
                      <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
     
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ انتهاء الصلاحية 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      رقم البطاقة الوطنية
                      </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      بصفته 
                      </label>
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      العنوان  
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      آخر مع التحديد  
                      </label>
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      (ة)أحد أقارب الطفل 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                



                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      نسب الطفل  
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      اسم الطفل 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                

                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    المعدل 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-right text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      اسم المؤسسة 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
        
            
 </div>
                  
<h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-right">اسباب الولوج</h3>
<ul>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> ضعف الحالة الاجتماعية
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">البعد عن المدرسة
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأم
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b text-gray-600 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3 right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> يتيم الأب 
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">هما معا</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>


    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مجهول الأب
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مجهول الأبوين
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">(العنف) سوء المعاملة من طرف الوالدين  
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b text-gray-600 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3 right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الإستغلال المادي و الإقتصادي للطفل : التسول به / تشغيله   
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
<div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      حالات آخرى للتحديد
                      </label>
                      <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    </input>
                    </div>
                  </div>
                  </div>
            
</ul>
    

<hr class="mt-6 border-b-1 border-blueGray-300"/>

<div class="flex mt-4 flex-wrap">

<div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    تاريخ التحرير 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    مكان التحرير
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>        
                  </div>        
              
    <Link to="/AffichageDossierMedical">
    <button to="/AffichageExonérationFrais"
    style={{
    backgroundColor: currentColor ,
    }}
    className="formbold-btn">enregistrer
    </button>
    </Link>
    



                
  
      





      
    
     


              </form>
            </div>
            </div>
          </div>
          <footer class="relative  pt-8 pb-6 mt-2">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
)
}
;
export default Demande;