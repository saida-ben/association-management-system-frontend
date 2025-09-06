import React, { useRef, useEffect } from 'react';
import { Sidebar, Navbar } from '../components';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import ImageOne from '../components/img/logo daratfal.png';
import { closest } from '@syncfusion/ej2-base';
import { useStateContext } from '../contexts/ContextProvider';
import NavNex from './NavNex';
import logo from '../components/img/logo daratfal.png';
function AffichagePage1() {
  const [child, setChild] = React.useState([]);
  const [candidat, setCandidat] = React.useState([]);
  const [demande, setDemande] = React.useState([]);
  const [enq, setEnq] = React.useState([]);


  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } =
    useStateContext();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const idchild = urlParams.get('idchild');
    console.log(idchild);
    const Enq = urlParams.get('enq');
    const num = urlParams.get('num');
    console.log(num);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  useEffect(() => {
    fetch('http://localhost:8000/api/in')
      .then((response) => response.json())
      .then((data) => {
        setChild(data);
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
  
  
  return (
    <>
      <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-60 inset-y-0 fixed right-0 font-poppins antialiased dark:bg-secondary-dark-bg bg-white ">
              <Sidebar yourId={1} />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar yourId={1}/>
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
              <Navbar yourId={1} />
            </div>

            <NavNex yourId={id}  />

            <div class=" py-1 bg-blueGray-50" >
              <div class="w-full lg:w-10/12 px-4 mx-auto mt-6">
                {child &&
                  child
                    .filter((c) => c.num === parseInt(idchild))
                    .map((child) => (
                      <div>
                        <button
                          className="my-2 inline-block rounded-full bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg peer-focus:text-primary dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400 dark:peer-focus:text-primary mr-10"
                          onClick={handlePrint}
                          style={{
                            backgroundColor: currentColor,
                          }}
                        >
                          طباعة
                        </button>

                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0" ref={componentRef}>
                          <div class="rounded-t bg-white space-between mb-0 px-16 py-16">
                            <div>
                            <img class="left-4 absolute w-20 h-15 top-2" src={`${process.env.PUBLIC_URL}/images/${child.file}`} alt="Profile" />

                             <br></br>
                             <img class=" right-4 absolute w-20 h-15 top-2 " src={logo} alt="logo"/>

                              <span className="mb-4 top-10 mt-8 absolute ml-250 text-sm">
                              <br></br> {child.dateD}  : تاريخ الإيواء 
                              <br></br> {child.dateF}   : تاريخ المغادرة
                              </span>
                            </div>

                            <div className="">
<br>
</br>
<br></br>
                              <span className="mb-0 right-2 top-12  absolute text-sm">
                                الجمعية الخيرية الإسلامية<br></br>
                                مؤسسة دار الأطفال للرعاية الاجتماعية <br></br>
                                أسفي<br></br>
                              </span>
                            </div>
                          </div>

                          <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-right flex justify-between">
                              <div class="container" >
                                <div class="header mt-">
                                  <h6 class="text-blueGray-700 text-center text-xl font-bold">ملف المستفيد (ة)</h6>
                                  <p className="mb-2 mt-2 mr-4 text-gray-900 dark:text-white text-center">
                                 
                                  <b>   :رقم</b> { candidat && candidat.filter((c) => c.id === child.idCandidat).map((c) => c.num)[0]}
                                  </p>

                                  <p className="text-right space-between mt-4 mb-2">
                                   <b>الإسم الشخصي </b> {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.prenom)[0]}
                               
                                  </p>
                                  <p className="text-right mb-2">
                                  <b>الإسم العائلي</b>   {demande && demande.filter((c) => c.num ===  parseInt(num)).map((c) => c.nom)[0]}                              

                                  </p>
                                  <p className="text-right mb-2">
                                    <b> تاريخ الإزدياد </b>                            {enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.dateN)[0]}      

                                  </p>
                                  <p className="text-right mb-2">
  <b> مكان الإزدياد </b>                                  {enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.lieuN)[0]} </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> المستوى الدراسي  </b>   {enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.nivSc)[0]}  
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> إسم الأب  </b>  {child.prenomP} {child.nomP} 
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> حي/متوفى  </b>  {child.vP}
                                     </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                     <b> مهنته  </b>   {child.professionP}  
                                  </p>
                                
                                  <p className="text-right mb-2">
                                 <b >   إسم الأم:</b>{child.prenomM} {child.nomM} 
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                 <b >   حية/متوفاة</b> {child.vM}
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                  {child.telP}  <b>   الهاتف</b> 
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                 <b >   مهنتها</b>  {child.professionM}   
                                   
                                  </p>
                                  <p className="text-right mb-2">
                                  {child.telM}  <b >   الهاتف</b>   
                                   
                                  </p>

                                 

                                
                                  <p className="text-right mb-2">
                                  <b>الحالة الإجتماعية :  
 </b>  {enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.Etat)[0]} 
                                  </p>
                                  <p className="text-right mb-2">
                                    {' '}
                                   <b>  العنوان العائلي :  </b>  {enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.adressB)[0]}
                                  </p>
                                  <p className="text-right mb-2">
                                  {demande && demande.filter(c => c.num === parseInt(num)).map(c => c.nbrsoeur)[0] + demande && demande.filter(c => c.num === parseInt(num)).map(c => c.nbrsoeur)[0]}  <b>عدد الإخوة والإخوات </b>
</p>
<p className="text-right mb-2">
                                  <b>  إسم الولي :   </b> {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.nomT)[0]}    {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.prenomT)[0]}
