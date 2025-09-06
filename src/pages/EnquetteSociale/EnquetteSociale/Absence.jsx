import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Button, Header } from '../../components';
import {Link} from 'react-router-dom';
import { useStateContext } from '../../contexts/ContextProvider';

function Absence() {
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

    return (
      
        <div class=" py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
                <h6 class="text-blueGray-700 text-right text-xl font-bold">
                إذن بالتغيب
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
             الإسم الشخصي المدير                   
  </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right  uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    الإسم العائلي للمدير
                      </label>
                      <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
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
                    <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    بتاريخ
                      </label>
                      <input type="text" class="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      رقم التسجيل
                      </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>

                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الأسباب
                      </label>
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                     مدة التغيب 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      قبل وجبة 
                      </label>
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    إلى 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    ابتداء من 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>



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
export default Absence;