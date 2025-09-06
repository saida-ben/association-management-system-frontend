import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { GridComponent, Inject,Selection, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { Navbar,Navbar1,Header, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce,ExenorationFrais, Registre,AffichageExonérationFrais,
  AffichageEngagement,Attestationsortie,  AffichageParcour, AffichageDossierMedical,AffichageCEtatCivil,Candidat ,AffichageCertificatLogement,AffichageDeux ,Pdf, 
  AffichageCertifatVieCollectif,AffichageAttestationBesoin,AffichageCartePersonnel,
 AffichagePage1,Listr,Rapport, Attestation ,ListRapp,  Imagecomponent,AttestationScolarite,  AffichageFréres,ParcourScolaire,AttestationBesoin, Liste,CertificaVieCollective,CertificatDeLogement,CertficatDaptitudePhysique,
  Page1,Engagement,Registres ,AR2,AffichageDossier ,Refuses,  Calendar ,Registre2,AffichageRegistre2 ,  Registres2,AR , L ,ListeV,DossierMedical,AffichageRapp, Rapp,  AttestationScolariteformulaire,  ListeAttestation,  CartePersonnel, AffichageCertificatDAptitude,AffichageRegistre , Login, Orders, Employees, Customers, NavNex, } from './pages';
import AttestationEtatCivil from './pages/AttestationEtatCivil';
import './App.css';
import './index.css';
//import './App2.js';
import { useStateContext } from './contexts/ContextProvider';

import { employeesData, employeesGrid } from './data/dummy';
import EnqueteSociale from './pages/EnquetteSociale/EnqueteSociale';
import Demande from './pages/EnquetteSociale/Demande';
import Absence from './pages/EnquetteSociale/Absence';
import AffichageDemande from './pages/EnquetteSociale/AffichageDemande';

 
const App = () => {
 const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
 const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);;

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
      <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div> 
          
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:mr-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
         

            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                <Route path="/" element={< Login/>} /> 

                {/* pages  */}
                <Route path="/beneficiaire" element={<Employees />} />
                <Route path="/DossierMedical" element={<DossierMedical />} />
                <Route path="/Page1" element={<Page1 />} />
                <Route path="/Engagement" element={<Engagement />} />
                <Route path="/CartePersonnel" element={<CartePersonnel />} />
                <Route path="/CertficatDaptitudePhysique" element={<CertficatDaptitudePhysique />} />
                <Route path="/CertificatDeLogement" element={<CertificatDeLogement />} />
                <Route path="/CertificaVieCollective " element={<CertificaVieCollective />} />
                <Route path="/AttestationEtatCivil " element={<AttestationEtatCivil />} />
                <Route path="/EnquetteSociale" element={(<EnqueteSociale />)} />
                <Route path="/AffichageDemande" element={(<AffichageDemande />)} />
                <Route path="/Engagement" element={(<Engagement />)} />
                <Route path="/AttestationBesoin" element={(<AttestationBesoin />)} />
                <Route path="/Registre" element={(<Registre />)} />
                <Route path="/ParcourScolaire" element={(<ParcourScolaire />)} />
                <Route path="/ExenorationFrais" element={(<ExenorationFrais />)} />
                <Route path="/CertificaVieCollective" element={(<CertificaVieCollective />)} />
                <Route path="/Liste" element={(<Liste />)} />
                <Route path="/Candidat" element={(<Candidat />)} />
                <Route path="/AffichageDeux" element={(<AffichageDeux />)} />
                <Route path="/Pdf" element={(<Pdf />)} />
                <Route path="/AffichageCertificatDAptitude" element={(<AffichageCertificatDAptitude />)} />
                <Route path="/AttestationEtatCivil" element={<AttestationEtatCivil />} />
                <Route path="/AffichageRegistre" element={<AffichageRegistre />} />
                <Route path="/AffichageParcour" element={<AffichageParcour />} />
                <Route path="/Listr" element={<Listr/>} />
                <Route path="/Registres" element={<Registres/>} />
                <Route path="/AttestationScolariteformulaire" element={<AttestationScolariteformulaire/>} />
                <Route path="/ListeAttestation" element={<ListeAttestation/>} />
                <Route path="/AttestationScolarite" element={<AttestationScolarite/>} />
                <Route path="/Rapport" element={<Rapport/>} />
                <Route path="/ListRapp" element={<ListRapp/>} />
                <Route path="/AffichageRapp" element={<AffichageRapp/>} />
                <Route path="/Rapp" element={<Rapp/>} />
                <Route path="/ListeV" element={<ListeV/>} />
                <Route path="/Attestationsortie" element={<Attestationsortie/>} />
                <Route path="/Attestation" element={<Attestation/>} />
                <Route path="/L" element={<L/>} />
                <Route path="/AR" element={<AR/>} />
                <Route path="/Registres2" element={<Registres2/>} />
                <Route path="/Registre2" element={<Registre2/>} />
                <Route path="/AR2" element={<AR2/>} />
                <Route path="/AffichageRegistre2" element={<AffichageRegistre2/>} />
                <Route path="/Calendar" element={<Calendar/>} />
                <Route path="/AffichageDossier" element={<AffichageDossier/>} />
                <Route path="/Refuses" element={<Refuses/>} />

                
                
                
                
                
                
                
                
                
                
                
                
                
                



                
                <Route path="/AffichageAttestationBesoin" element={<AffichageAttestationBesoin />} />
                <Route path="/AffichageCartePersonnel" element={<AffichageCartePersonnel />} />
                <Route path="/AffichageCertifatVieCollectif" element={<AffichageCertifatVieCollectif />} />
                <Route path="/AffichageCertificatLogement" element={<AffichageCertificatLogement />} />
                <Route path="/AffichageCEtatCivil" element={<AffichageCEtatCivil />} />
                <Route path="/AffichageDossierMedical" element={<AffichageDossierMedical />} />
                <Route path="/AffichageEngagement" element={<AffichageEngagement />} />
                <Route path="/AffichageExonérationFrais" element={<AffichageExonérationFrais />} />
                <Route path="/AffichagePage1" element={< AffichagePage1/>} />
                <Route path="/EnqueteSociale" element={< EnqueteSociale/>} />
                <Route path="/Demande" element={<Demande/>} />
                <Route path="/Absence" element={<Absence/>} />
                <Route path="/AffichageDemande" element={<AffichageDemande/>} />


              </Routes>
            </div>
            <Footer />
          </div>
      
      </BrowserRouter>
           </div>

  );
};

export default App;