</p>
<p className="text-right mb-2">
                                  <b>عنوانه :  </b> {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.adress)[0]}
</p>
<p className="text-right mb-2">
{demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.cinT)[0]}   <b>:رقم البطاقة الوطنية  </b>
</p>
<p className="text-right mb-2">
   <b> مهنته </b>{enq && enq.filter((c) => c.id ===  parseInt(Enq)).map((c) => c.professionT)[0]}
</p>
<p className="text-right mb-2">
   <b> القرابة العائلية :</b>{demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.role)[0]}
</p>
<p className="text-right mb-2">
   <b> إسم المراسل بالمدينة  :</b> {child.nomC} {child.prenomC}
</p>
<p className="text-right mb-2">
{child.cinC} <b> :رقم البطاقة الوطنية   </b> 
</p>
<p className="text-right mb-2">
   <b> عنوانه   :</b>  {child.adressC}
</p>


                                 

                              

                                  
                                  <p className="text-right mb-2">
                                  {child.telC} <b>  الهاتف </b>{' '}
                                  </p>
                                  <p className="text-right mb-2">
   <b>بمؤسسة دار الأطفال آسفي للأسباب التالية :</b>  {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.raison)[0]}
</p>
<p className="text-right mb-2">
   <b>أطلب إيواء  :</b>   {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.nom)[0]}       {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.prenom)[0]}
</p>

                                 

                                  <p className="mb-4 right-60 font-semibold">
                                    <b>التلميد بصحة المعلومات أعلاه </b>
                                  </p>

                                  <p className="mb-4 ml-40 font-semibold">
                                  <b> كما أصرح بصفتي :</b> {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.role)[0]}
                                  </p>

                                  <p className="text-right mb-2">
                                    <b> :قرار لجنة الإيواء </b>
                                  </p>
                                  <p className="text-right mb-2">
                                  {demande && demande.filter(c => c.num ===  parseInt(num)).map(c => c.num)[0]}<b> : الترتيب رقم </b>
                                  </p>
                                  <p className="text-right mb-2">
                                    <b> بتاريخ :</b> <b> المصادقة</b>
                                  </p>
                                  <p className="text-right mb-2">
                                    <b> : مكان التوقيع </b>{' '}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AffichagePage1;
