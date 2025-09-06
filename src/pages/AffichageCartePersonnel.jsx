import React, { useRef , useEffect} from 'react'
import { useReactToPrint } from 'react-to-print';
import { useStateContext } from './../contexts/ContextProvider';
import { Navbar,Sidebar } from './../components';
import  NavNex from './NavNex'
import './style.css'
const AffichageCartePersonnel = () => {
    const componentRef =useRef();
    const handlePrint =useReactToPrint( {
        content: () => componentRef.current,
  
   } );
   const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
 useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);
      
  return (
   
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
            
              {activeMenu ? (
                <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
    
                </div>
              )}
              <div
                className={
                  activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:mr-60 w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                
                  }
              >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                  <Navbar />
                </div>
<NavNex/>
 <div class=" py-1 bg-white-500">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div  >
        <button
        className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
 onClick={handlePrint}
 style={{
    backgroundColor: currentColor ,
    }}
 >
download
        </button>
  
   
                <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            
    
<div class="container" ref={componentRef}>
        <div class="header mt-">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
                (ة)تقرير بخصوص البحث الاجتماعي حول الطفل
                </h6>
            <p className='text-right  mt-4 mb-2'><b>  تاريخ البحث:</b> تاريخ البحث, تاريخ البحث</p>
            <p  className='text-right mb-2'><b >  الإسم:</b> الإسم</p>
            <p className='text-right mb-2'><b > النسب : </b> تاريخ الإزدياد </p>
            <p className='text-right mb-2'><b>  مكان الإزدياد:</b>
                 مكان الإزدياد
            </p>
            <p className='text-right mb-2'><b>  تاريخ الإزدياد :</b> 
            تاريخ الإزدياد
            </p>
            <p className='text-right mb-2'><b>  المستوى الدراسي:</b> 
            المستوى الدراسي
            </p>
            <p className='text-right mb-2'><b>  (ة)عنوان محل إقامة الطفل :</b> 
            (ة)عنوان محل إقامة الطفل
            </p>
            <p className='text-right mb-2'><b> الحالات الاجتماعية :</b> 
            الحالات الاجتماعية 
            </p>
            <p className='text-right mb-2'><b>عدد الإخوة :</b> 
            عدد الإخوة 
            </p>
            <p className='text-right mb-2'><b>  تربيته بين إخوته :</b> 
            تربيته بين إخوته 
            </p>
              
        </div>
        <h3 class="mb-4 mt-4 font-semibold text-gray-900 dark:text-white text-right">معلومات خاصة بالولي</h3>

        <div class="body">
        <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
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

        <div class="bg-white shadow-md rounded my-6">
        <table class="min-w-max w-full table-auto">
              
              <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
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
        
            <p  className='text-right mb-2'><b > الأصل الجغرافي :</b> الأصل الجغرافي</p>
            <p className='text-right mb-2'><b > نوع السكن الأسري   :</b> نوع السكن الأسري </p>
            <p className='text-right mb-2'><b>  عدد الأقارب الذين يتقاسمون معه السكن :</b>
                 مكان الإزدياد
            </p>
            <p className='text-right mb-2'><b> عدد أفراد الأسرة :</b> 
            عدد أفراد الأسرة 
            </p>
            <p className='text-right mb-2'><b>   مصدر العيش :</b> 
            مصدر العيش
            </p>
            <p className='text-right mb-2'><b>   الخدمات الأساسية داخل السكن
: </b>  

الخدمات الأساسية داخل السكن                        
            </p>
            <p className='text-right mb-2 ml-2'><b>  بتاريخ    </b> 
           : بتاريخ 
            </p>
            <p className='text-right mb-2 ml-10'><b>  حرر ب   </b> 
            :  حرر ب 
            </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>

   </div>
   </div>
   </div>
  )
}

export default AffichageCartePersonnel;