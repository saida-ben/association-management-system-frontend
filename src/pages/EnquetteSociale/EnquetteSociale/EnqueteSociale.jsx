import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Button, Header } from '../../components';
import {Link} from 'react-router-dom';
import Items from '../Items';

import { employeeData } from '../../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../../contexts/ContextProvider';

function EnqueteSociale() {
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
                (ة)تقرير بخصوص البحث الاجتماعي حول الطفل
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
                          (ة)عنوان محل إقامة الطفل
                      </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right  uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ البحث
                      </label>
                      <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
     
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-right text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                       النسب
                      </label>
                      <input type="text" class="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الإسم
                      </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      مكان الإزدياد
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ الإزدياد
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      المستوى الدراسي
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>


                </div>
        

                     
        
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-right">الحالات الاجتماعية</h3>
<ul>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأبوين
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأب
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
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">تفكك أسري
</label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> الضعف و الاحتياج  </label>
            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
</ul>
 
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
            

                  
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-right">الحالة الصحية</h3>

                  <div class="flex right-0 
               ">
    <div class="flex right-14 absolute items-center mr-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input><label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مريض</label>
    </div>
    <div class="flex right-0 absolute items-center mr-4">
        <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">سليم</label>
    </div>
    
</div>
<hr class="mt-6 border-b-1 border-blueGray-300"/>

                <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                في حالة المرض
                      </label>
                        
<div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      نوع المرض
                      </label>
                      <input type="text" class="border-0 text-right px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  
                  </div> 




                
   
                  
        <h6 class="text-blueGray-400 text-right text-sm mt-3 mb-6 font-bold uppercase">
        عدد الإخوة
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      ذكور         
                          </label>
                      <input type="number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">إناث
 
                        </label>
                    
                      <input type="number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  </div>
                  



                  <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                  تربيته بين إخوته  
                      </label>
                        
                <div class="right-0 
               mb-2 flex ">
    <div class="flex right-36 absolute items-center mr-4">
        <input id="inline-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأصغر</label>
    </div>
    <div class="flex items-center right-14 absolute mr-4">
        <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأوسط</label>
    </div>
    <div class="flex items-center right-0 absolute mr-4">
        <input id="inline-2-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأكبر</label>
    </div>
</div>










                  <hr class="mt-6 border-b-1 border-blueGray-300"/>
        
                  <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">معلومات خاصة بالولي</h3>
                  <button class="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10" type="button"
                     onClick={() => setShowModalP(true)}
                     style={{
                      backgroundColor: currentColor ,
                      }}
                  >
          أضف ولي
        </button>
        <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-center">Actions</th>
                        <th class="py-3 px-6 text-left">السن</th>
                        <th class="py-3 px-6 text-left">المهنة</th>
                        <th class="py-3 px-6 text-center">الوفاة</th>
                        <th class="py-3 px-6 text-center">الحالة الصحية</th>
                        <th class="py-3 px-6 text-center">المستوى الدراسي</th>
                        <th class="py-3 px-6 text-center">الولي</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                    
                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                        <td class="py-3 px-6 text-center">
                            <div class="flex item-center justify-center">
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </td>

                        <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
                        <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
                        <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
                        <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
                        <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
                       <td class="py-3 px-6 text-center">
                           hhhhh
                        </td>
       
                    </tr>
                  
                              </tbody>
            </table>
        </div>

        <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right"> (ة)معلومات حول إخوة الطفل</h3>

        <button class="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10" type="button"
           onClick={() => setShowModalF(true)}
           style={{
            backgroundColor: currentColor ,
            }}
        >
          أضف أخ
        </button>
        <div class="bg-white shadow-md rounded my-6">
                          <table class="min-w-max w-full table-auto">
                              <thead>
                                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                      <th class="py-3 px-6 text-left"></th>
                                      <th class="py-3 px-6 text-left">المهنة</th>
                                      <th class="py-3 px-6 text-center">تاريخ الإزدياد</th>
                                      <th class="py-3 px-6 text-center">الحالة الصحية</th>
                                      <th class="py-3 px-6 text-center">المستوى الدراسي</th>
                                      <th class="py-3 px-6 text-center">الإسم</th>
                                  </tr>
                              </thead>
                              <tbody class="text-gray-600 text-sm font-light">
                                  
                                  <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                     
                                  <td class="py-3 px-6 text-center">
                                          <div class="flex item-center justify-center">
                                              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                  </svg>
                                              </div>
                                              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                  </svg>
                                              </div>
                                              <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                  </svg>
                                              </div>
                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              <div class="mr-2">
                                                  <img class="w-6 h-6" src="https://img.icons8.com/color/100/000000/vue-js.png"/>
                                              </div>
                                              <span class="font-medium">Vue Project</span>
                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              <div class="mr-2">
                                                  <img class="w-6 h-6" src="https://img.icons8.com/color/100/000000/vue-js.png"/>
                                              </div>
                                              <span class="font-medium">Vue Project</span>
                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              <div class="mr-2">
                                                  <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                              </div>
                                              <span>Anita Rodriquez</span>
                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-center">
                                          <div class="flex items-center justify-center">
                                              <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                              <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                              <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-center">
                                          <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                                      </td>
                                      
                                  </tr>
                                
                                            </tbody>
                          </table>
                      </div>
           



        <h6 class="text-blueGray-400 text-right text-sm mt-3 mb-6 font-bold uppercase">
        (ة) الوضع السوسيو -اقتصادي للطفل
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الأصل الجغرافي
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label
                       class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        نوع السكن الأسري 
                      </label>
                    
                      <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  

                   
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      عدد أفراد الأسرة 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      عدد الأقارب الذين يتقاسمون معه السكن
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>


                 
<div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      مصدر العيش
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الخدمات االأساسية داخل السكن                       </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                        
<div class="w-full lg:w-6/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      حرر ب   
                     </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      بتاريخ                  
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" >
                    </input>
                    </div>
                  </div>
                  
                   
                  </div>
                  <div class="rounded-t  mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <Link to='/AffichageDemande'>
                <button class=" text-white right-0 absolute mr-4 my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10" type="button"
                 style={{
                  backgroundColor: currentColor ,
                  }}
                >
                  Enregistrer
                </button></Link>
              </div>
            </div>
                 
                 
                  {showP ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

              {/*content*/}
             
               
               
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
      <div>   
        <Items className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الولي" type="text" name="الولي" id="" placeholder="الولي"/>
    <Items className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المستوى الدراسي" type="text" name="المستوى الدراسي" id="المستوى الدراسي" placeholder="المستوى الدراسي"/>

        </div>
      <div>
         
         <Items className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الحالة الصحية"type="text" name="الحالة الصحية"id="الحالة الصحية" placeholder="الحالة الصحية"/>
         <Items className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الوفاة" type="text" name="الوفاة" id="الوفاة" placeholder="الوفاة"/>

         </div>
         <div>   
        <Items className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المهنة" type="text" name="المهنة" id="" placeholder="المهنة"/>
    <Items className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="السن" type="text" name="السن" id="السن" placeholder="السن"/>

        </div>
        </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    
                    onClick={() => setShowModalP(false)}
                  >
                    إلغاء
                  </button>
                  <Link to='/AffichageDemande'>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalP(false)}
                    style={{
                             backgroundColor: currentColor ,
                      }}
                  >
                    حفظ
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


{showF ? (
        <>
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
 <div class="formbold-main-wrapper">
 <div class="formbold-form-wrapper">

                {/*header*/}
              
                {/*body*/}
                <div class="formbold-input-wrapp  text-right formbold-mb-3">
      <div>
         
         <Items className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="الإسم"type="text" name="الإسم"id="الإسم" placeholder="الإسم"/>
     <Items className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="تاريخ الإزدياد" type="text" name="تاريخ الإزدياد" id="تاريخ الإزدياد" placeholder='تاريخ الإزدياد'/>
  
      
         </div>

        <div>   
        <Items className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الحالة الصحية" type="text" name="الحالة الصحية" id="الحالة الصحية" placeholder="الحالة الصحية"/>
    <Items className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المستوى الدراسي" type="text" name="المستوى الدراسي" id="المستوى الدراسي" placeholder="المستوى الدراسي"/>

        </div>
        <div>   
        <Items className="appearance-none  ml-60 block w-60 text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المهنة" type="text" name="المهنة" id="المهنة" placeholder="المهنة"/>
   
        </div>
      
      </div>

     
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalF(false)}
                   
                  >
                    إلغاء
                  </button>
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={() => setShowModalF(false)}
                    style={{
                      backgroundColor: currentColor ,
                      }}
                  >
                     حفظ 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                  
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
export default EnqueteSociale;