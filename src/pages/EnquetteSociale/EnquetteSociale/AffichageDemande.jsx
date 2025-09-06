import React from 'react'
import {Logo} from 'react-router-dom'
import ImageOne from '../../components/img/logo daratfal.png';
import { useStateContext } from '../../contexts/ContextProvider';
import {Link} from 'react-router-dom';

const AffichageDemande = () => {
 const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
 return (
  <div class=" py-1 bg-blueGray-50">
   
  <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <Link to="/EnqueteSociale" >

  <a style={{
    backgroundColor: currentColor ,
    }} href="" className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
  أضف البحث الاجتماعي
</a></Link>
<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
  
  <span className="mb-2 mt-10 text-gray-900 dark:text-white text-center"> نمودج رقم 78  </span>
  <span className="mb-8 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white text-center">طلب التسجيل</span>
  <div>

                </div>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  :أنا الموقع أسفله </span>
            
            <span class="inline-grid">
            <span className='mb-8 right-4 mr-10 absolute font-semibold'> : الحامل لبطاقة التعريف الوطنية </span>
            <span className='mb-8 ml-80 font-semibold'> : صالحة إلى غاية</span>
            </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">: الساكن ب </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">: بصفته </span>


            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">: (ة)أطلب منكم تسجيل الطفل </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">:بمؤسسة</span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14"> : نظرا ل </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14"> : المعدل  </span>
           
            

            <span class="inline-grid">
            <span className='mb-4 left-80 absolute font-semibold'>: حرر ب</span>           
            <span className='mb-4 ml-40 font-semibold'>: بتاريخ  </span>
 </span>           
            <span className=" font-semibold text-gray-900 dark:text-white text-left mt-2 mb-14 ml-60">:إمضاء</span>

    </div>
    
   
   
    </div> 
    
    </div>









      
  
  )
}

export default AffichageDemande
