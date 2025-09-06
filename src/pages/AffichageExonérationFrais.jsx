import React, { useRef , useEffect} from 'react'
import { useReactToPrint } from 'react-to-print';
import { useStateContext } from './../contexts/ContextProvider';
import { Navbar,Sidebar } from './../components';
import  NavNex from './NavNex';
import './style.css';
import ImageOne from '../components/img/logo daratfal.png';

const AffichageExonérationFrais = () => {
    const componentRef =useRef();
    const handlePrint =useReactToPrint( {
        content: () => componentRef.current,
  
   } );
   const [log, setLog] = React.useState([]);

    
    
   const [demande, setDemande] = React.useState([]);
   const [enq, setEnq] = React.useState([]);
   const [child, setChild] = React.useState([]);
   const [Etat, setEtat] = React.useState([]);
   const [candidat, setCandidat] = React.useState([]);
   const [Medical, setMedical] = React.useState([]);
   const [Exon, setExon] = React.useState([]);

   const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
   const urlParams = new URLSearchParams(window.location.search);
   const id = urlParams.get('id'); 
   useEffect(() => {
    fetch('http://localhost:8000/api/c')
      .then((response) => response.json())
      .then((data) => {
        setLog(data);
      })
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
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
      fetch('http://localhost:8000/api/affd')
        .then((response) => response.json())
        .then((data) => {
          setDemande(data);
        })
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/affEnq')
        .then((response) => response.json())
        .then((data) => {
          setEnq(data);
        })
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/in')
        .then((response) => response.json())
        .then((data) => {
          setChild(data);
        })
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/affEtat')
        .then((response) => response.json())
        .then((data) => {
          setEtat(data);
        })
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/affMedical')
        .then((response) => response.json())
        .then((data) => {
          setMedical(data);
        })
        .catch((error) => console.error(error));
    }, []);
    useEffect(() => {
      fetch('http://localhost:8000/api/affExon')
        .then((response) => response.json())
        .then((data) => {
          setExon(data);
        })
        .catch((error) => console.error(error));
    }, []);
      
      
  return (
   
        <div className={currentMode === 'Dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
            
              {activeMenu ? (
                <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar yourId={1} />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar yourId={1} />
    
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
                    <Navbar  yourId={1}  />
          </div>
      
<NavNex yourId={id}/>
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
طباعة
        </button>
  
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" ref={componentRef}>


<div class="rounded-t bg-white space-between mb-0 px-16 py-16" ref={componentRef}>
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
            
              {Exon &&
                  Exon
                    .filter((c) => c.idBenef === parseInt(id))
                    .map((Exon) => (
<div class="container" >
        <div class="header mt-">
      
        {Exon.lieuEx && (<>
            مقرر الإعفاء من أداء واجب التسجيل بالتأمين

 رقم بتاريخ

بناء على القانون   لشروط فتح مؤثات 
الرعاية الإجتماعية بناء على النضام الداخلي لمؤثة الرعاية الإجتماعية اسفي وحيث أن السيد (ة)
الحامل(ة) لبطاقة التعريف    صالحة الى غاية بصفته ولي أمر المستفيد 
للأسباب التالية يقرر ما يلي :    الفصل الأول يتم إعفاء 
من أداء واجب التسجيل والتأمين 
الفصل الثاني : يعهد إلى المداخيل بتنفيذ هذا القرار 
المرفقات المدير
        
            <p  className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.geo)[0]}<b >  : الأصل الجغرافي</b> </p>
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.type)[0]}<b >  :  نوع السكن الأسري </b>   </p>
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.partage)[0]}<b> :    عدد الأقارب الذين يتقاسمون معه السكن </b>
                 
            </p>
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.nbr)[0]}<b> :  عدد أفراد الأسرة </b> 
              
            </p>
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.source)[0]}<b>    :   مصدر العيش</b> 
            
            </p>
            <p className='text-right mb-2'>{enq && enq.filter((c) => c.id === parseInt(candidat && candidat.filter((c) => c.id === parseInt(id) ).map((c) => c.idenq)[0]) ).map((c) => c.service)[0]}<b>   :   الخدمات الأساسية داخل السكن</b>  

                        
            </p>
            <p className='text-right mb-2 ml-2'>              {Exon.datEx}<b>   : بتاريخ   </b> 
 
            </p>
            <p className='text-right mb-2 ml-10'>              {Exon.lieuEx}<b>  حرر ب   </b> 
              
            </p> </>)}
                        {Exon.file && ( <img src={`${process.env.PUBLIC_URL}/images/${Exon.file}`} alt="Certificate" />)}

    </div>
    </div>
                    ))}
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

export default AffichageExonérationFrais;