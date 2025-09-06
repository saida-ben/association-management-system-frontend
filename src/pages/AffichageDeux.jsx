import React, {useEffect,  useRef} from 'react'
import {Logo} from 'react-router-dom'
import ImageOne from '../components/img/logo daratfal.png';
import { useStateContext } from '../contexts/ContextProvider';
import {Link} from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const AffichageDeux = () => {
 const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
 const [Demand, setDemand] =React. useState([]);
 const [Candidat, setCandidat] =React. useState([]);
 const [Enquete, setEnquete] =React. useState([]);
 const [Freres, setFreres] =React. useState([]);

 
 const componentRef =useRef();

 const handlePrint =useReactToPrint( {
     content: () => componentRef.current,

} );
 const urlParams = new URLSearchParams(window.location.search);
const candid = urlParams.get('id');
const idEnq = urlParams.get('Enquet');
const handle = async (num, idenq, id) => {
  console.log({
    num,
    idenq,
    id,
  });
  try {
    const response = await fetch('http://127.0.0.1:8000/api/benef', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num, idenq  })
    });
    const data = await response.json();
    console.log(data);

    // Uncomment the following lines if needed
    // window.location.href = `/beneficiaire?id=${candid}`;
    // Navigate('./Employees.jsx');
    // onSubmit(data);

    // Make the DELETE request
    const deleteResponse = await fetch(`http://127.0.0.1:8000/api/supprimerCand/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const deleteData = await deleteResponse.json();
    console.log(deleteData);
    window.location.href = `/Candidat?id=4`;

  } catch (error) {
    console.error(error);
  }
};


const handleDelete = async (id) => {
  console.log({ id });
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/supprimerCand/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const data = await response.json();
    console.log(data);

    // Uncomment the following lines if needed
    // window.location.href = `/beneficiaire?id=${candid}`;
    // Navigate('./Employees.jsx');
    // onSubmit(data);
  } catch (error) {
    console.error(error);
  }
};
const handleRefus = async (num, idenq, id) => {
  console.log({ num, idenq });
  try {
    const addRefusResponse = await fetch('http://127.0.0.1:8000/api/addrefus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ num, idenq })
    });
    const addRefusData = await addRefusResponse.json();
    console.log(addRefusData);

    const deleteCandResponse = await fetch(`http://127.0.0.1:8000/api/supprimerCand/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    const deleteCandData = await deleteCandResponse.json();
    console.log(deleteCandData);

    // Uncomment the following line if needed
    window.location.href = `/Candidat?id=4`;
    // Navigate('./Employees.jsx');
    // onSubmit(data);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  fetch('http://localhost:8000/api/affichFreres')
    .then(response => response.json())
    .then(data => {
      setFreres(data);
    })
    .catch(error => console.error(error));
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
  fetch('http://localhost:8000/api/affd')
    .then(response => response.json())
    .then(data => {
      setDemand(data);
    })
    .catch(error => console.error(error));
}, []);

useEffect(() => {
    fetch('http://localhost:8000/api/affcandidat')
      .then(response => response.json())
      .then(data => {
        setCandidat(data);
      })
      
      .catch(error => console.error(error));
  }, []);
 return (
    <>
  <div class=" py-1 bg-blueGray-50">
  {Candidat && Candidat.filter((c) => c.id === parseInt(candid)).map((Candidat) => 

  <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  


<a style={{ backgroundColor: currentColor }}  onClick={handlePrint} className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
طباعة
</a>


<div   class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" ref={componentRef}>

  


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


  <span className="mb-2 mt-10 text-gray-900 dark:text-white text-center"> نمودج رقم {Candidat.num}  </span>
  <span className="mb-8 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white text-center">طلب التسجيل</span>
  
         
  <div >

                </div>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  :أنا الموقع أسفله </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14"> 
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.prenomT)[0]} 
            &nbsp; {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.nomT)[0]}

  </span>

            <span class="inline-grid">
            <span className='mb-8 right-4 mr-10 absolute font-semibold'> : الحامل لبطاقة التعريف الوطنية </span>
            
            <span className='mb-8 right-4 mr-10 absolute font-semibold mt-10'> 
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.cinT)[0]}
        </span>

            <span className='mb-8 ml-80 font-semibold'> : صالحة إلى غاية</span>
            <span className='mb-8 ml-80 font-semibold'> 
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.dateCin)[0]}
      </span>
            </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">: الساكن ب </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.adress)[0]}
 </span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">             {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.nomRole)[0]}
 : بصفته               {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.role)[0]}
    </span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">                 {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.nom)[0]}
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.prenom)[0]}
   : (ة)أطلب منكم تسجيل الطفل </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">               {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.institut)[0]}
   :بمؤسسة</span>

            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">  نظرا ل     {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.raison)[0]}  </span>
            <span className="mb-8 font-semibold text-gray-900 dark:text-white text-right mr-14">    {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.MoyenneSc)[0]}  : المعدل  </span>
           
            

            <span class="inline-grid">
            <span className='mb-4 left-80 absolute font-semibold'>       حرر ب {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.lieuE)[0]} </span>           
            <span className='mb-4 ml-40 font-semibold'>    {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.DatE)[0]}  : بتاريخ  </span>
 </span>           
            <span className=" font-semibold text-gray-900 dark:text-white text-left mt-2 mb-14 ml-60">:إمضاء</span>
            <div class="container" ref={componentRef}>
        <div class="header mt-">
        <h6 class="text-blueGray-700 text-center text-xl font-bold">
                (ة)تقرير بخصوص البحث الاجتماعي حول الطفل
                </h6>
            <p className='text-right  mt-4 mb-2'><b>  تاريخ البحث:</b>  
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.DATERECHERCHE)[0]}
</p>
            <p  className='text-right mb-2'><b >  الإسم:</b>                     {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.prenom)[0]}

