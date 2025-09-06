import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import  React ,{useEffect} from 'react';
import { Button, Header ,Sidebar,Navbar} from '../../components';
import {Link} from 'react-router-dom';
import Items from '../Items';
import Item from '../Item';

import { employeeData } from '../../data/dummy';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../../contexts/ContextProvider';



function EnqueteSociale() {
    let grid;
    const [showF, setShowModalF] = React.useState(false);

    const [child, setChild] =React. useState([]);
    const [Demand, setDemand] =React. useState([]);
    const [parcours, setParcours] =React. useState([]);
    const [log, setLog] =React. useState([]);
    const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();
    const [EditModal, setEditModal] = React.useState(false);
    const [DATERECHERCHE, setDATERECHERCHE] = React.useState('');
    const [etatme, setEtatme] = React.useState('');
   

    const [geo, setGeo] = React.useState('');
    const [type, setType] = React.useState('');
    const [nbr, setNbr] = React.useState('');
    const [partage, setPartage] = React.useState('');
    const [source, setSource] = React.useState('');
    const [service, setService] = React.useState('');
    const [lieuEnq, setLieuEnq] = React.useState('');
    const [datEnq, setDatEnq] = React.useState('');

   
    const [residence, setResidence] = React.useState('');
    const [nom, setNom] = React.useState('');
    const [prenom, setPrenom] = React.useState('');
    const [lieuN, setLieuN] = React.useState('');
    const [dateN, setDateN] = React.useState('');
    const [nivSc, setNivSc] = React.useState('');
    const [Etat, setEtat] = React.useState('');
    const [autre, setAutre] = React.useState('');
    const [sante, setSante] = React.useState('');
    const [maladie, setMaladie] = React.useState('');
    const [nbrsoeur, setNbrsoeur] = React.useState('');
    const [nbrfrere, setNbrfrere] = React.useState('');
    const [arrang, setArrang] = React.useState('');
    const [nivScT, setNivScT] = React.useState('');
    const [array, setArray] = React.useState('');
    const [code, setCode] = React.useState('');
    const [id, setId] = React.useState('');
    const [adressB, setAdressB] = React.useState('');
    const [telT, setTelT] = React.useState('');

    
    const [freres, setFreres] =React. useState([]);
    
    const [professionT, setProfessionT] = React.useState('');
    const [etatmed, setEtatmed] = React.useState('');
    const [vie, setVie] = React.useState('');
    const [ageT, setAgeT] = React.useState('');

    const [profession, setProfession] = React.useState('');
    const [age, setAge] = React.useState('');
  
    const [sexe, setSexe] = React.useState('');
    async function editEmployee(c)
    {
      setEditModal(true)
    setCode(c.code);
      setNom(c.nom);
      setPrenom(c.prenom);
      setSexe(c.sexe);
      setAge(c.age);
      setProfession(c.profession);
      setVie(c.vie);
      setNivSc(c.nivSc);
      setEtatme(c.etatme);

     
    }
    function Loadf() {
      fetch('http://127.0.0.1:8000/api/affichFreres')
        .then(response => response.json())
        .then(data => {
          setFreres(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
    
    const DeleteEmployee = (code) => {
      fetch(`http://localhost:8000/api/supprimer/${code}`, {
        method: 'delete'
      })
      
      .then(data => {
        Loadf();
      })
      .catch(error => console.error(error));
    };
const urlParams = new URLSearchParams(window.location.search);
const yourId = urlParams.get('id');
//console.log(yourId);


const CheckboxChange = (event, label) => {
  if (event.target.checked) {
    setSante(label);
    
  } else {
    setSante('');
    
  }
};
const Checkbox = (event, label) => {
  if (event.target.checked) {
    setArrang(label);
    
  } else {
    setArrang('');
    
  }
};
    const handleCheckboxChange = (event, label) => {
      if (event.target.checked) {
        setEtat(label);
        
      } else {
        setEtat('');
        
      }
    };
    
    let a =3;
    const enregistrer = async (event) => {
      event.preventDefault();
      console.log({
        nom, prenom, age , profession, sexe, nivSc, etatme, vie,
      });
      try {
        const response = await fetch('http://127.0.0.1:8000/api/enregistrer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({nom, prenom, age , profession, sexe, nivSc, etatme, vie })
        });
        const data = await response.json();
        console.log(data);
        
        setShowModalF(false);
        Loadf();
        //Navigate('./Employees.jsx');
       // onSubmit(data);
      } catch (error) {
        console.error(error);
      }
    };
    
  async function update(event) {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/updateF/${freres.find(u => u.code === code)?.code || id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom:nom, prenom: prenom, age: age , profession:profession , sexe:sexe , nivSc: nivSc, etatme:etatme , vie: vie
         
        
        })
      });
  
      if (response.ok) {
        setEditModal(false);
        
        Loadf();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
    useEffect(() => {
      fetch('http://localhost:8000/api/affd')
        .then(response => response.json())
        .then(data => {
          setDemand(data);
        })
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/in')
        .then(response => response.json())
        .then(data => {
          setChild(data);
        })
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/inde')
        .then(response => response.json())
        .then(data => {
          setParcours(data);
        })
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/affFrere')
        .then(response => response.json())
        .then(data => {
          setFreres(data);
        })
        .catch(error => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/c')
        .then(response => response.json())
        .then(data => {
          setLog(data);
        })
        .catch(error => console.error(error));
    }, []);
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log({
        DATERECHERCHE,  lieuN, dateN, nivSc, Etat, autre, sante, maladie, nbrsoeur, nbrfrere, arrang, professionT, telT, etatmed, ageT, nivScT, datEnq, lieuEnq, service, source, partage, nbr, type, geo,adressB,
      });
     
      try {
        const response = await fetch('http://127.0.0.1:8000/api/Enq', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ DATERECHERCHE,  lieuN, dateN, nivSc, Etat, autre, sante, maladie, nbrsoeur, nbrfrere, arrang, professionT,telT,  etatmed, ageT,
             nivScT, datEnq, lieuEnq, service, source, partage, nbr, type, geo, adressB })
        });
        const data = await response.json();
        console.log(data);
        const idenq =data.id;
        const resp = await fetch('http://127.0.0.1:8000/api/candidat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({yourId , idenq  })
        });
        const d = await resp.json();
        console.log(d);
        
        window.location.href = `/EnqueteSociale?id=${id}`;
     
      } catch (error) {
        console.error(error);
      }
    };
    
   
   
    return (
      <>
      
      {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={a} />
            </div>
          ) : (
            <div className="w-0 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={a} />

            </div>
          )}
           
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar yourId={a}/>
            </div>
            



        <div class=" py-1 bg-blueGray-50 mr-14">
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
              
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    
                      <label
                       class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                          (ة)عنوان محل إقامة الطفل
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={adressB} onChange={(event) => setAdressB(event.target.value)} >
                    </input>
  
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                    <label class="block text-right  uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ البحث
                      </label>
                      <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={DATERECHERCHE} onChange={(event) => setDATERECHERCHE(event.target.value)} >
                    </input>
                    </div>
                  </div>
     
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-right text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                       النسب
                      </label>
                      <input
  name="nom"
  className="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
  value={Demand && Demand.filter((c) => c.num === parseInt(yourId)).map((c) => c.nom)[0]}
  readOnly
