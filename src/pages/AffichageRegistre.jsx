import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import {Link} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useReactToPrint } from 'react-to-print';
import { Sidebar, Navbar } from '../components';
import React, { useRef,useEffect} from 'react'
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import ImageOne from '../components/img/logo daratfal.png';

function AffichageRegistre() {
    let a=6;
    const urlParams = new URLSearchParams(window.location.search);
    const idRegistre = urlParams.get('id');
    const [demande, setDemand] =React. useState([]);
    const [Reg, setReg] =React. useState([]);
    const [candidat, setCandidat] =React. useState([]);
    const [infraction, setInfraction] =React. useState([]);
    const [activite, setActivite] =React. useState([]);
    const [incident, setIncident] =React. useState([]);
    const [seance, setSeance] =React. useState([]);

    
    
    
   const [enq, setEnquete] =React. useState([]);
    let grid;
    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
        }, []);
        const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    const [showF, setShowModalF] = React.useState(false);
    const [showP, setShowModalP] = React.useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/api/affRegister')
          .then(response => response.json())
          .then(data => {
            setReg(data);
          })
          .catch(error => console.error(error));
      }, []);
      
      useEffect(() => {
        fetch('http://localhost:8000/api/affActivite')
          .then(response => response.json())
          .then(data => {
            setActivite(data);
          })
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affAccident')
          .then(response => response.json())
          .then(data => {
            setIncident(data);
          })
          .catch(error => console.error(error));
      }, []);
      
      useEffect(() => {
        fetch('http://localhost:8000/api/affSeance')
          .then(response => response.json())
          .then(data => {
            setSeance(data);
          })
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affd')
          .then(response => response.json())
          .then(data => {
            setDemand(data);
          })
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/index')
          .then((response) => response.json())
          .then((data) => {
            setCandidat(data);
          })
          .catch((error) => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affEnq')
          .then(response => response.json())
          .then(data => {
            setEnquete(data);
          })
          .catch(error => console.error(error));
      }, []);
      useEffect(() => {
        fetch('http://localhost:8000/api/affInfraction')
          .then(response => response.json())
          .then(data => {
            setInfraction(data);
          })
          .catch(error => console.error(error));
      }, []);
    const recordClick = (args) => {
        if (args.target.classList.contains('empData')) {
            let rowObj = grid.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid'));
            console.log(rowObj);
        }
    };
    const componentRef =useRef();
    const handlePrint =useReactToPrint( {
        content: () => componentRef.current,
  
   } );
  

    return (
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
        
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={a} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar yourId={a}/>
  
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


 <div class=" py-1 bg-white-500">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div>
        <button
        className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
 onClick={handlePrint}
 style={{
    backgroundColor: currentColor ,
    }}
 >
طباعة
        </button>
  
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"  ref={componentRef}>


<div class="rounded-t bg-white space-between mb-0 px-16 py-16">
<div>
<img class=" right-4 absolute w-20 h-15 top-2 " src={ImageOne} alt='Profile'/>

</div>
<div className="">
<br></br>
<span className='mb-4 right-2 top-12  absolute text-sm'>
الجمعية الخيرية الإسلامية<br></br>
مؤسسة دار الأطفال للرعاية الاجتماعية  <br></br>
أسفي<br></br>
</span>



</div>


</div>
   
                <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-right flex justify-between">
            

<div class="container" >
{Reg.filter((Reg) => Reg.id ===parseInt(idRegistre) ).map((Reg) => (

  <div className="header mt-">
    <h6 className="text-blueGray-700 text-center text-xl font-bold">
      السجل اليومي
    </h6>
   
  </div>
  ))}



        <h3 class="mb-4 mt-6 font-semibold text-gray-900 dark:text-white text-right">تتبع سلوك المستفيد</h3>

        <div class="body">
       
        <div class="bg-white shadow-md rounded my-6">
            <table class=" w-full table-auto">
                <thead>   
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">القرار</th>
                        <th class="py-3 px-6 text-center">المبرر</th>
                        <th class="py-3 px-6 text-center">المخالفة</th>
                        <th class="py-3 px-6 text-center">التاريخ</th>
                        <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                        <th class="py-3 px-6 text-center"></th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                {infraction &&
  infraction
    .filter((c) => c.idBenef === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].idBenef))
    .filter((c) => c.dateR === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].dateR))
    .map((infraction) => (
      <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100" key={infraction.id}>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            {infraction.decision}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center">
            {infraction.raisonI}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center">
            {infraction.infraction}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center">
            {infraction.tempsI}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center">
            {infraction.nom}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center">
            {infraction.prenom}
          </div>
        </td>
        <td className="py-3 px-6 text-center">
        <a href={`${process.env.PUBLIC_URL}/images/${infraction.file}`} download>
              <img src={`${process.env.PUBLIC_URL}/images/${infraction.file}`} alt="غير موجودة" />
            </a>          
        </td>
        

      </tr>
    ))}