</p>
            <p className='text-right mb-2'><b > النسب : </b>  {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.nom)[0]} </p>
            <p className='text-right mb-2'><b>  مكان الإزدياد:</b>
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.lieuN)[0]}

                 
            </p>
            <p className='text-right mb-2'><b>  تاريخ الإزدياد :</b> 
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.dateN)[0]}

            </p>
            <p className='text-right mb-2'><b>  المستوى الدراسي:</b> 
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nivSc)[0]}

            
            </p>
            <p className='text-right mb-2'><b>عنوان محل إقامة الطفل :</b> 
            {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.adress)[0]}
            
            </p>
            <p className='text-right mb-2'><b> الحالات الاجتماعية :</b> 
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.Etat)[0]}

           
            </p>
            <p className='text-right mb-2'><b>عدد الإخوة :</b> 
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nbrfrere)[0] +
             Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nbrsoeur)[0]}


           
            </p>
            <p className='text-right mb-2'><b>  تربيته بين إخوته :</b> 
           {     Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.arrang)[0]}

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
                        <th class="py-3 px-6 text-center">الحالة الصحية</th>
                        <th class="py-3 px-6 text-center">المستوى الدراسي</th>
                        <th class="py-3 px-6 text-center">الولي</th>
                    </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                    
                    <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                    
                     

                        <td class="py-3 px-6 text-center">
                        {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.ageT)[0]}
                        </td>
                       
                        <td class="py-3 px-6 text-center">
                        {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.professionT)[0]}

                        </td>
                        <td class="py-3 px-6 text-center">
                        {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.etatmed)[0]}
    </td>
                        <td class="py-3 px-6 text-center">
                        
                        {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nivScT)[0]}
                        </td>
                       <td class="py-3 px-6 text-center">
                       {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.nomT)[0]}
                       &nbsp;  {Demand && Demand.filter((c) => c.num === parseInt(Candidat.num)).map((c) => c.prenomT)[0]}
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
                      <th class="py-3 px-6 text-center">اخ</th>
                  </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
              {Freres &&
  Freres
    .filter((c) =>
      c.nom === (Demand && Demand.filter((c) => c.num === parseInt(Candidat.num))[0]?.nom)
    )
    .map((c) => (
      <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100" key={c.code}>
        <td className="py-3 px-6 text-center">{c.age}</td>
        <td className="py-3 px-6 text-center">{c.profession}</td>
        <td className="py-3 px-6 text-center">{c.etatme}</td>
        <td className="py-3 px-6 text-center">{c.sexe}</td>
        <td className="py-3 px-6 text-center">{c.nivSc}</td>
        <td className="py-3 px-6 text-center">{c.prenom}</td>
      </tr>
    ))}



</tbody>


          </table>
                      </div>
        
            <p  className='text-right mb-2'>                     
<b > الأصل الجغرافي :</b>    {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.geo)[0]}</p>
            <p className='text-right mb-2'>                      
<b > نوع السكن الأسري   :</b>  {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.type)[0]} </p>
            <p className='text-right mb-2'><b>  عدد الأقارب الذين يتقاسمون معه السكن :</b>
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.partage)[0]}

            </p>
            <p className='text-right mb-2'><b> عدد أفراد الأسرة :</b> 
            {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.nbr)[0]}
            </p>
            <p className='text-right mb-2'>  <b>   مصدر العيش :</b> {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.source)[0]}
           
            </p>
            <p className='text-right mb-2'>            
<b>   الخدمات الأساسية داخل السكن:
 </b>   {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.service)[0]}
                       
            </p>
            <p className='text-right mb-2 ml-2'>  <b>  بتاريخ  : </b> {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.datEnq)[0]}  
          
            </p>
            <p className='text-right mb-2 ml-10'><b>  حرر ب  </b> {Enquete && Enquete.filter((c) => c.id === parseInt(Candidat.idenq)).map((c) => c.lieuEnq)[0]}
            
            </p>
    </div>
    </div>
   
   
    </div>
    <div className='ml-60' >
   <button style={{ backgroundColor: 'green', color: 'white' }} 
  className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10" onClick={() => handle(Candidat.num, Candidat.idenq, Candidat.id)}>
  قبول
</button>

<a style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleRefus(Candidat.num, Candidat.idenq, Candidat.id)} className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10">
  رفض
</a>   
   </div>
    </div>
   
   )}
  

   


   
    </div> 
  
         






</>


      
  
  )
}

export default AffichageDeux
