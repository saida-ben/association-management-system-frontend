import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar,Navbar1, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce,ExenorationFrais,AffichageExonérationFrais,AffichageEngagement,AffichageDossierMedical,AffichageCEtatCivil,AffichageCertificatLogement,AffichageCertificatDAptitude,AffichageCertifatVieCollectif,AffichageAttestationBesoin,AffichageCartePersonnel,AffichageParcour,AffichagePage1,AffichageFréres,ParcourScolaire,AttestationBesoin,AttestationEtatCevil,CertificaVieCollective,CertificatDeLogement,Page1,Engagement,DossierMedical,CartePersonnel, Orders, Employees, Customers, NavNex, } from './pages';
import './App.css';
import './index.css';

import { useStateContext } from './contexts/ContextProvider';

const App2 = () => {
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
      <BrowserRouter>
            
        
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:mr-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <Navbar1/>

            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {
                  
                }
                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/المستفيدين" element={<Employees />} />
                <Route path="/الملف الطبي" element={<DossierMedical />} />
                <Route path="/معلومات الطفل الشخصية" element={<Page1 />} />
                <Route path="/التزام" element={<Engagement />} />
                <Route path="/بطاقة شخصية" element={<CartePersonnel />} />
                <Route path="/شهادة طبية" element={<CertficatDaptitudePhysique />} />
                <Route path="/شهادةالإسكان" element={<CertificatDeLogement />} />
                <Route path="/شهادة الحياة الجماعية" element={<CertificaVieCollective />} />
                <Route path="/AttestationEtatCevil " element={<AttestationEtatCevil />} />
                <Route path="/شهادة الإحتياج" element={<AttestationBesoin/>} />
                <Route path="/المسار الدراسي" element={<ParcourScolaire />} />
                <Route path="/الإعفاء من الرسوم" element={<ExenorationFrais />} />
                <Route path="/AffichageFréres" element={<AffichageFréres />} />
                <Route path="/AffichageParcour" element={<AffichageParcour />} />
                <Route path="/AffichageAttestationBesoin" element={<AffichageAttestationBesoin />} />
                <Route path="/AffichageCartePersonnel" element={<AffichageCartePersonnel />} />
                <Route path="/AffichageCertifatVieCollectif" element={<AffichageCertifatVieCollectif />} />
                <Route path="/AffichageCertificatDAptitude" element={<AffichageCertificatDAptitude />} />
                <Route path="/AffichageCertificatLogement" element={<AffichageCertificatLogement />} />
                <Route path="/AffichageCEtatCivil" element={<AffichageCEtatCivil />} />
                <Route path="/AffichageDossierMedical" element={<AffichageDossierMedical />} />
                <Route path="/AffichageEngagement" element={<AffichageEngagement />} />
                <Route path="/AffichageExonérationFrais" element={<AffichageExonérationFrais />} />
                <Route path="/AffichagePage1" element={< AffichagePage1/>} />


              </Routes>
            </div>
            <Footer />
          </div>
      
      </BrowserRouter>
           </div>

  );
};

export default App2;