</tbody>


            </table>
        </div>
        <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الأنشطة</h3>
         
        <div class="bg-white shadow-md rounded my-6">
                          <table class="w-full table-auto">
                              <thead>
                                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                      <th class="py-3 px-6 text-left">مؤطر النشاط</th>
                                      <th class="py-3 px-6 text-center">نوع النشاط </th>
                                      <th class="py-3 px-6 text-center">النشاط</th>
                                      <th class="py-3 px-6 text-center">وقت النشاط</th>
                                      <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                                  </tr>
                              </thead>
                              <tbody class="text-gray-600 text-sm font-light">
                              
                              {activite &&
  activite
    .filter((c) => c.idBenef === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].idBenef))
    .filter((c) => c.dateR === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].dateR))
    .map((activite) => (
                                  <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                 
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.encadrant}                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.type}                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.activite}                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.tempsA}                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.nom}                                          </div>
                                      </td>
                                      <td class="py-3 px-6 text-left">
                                          <div class="flex items-center">
                                              
                                          {activite.prenom}                                          </div>
                                      </td>
                               
                                  </tr>
                                  ))}
                                            </tbody>
                                          
                          </table>
                      </div>
                      <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الحوادث</h3>
                      <div class="bg-white shadow-md rounded my-6">
                  <table class=" w-full table-auto">
                      <thead>     
                          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th class="py-3 px-6 text-left"> القرار</th>
                              <th class="py-3 px-6 text-center">تقييم الحاذثة </th>
                              <th class="py-3 px-6 text-center">الحاذثة</th>
                              <th class="py-3 px-6 text-center">وقت الحاذثة</th>
                              <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                         <th class="py-3 px-6 text-center">   </th>
                          </tr>
                      </thead>
                      <tbody class="text-gray-600 text-sm font-light">
                                
                      {incident &&
  incident
    .filter((c) => c.idBenef === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].idBenef))
    .filter((c) => c.dateR === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].dateR))
    .map((incident) => (
                      
                          <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                          
                               
                              <td class="py-3 px-6 text-left">
                                 
                                      
                                  {incident.decisionA}                                          
                                 
                              </td>
                              <td class="py-3 px-6 text-left">
                                
                                      
                                  {incident.score}                                         
                              </td>
                              <td class="py-3 px-6 text-left">
                                  
                                      
                                  {incident.accident}                                         
                              </td>
                              <td class="py-3 px-6 text-left">
                                 
                                      
                                  {incident.tempsA}                                         
                              </td>
                              <td class="py-3 px-6 text-left">
                                  
                                      
                                  {incident.nom}                                         
                              </td>
                              <td class="py-3 px-6 text-left">
                                 
                                      
                                  {incident.prenom}                                         
                              </td>
                              <td className="py-3 px-6 text-left">
        <a href={`${process.env.PUBLIC_URL}/images/${incident.file}`} download>
              <img src={`${process.env.PUBLIC_URL}/images/${incident.file}`} alt="غير موجودة" />
            </a>          
        </td>
                          </tr>
                         ))}
                                    </tbody>
                  </table>
              </div>
              <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">الحصص</h3>
              <div class="bg-white shadow-md rounded my-6">
                  <table class=" w-full table-auto">
                      <thead>
                          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                          <th class="py-3 px-6 text-left">المبرر</th>
                              <th class="py-3 px-6 text-center">الأستاذ</th>
                              <th class="py-3 px-6 text-center">الحصة</th>
                              <th class="py-3 px-6 text-center">نهاية الحصة</th>
                              <th class="py-3 px-6 text-center">بداية الحصة</th>
                              <th class="py-3 px-6 text-center"> النسب</th>
                         <th class="py-3 px-6 text-center"> الإسم  </th>
                          </tr>
                      </thead>
                      <tbody className="text-gray-600 text-sm font-light">
  {seance &&
    seance
    .filter((c) => c.idBenef === parseInt(Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].idBenef))
    .filter((c) => c.dateR === (Reg && Reg.filter((c) => c.id === parseInt(idRegistre))[0].dateR))

      .map((seance) => (
        <tr
          className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
        >
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.presence}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.prof}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.seance}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.finS}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.debutS}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.nom}</div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">{seance.prenom}</div>
          </td>
        </tr>
      ))}
</tbody>



                  </table>
              </div>
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
   </div>
   
)
}
;
export default AffichageRegistre;