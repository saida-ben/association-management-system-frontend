import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { Button, Header ,Navbar} from '../../components';
import Sidebar from '../../components/Sidebar';
import {Link} from 'react-router-dom';
import Items from '../Items';


import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../../contexts/ContextProvider';

function Demande() {
  const urlParams = new URLSearchParams(window.location.search);
const yourId = urlParams.get('id');
  let grid;
    const [showF, setShowModalF] = React.useState(false);
    const [showP, setShowModalP] = React.useState(false);
    const [nom, setNom] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [nomT, setNomT] = React.useState('');
    const [prenomT, setPrenomT] = React.useState('');
    const [dateCin, setDateCin] = React.useState('');
    const [cinT, setCinT] = React.useState('');
    const [adress, setAdress] = React.useState('');
    const [MoyenneSc, setMoyenneSc] = React.useState('');
    const [institut, setInstitut] = React.useState('');
    const [autreR, setAutreR] = React.useState('');
    const [DatE, setDatE] = React.useState('');
    const [lieuE, setLieuE] = React.useState('');
    const [role, setRole] = React.useState('');
    const [nomRole, setNomRole] = React.useState('');
    const [raison, setRaison] = React.useState('');
    const [id, setId] = React.useState('');
    const [num, setNum] = React.useState('');

         const handleCheckboxChange = (event, label) => {
    if (event.target.checked) {
      setRole(label);
      
    } else {
      setRole('');
      
    }
  };
    const handles = (event, label) => {
    if (event.target.checked) {
      
      setRaison(label);
    } else {
     
      setRaison('');
    }
  };
        
        
    
   
  


    
    const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log({
        num, nomT, prenomT, cinT, dateCin, adress, role,nomRole, institut, lieuE, DatE, raison, autreR, MoyenneSc ,nom, prenom, 
      });
        const response = await fetch('http://127.0.0.1:8000/api/demande', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({   num, nomT, prenomT, cinT, dateCin, adress, role,nomRole, institut, lieuE, DatE, raison, autreR, MoyenneSc, nom, prenom})
        });
        const data = await response.json();
        console.log(data);
        
  window.location.href = `/EnqueteSociale?id=${data.num}`;
     
    };
    const Submit = async (event) => {
      event.preventDefault();
     
        
  window.location.href = `/AffichageDemande?id=${num}&prenomT=${prenomT}&nomT=${nomT}&dateCin=${dateCin}
  &cinT=${cinT}&role=${role}&nomRole=${nomRole}&adress=${adress}&nom=${nom}&prenom=${prenom}&MoyenneSc=${MoyenneSc}&institut=${institut}&raison=${raison}&autreR=${autreR}&DatE=${DatE}&lieuE=${lieuE}`;
     
    };
    
  
    return (
      <>
         
      
      {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={yourId} />
            </div>
          ) : (
            <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={yourId}/>

            </div>
          )}
           
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar yourId={yourId} />
            </div>
            

        <div class=" py-1 bg-blueGray-50 mr-10">      
        

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
            رقم                    
  </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={num} onChange={(event) => setNum(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    
                      <label
                       class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
             اسم الولي                     
  </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={prenomT} onChange={(event) => setPrenomT(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right  uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    نسب  الولي 
                      </label>
                      <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={nomT} onChange={(event) => setNomT(event.target.value)} >
                    </input>
                    </div>
                  </div>
     
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ انتهاء الصلاحية 
                      </label>
                      <input type="date" class="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                      value={dateCin} onChange={(event) => setDateCin(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      رقم البطاقة الوطنية
                      </label>
                      <input type="text" class="border-0 px-3 bg-gray-200 py-3 placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={cinT} onChange={(event) => setCinT(event.target.value)} >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3"  >
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      بصفته 
                      </label>
                      </label>
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">     اب الطفل
                      <input   type="checkbox"   value={role} onChange={(e) => handleCheckboxChange(e, 'اب الطفل')} />  </label>
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">    ام الطفل   
                      <input   type="checkbox"   value={role} onChange={(e) => handleCheckboxChange(e, 'ام الطفل')}/>   </label>   
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">   (ة)أحد أقارب الطفل 
                      <input    type="checkbox"  value={role} onChange={(e) => handleCheckboxChange(e, '(ة)أحد أقارب الطفل ')}/>  </label>  
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">         آخر مع التحديد 
                      <input   type="checkbox" value={role}  onChange={(e) => handleCheckboxChange(e, ' آخر مع التحديد ')}/>  </label>   
   
                    </div>
                    <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={nomRole} onChange={(event) => setNomRole(event.target.value)} />
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      العنوان  
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={adress} onChange={(event) => setAdress(event.target.value)} >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      نسب الطفل  
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                        value={nom} onChange={(event) => setNom(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      اسم الطفل 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                        value={prenom} onChange={(event) => setPrenom(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    المعدل 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={MoyenneSc} onChange={(event) => setMoyenneSc(event.target.value)} >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-right text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      اسم المؤسسة 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={institut} onChange={(event) => setInstitut(event.target.value)} >
                    </input>
                    </div>
                  </div> 
 </div>
                   
<h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-right">اسباب الولوج</h3>
<ul >
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> ضعف الحالة الاجتماعية
</label>
            <input id="vue-checkbox" type="checkbox"  label="ضعف الحالة الاجتماعية "  value={raison}  onChange={(e) => handles(e, 'ضعف الحالة الاجتماعية ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">البعد عن المدرسة
</label>
            <input id="vue-checkbox" type="checkbox" label="لبعد عن المدرسة"   value={raison} onChange={(e) => handles(e, 'لبعد عن المدرسة')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأم
</label>
            <input id="vue-checkbox" type="checkbox" label="يتيم الأم"   value={raison} onChange={(e) => handles(e, 'يتيم الأم')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b text-gray-600 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3 right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> يتيم الأب 
</label>
            <input id="vue-checkbox" type="checkbox" label="يتيم الأب "  value={raison} onChange={(e) => handles(e, 'يتيم الأب')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">هما معا</label>
            <input id="vue-checkbox" type="checkbox" label="ما معا " value={raison} onChange={(e) => handles(e, 'ما معا ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>


    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مجهول الأب
</label>
            <input id="vue-checkbox" type="checkbox" label="مجهول الأب " value={raison}  onChange={(e) => handles(e, 'مجهول الأب ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مجهول الأبوين
</label>
            <input id="vue-checkbox" type="checkbox" label="مجهول الأبوين  "  value={raison} onChange={(e) => handles(e, 'مجهول الأبوين ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">(العنف) سوء المعاملة من طرف الوالدين  
</label>
            <input id="vue-checkbox" type="checkbox" label="(العنف) سوء المعاملة من طرف الوالدين   " value={raison}  onChange={(e) => handles(e, '(العنف) سوء المعاملة من طرف الوالدين  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b text-gray-600 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3 right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الإستغلال المادي و الإقتصادي للطفل : التسول به / تشغيله   
</label>
            <input id="vue-checkbox" type="checkbox" label="  الإستغلال المادي و الإقتصادي للطفل : التسول به / تشغيله   " value={raison}  onChange={(e) => handles(e, '  الإستغلال المادي و الإقتصادي للطفل : التسول به / تشغيله  ')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
<div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      حالات آخرى للتحديد
                      </label>
                      <input type="text"  value={autreR} onChange={(event) => setAutreR(event.target.value)}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
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
                      <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                        value={DatE} onChange={(event) => setDatE(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                    مكان التحرير
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                        value={lieuE} onChange={(event) => setLieuE(event.target.value)}>
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
                  }}  onClick={Submit}
                > 
                  عرض
                </button></Link>
                </div>
                </div>
              </form>
            </div>
            </div>
      
</div>
          </div>
         
        
        </>
)
}
;
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" value={value} onChange={onChange} />
      {label}
    </label>
  );
};
export default Demande;