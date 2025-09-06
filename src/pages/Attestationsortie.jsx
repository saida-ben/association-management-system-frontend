import React , {useEffect} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { Navbar, Sidebar } from '../components';
import Item from './Item';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
const Attestationsortie = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowModal(false);
  };
  const [selectedFile, setSelectedFile] = React.useState(null);

  let a=5;
  const urlParams = new URLSearchParams(window.location.search);
  const idBenef = urlParams.get('id');
  const [numAS, setNumAS] = React.useState('');
  const [dateAS, setDateAS] = React.useState('');
  const [remarque, setRemarque] = React.useState('');
    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      console.log({
        selectedFile, dateAS ,numAS,remarque,
      });
     
        try {
          const formData = new FormData();
          formData.append('file', selectedFile);
          formData.append('dateAS', dateAS);
          formData.append('numAS', numAS);
          formData.append('remarque', remarque);
         
          
      
          const response = await fetch('http://127.0.0.1:8000/api/addSortie', {
            method: 'POST',
            body: formData,
          });
      
          const data = await response.json();
          console.log(data);
          console.log(data.num);
      
          window.location.href = `/Attestation?id=${data.numAS}&idBenef=${idBenef}`;
      
        } catch (error) {
          console.error(error);
        }
     
     
    };
  const handleHtmlEditorChange = (event) => {
  const valueWithoutPTags = event.value.replace(/<\/?p>/g, '');
  setRemarque(valueWithoutPTags);
};
  return (
    <>
      
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
             <div className="flex relative dark:bg-main-dark-bg">
             
               {activeMenu ? (
                 <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
                   <Sidebar yourId={a} />
                 </div>
               ) : (
                 <div className="w-0 dark:bg-secondary-dark-bg">
                   <Sidebar yourId={a} />
     
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
       <Navbar yourId={a} />
     </div>
 
       
 <div class="formbold-main-wrapper">
   
   <div class="formbold-form-wrapper">
   <h1 style={{marginLeft:"150px"}}>شهادة المغادرة</h1>
<br></br>
  
     <div class="formbold-input-wrapp formbold-mb-3">
         <div>
     <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-400 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for=" تاريخ محضر لجنة البث في المغادرة "  type="date" name="تاريخ محضر لجنة البث في المغادرة "  id="مدة الزيارة"  placeholder="تاريخ محضر لجنة البث في المغادرة "  value={dateAS} onChange={(event) => setDateAS(event.target.value)}/>
    
    <Item className="appearance-none text-right  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for= "رقم  محضر لجنة البث في المغادرة   "type="text" name=" رقم  محضر لجنة البث في المغادرة  " placeholder= " رقم  محضر لجنة البث في المغادرة  " value={numAS} onChange={(event) => setNumAS(event.target.value)}/>
   
    </div>
    </div>
   
       <div class="formbold-mb-3 formbold-input-wrapp">
         <div>
          
     <div className=" m-2 md:m-6 mt-24 p-2 md:p-10 bg-white rounded-3xl" >
    <Header category="App" title="Editor" />
    <RichTextEditorComponent value={remarque} change={handleHtmlEditorChange} >

    <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />

    </RichTextEditorComponent>
  </div>
      </div>
       </div>
      
       
     <button 
     style={{
     backgroundColor: currentColor ,
     }}
     className="formbold-btn ml-88" onClick={handleSubmit}>حفظ
     </button>      
     <button 
    style={{
    backgroundColor: currentColor , marginLeft:"10px",
    }}
    className="formbold-btn"               onClick={() => setShowModal(true)}
    >رفع
    </button>
     
     </div>
     </div>
     </div>
     </div>
     </div>
     {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                      {/*content*/}
                      {/*body*/}
                      <div className="formbold-input-wrapp  text-right formbold-mb-3">
                        <div>
                          <input
                            className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="file"
                            onChange={handleFileChange}
                            placeholder="image"
                          />
                        </div>
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="bg-gray-200 text-gray-400 active:bg-gray-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          إلغاء
                        </button>
                        <button
                          className="text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                          type="button"
                          style={{
                            backgroundColor: currentColor,
                          }}
                          onClick={handleFileChange}
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
    
     </>
  )
}

export default Attestationsortie