/>

                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الإسم
                      </label>
                      <input
  name="prenom"
  className="border-0 px-3 py-3 bg-gray-200 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
  value={Demand && Demand.filter((c) => c.num === parseInt(yourId)).map((c) => c.prenom)[0]}
  readOnly
/>
      
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block  text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      مكان الإزدياد
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={lieuN} onChange={(event) => setLieuN(event.target.value)} >
                    </input>
                
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase  text-right  text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      تاريخ الإزدياد
                      </label>
                      <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={dateN} onChange={(event) => setDateN(event.target.value)} >
                    </input>
                      
                     
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      المستوى الدراسي
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={nivSc} onChange={(event) => setNivSc(event.target.value)} >
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
            <input id="vue-checkbox" type="checkbox" value={Etat} onChange={(e) => handleCheckboxChange(e, 'يتيم الأبوين')}  class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
   
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأب
</label>
            <input id="vue-checkbox" type="checkbox" value={Etat} onChange={(e) => handleCheckboxChange(e, 'يتيم الأب')} class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">يتيم الأم
</label>
            <input id="vue-checkbox" type="checkbox" value={Etat} onChange={(e) => handleCheckboxChange(e, 'يتيم الأم')}  class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b text-gray-600 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3 right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">تفكك أسري
</label>
            <input id="vue-checkbox" type="checkbox" value={Etat} onChange={(e) => handleCheckboxChange(e, 'تفكك أسري')}  class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
           </input>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600  right-0">
        <div class="flex items-center pl-3  right-0">
        <label for="vue-checkbox" class="w-full py-3  text-right mr-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> الضعف و الاحتياج  </label>
            <input id="vue-checkbox" type="checkbox" value={Etat} onChange={(e) => handleCheckboxChange(e, 'الضعف و الاحتياج ')}  class="w-4 h-4 mr-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 content-end dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
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
                      <input type="text" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={autre} onChange={(event) => setAutre(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  </div>
            

                  
                  <h3 class="mb-4 font-semibold text-gray-900 dark:text-white text-right">الحالة الصحية</h3>

                  <div class="flex">
    <div class="flex items-center mr-4">
        <input id="inline-checkbox" type="checkbox" value={sante} onChange={(e) => CheckboxChange(e, 'مريض')}  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input><label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">مريض</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="inline-2-checkbox" type="checkbox" value={sante} onChange={(e) => CheckboxChange(e, 'سليم')}  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">سليم</label>
    </div>
    
</div>

                <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                في حالة المرض
                      </label>
                        
<div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                      نوع المرض
                      </label>
                      <input type="text" class="border-0 text-right px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={maladie} onChange={(event) => setMaladie(event.target.value)}>
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
                      <input type="number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={nbrfrere} onChange={(event) => setNbrfrere(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">إناث
 
                        </label>
                    
                      <input type="number" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                      value={nbrsoeur} onChange={(event) => setNbrsoeur(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  </div>
                  



                  <label class="block text-right uppercase text-blueGray-600 text-xs font-bold mt-2 mb-2" htmlfor="grid-password">
                  تربيته بين إخوته  
                      </label>
                        
                <div class="right-0 
               mb-2 flex ">
    <div class="flex right-36 absolute items-centermr-4">
        <input id="inline-checkbox" type="checkbox" value={arrang}  onChange={(e) => Checkbox(e, 'الأصغر')}  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        <label for="inline-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأصغر</label>
    </div>
    <div class="flex items-center right-14 absolute  mr-4">
        <input id="inline-2-checkbox" type="checkbox" value={arrang}  onChange={(e) => Checkbox(e, 'الأوسط')}  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأوسط</label>
    </div>
    <div class="flex items-center right-0 absolute mr-4">
        <input id="inline-2-checkbox" type="checkbox" value={arrang}  onChange={(e) => Checkbox(e, 'الأكبر')}  class="w-4 h-4 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input> <label for="inline-2-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">الأكبر</label>
    </div>
    
</div>










                  <hr class="mt-6 border-b-1 border-blueGray-300"/>
        
                  <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right">معلومات خاصة بالولي</h3>
             
        <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">السن</th>
                        <th class="py-3 px-6 text-left">المهنة</th>
                        <th class="py-3 px-6 text-left">هاتف</th>

                        <th class="py-3 px-6 text-center">الحالة الصحية</th>
                        <th class="py-3 px-6 text-center">المستوى الدراسي</th>
                        <th class="py-3 px-6 text-center">الولي</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                    
                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                       
                        <td class="py-3 px-6 text-center">
                        <input  type="text" value={ageT} onChange={(event) => setAgeT(event.target.value)} class="w-8 h-5 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input>
                      
                
                        </td>
                        <td class="py-3 px-6 text-center">
                        <input  type="text" value={professionT} onChange={(event) => setProfessionT(event.target.value)} class="w-8 h-5 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input>
                        </td>
                        <td class="py-3 px-6 text-center">
                        <input  type="text" value={telT} onChange={(event) => setTelT(event.target.value)} class="w-8 h-5 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input>
                        </td>
                        <td class="py-3 px-6 text-center">
                        <input  type="text" value={etatmed} onChange={(event) => setEtatmed(event.target.value)} class="w-8 h-5 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input>
                        </td>
                        <td class="py-3 px-6 text-center">
                        <input  type="text" value={nivScT} onChange={(event) => setNivScT(event.target.value)} class="w-8 h-5 text-blue-600 bg-gray-100 mr-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       </input>


                        </td>
                       <td class="py-3 px-6 text-right">
                       {Demand && Demand.filter((c) => c.num === parseInt(yourId)).map((c) => c.prenomT)[0]} &nbsp;
                       {Demand && Demand.filter((c) => c.num === parseInt(yourId)).map((c) => c.nomT)[0]}
                        </td>
       
                    </tr>
                  
                              </tbody>
            </table>
        </div>

        <h3 class="mb-4 mt-2 font-semibold text-gray-900 dark:text-white text-right"> (ة)معلومات حول إخوة الطفل</h3>

        <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
           onClick={() => setShowModalF(true)}  style={{
            backgroundColor: currentColor,
          }}

        >
          أضف أخ
        </button>
        <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              
                <thead>
                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-center"></th>
                    <th class="py-3 px-6 text-left">الجنس</th>

                        <th class="py-3 px-6 text-left">السن</th>
                        <th class="py-3 px-6 text-left">المهنة</th>
                        <th class="py-3 px-6 text-center">الوفاة</th>
                        <th class="py-3 px-6 text-center">الحالة الصحية</th>
                        <th class="py-3 px-6 text-center">المستوى الدراسي</th>
                        <th class="py-3 px-6 text-center">الإسم</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                {freres
    .filter((c) => c.nom === Demand.find((d) => d.num === parseInt(yourId))?.nom)
    .map((c) => (            
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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => editEmployee(c)}>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  onClick={() => DeleteEmployee(c.code)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </td>

                        <td class="py-3 px-6 text-center">
                        { c.sexe}

                        </td>
                        <td class="py-3 px-6 text-center">
                        {c.age}

                        </td>
                        <td class="py-3 px-6 text-center">
                        {c.profession}

                        </td>
                        <td class="py-3 px-6 text-center">
                        {c.vie}
                        </td>
                        <td class="py-3 px-6 text-center">
                        {c.etatme}
                        </td>
                       <td class="py-3 px-6 text-center">
                        {c.nivSc}
                        </td>
                        <td class="py-3 px-6 text-center">
                         {c.nom}                       
                        </td>
       
                    </tr>
                   ))}
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
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       value={geo} onChange={(event) => setGeo(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label
                       class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                        نوع السكن الأسري 
                      </label>
                    
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                       value={type} onChange={(event) => setType(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  

                   
                 
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      عدد أفراد الأسرة 
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                      value={nbr} onChange={(event) => setNbr(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      عدد الأقارب الذين يتقاسمون معه السكن
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                       value={partage} onChange={(event) => setPartage(event.target.value)} >
                    </input>
                    </div>
                  </div>


                 
<div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      مصدر العيش
                      </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={source} onChange={(event) => setSource(event.target.value)} >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class=" text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      الخدمات االأساسية داخل السكن                       </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={service} onChange={(event) => setService(event.target.value)} >
                    </input>
                    </div>
                  </div>
                        
<div class="w-full lg:w-6/12 px-4">
                    <div class="relative text-right w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      حرر ب   
                     </label>
                      <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                     value={lieuEnq} onChange={(event) => setLieuEnq(event.target.value)} >
                    </input>
                    </div>
                  </div>
                  <div class="w-full lg:w-6/12 px-4">
                    <div class="text-right relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                      بتاريخ                  
                      </label>
                      <input type="date" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-200 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                      value={datEnq} onChange={(event) => setDatEnq(event.target.value)}>
                    </input>
                    </div>
                  </div>
                  
                   
                  </div>
                  <div class="rounded-t  mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
  <button
    className="text-white right-0 absolute mr-4 my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
    type="button"
    style={{
      backgroundColor: currentColor,
    }}
    onClick={handleSubmit}
  >
    تسجيل
  </button>
</div>
            </div>
           
                 
                  {EditModal ? (
        <>
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* Header */}
          {/* Body */}
          <div className="formbold-input-wrapp  text-right formbold-mb-3">
            <div>
              <Item
                for="إسم عائلة"
                type="text"
                name="إسم عائلة"
                id="إسم عائلة"
                className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="إسم عائلة"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
 <Item
                className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                for="الإسم"
                type="text"
                name="الإسم"
                id="الإسم"
                placeholder="الإسم"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
              />            </div>
            <div>
             
                 <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="السن" type="text" name="السن " id="السن" placeholder='السن' value={age} onChange={(event) => setAge(event.target.value)}/>
  
      
          
        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الحالة الصحية" type="text" name="الحالة الصحية" id="الحالة الصحية" placeholder="الحالة الصحية" value={etatme} onChange={(event) => setEtatme(event.target.value)}/>{/* Add more items here */}
            </div>
<div>
<Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المستوى الدراسي" type="text" name="المستوى الدراسي" id="المستوى الدراسي" placeholder="المستوى الدراسي" value={nivSc} onChange={(event) => setNivSc(event.target.value)}/>
 
 <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المهنة" type="text" name="المهنة" id="المهنة" placeholder="المهنة" value={profession} onChange={(event) => setProfession(event.target.value)}/>
   </div>      
   <div>
  <div className="text-right">
    <label className="formbold-form-label" htmlFor="الجنس">
      الجنس
    </label>
    
    <select
      className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={sexe}
      onChange={(event) => setSexe(event.target.value)}
    >
      <option value="ولد">ولد</option>
      <option value="بنت">بنت</option>
    </select>
  </div>

  <div className="text-right">
    <label className="formbold-form-label" htmlFor="الوفاة">
      الوفاة
    </label>
    
    <select
      className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={vie}
      onChange={(event) => setVie(event.target.value)}
    >
      <option value="حي">حي</option>
      <option value="ميت">ميت</option>
    </select>
  </div>
</div>

   
   
      </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    
                    onClick={() => setEditModal(false)}
                  >
                    إلغاء
                  </button>
                  
                  <button
                    className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                    type="button"
                    onClick={update}
                    style={{
                             backgroundColor: currentColor ,
                      }}
                  >
                    تحديث
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showF ? (
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          {/* Header */}
          {/* Body */}
          <div className="formbold-input-wrapp  text-right formbold-mb-3">
            <div>
              <Item
                for="إسم عائلة"
                type="text"
                name="إسم عائلة"
                id="إسم عائلة"
                className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="إسم عائلة"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
              />
 <Item
                className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                for="الإسم"
                type="text"
                name="الإسم"
                id="الإسم"
                placeholder="الإسم"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
              />            </div>
            <div>
             
                 <Item className="appearance-none text-right block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   for="السن" type="text" name="السن " id="السن" placeholder='السن' value={age} onChange={(event) => setAge(event.target.value)}/>
  
      
          
        <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="الحالة الصحية" type="text" name="الحالة الصحية" id="الحالة الصحية" placeholder="الحالة الصحية" value={etatme} onChange={(event) => setEtatme(event.target.value)}/>{/* Add more items here */}
            </div>
<div>
<Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المستوى الدراسي" type="text" name="المستوى الدراسي" id="المستوى الدراسي" placeholder="المستوى الدراسي" value={nivSc} onChange={(event) => setNivSc(event.target.value)}/>
 
 <Item className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
  for="المهنة" type="text" name="المهنة" id="المهنة" placeholder="المهنة" value={profession} onChange={(event) => setProfession(event.target.value)}/>
   </div>      
   <div>
  <div className="text-right">
    <label className="formbold-form-label" htmlFor="الجنس">
      الجنس
    </label>
    
    <select
      className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={sexe}
      onChange={(event) => setSexe(event.target.value)}
    >
      <option value="ولد">ولد</option>
      <option value="بنت">بنت</option>
    </select>
  </div>

  <div className="text-right">
    <label className="formbold-form-label" htmlFor="الوفاة">
      الوفاة
    </label>
    
    <select
      className="appearance-none block w-full text-right bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      value={vie}
      onChange={(event) => setVie(event.target.value)}
    >
      <option value="حي">حي</option>
      <option value="ميت">ميت</option>
    </select>
  </div>
</div>

   
   
      </div>
          {/* Footer */}
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
              onClick={enregistrer}
              style={{
                backgroundColor: currentColor,
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


              
            </div>
            </div>
          </div>
          
        </div>
        </>

)
}
;
export default EnqueteSociale;