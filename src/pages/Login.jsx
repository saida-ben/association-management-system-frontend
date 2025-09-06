import React from 'react';
import {Link} from 'react-router-dom';
import ImageOne from '../components/img/logo daratfal.png';
import Image from '../components/img/enfants-jouant-herbe_1098-504.png';
import './Login.css'
function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [poste, setPoste] = React.useState('');
  const [picture, setPicture] = React.useState('');
  function compareStrings(string1, string2) {
    return string1 === string2;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.warn(email, password);
    let result = await fetch('http://127.0.0.1:8000/api/login', {
      method: 'PUT',
      body: JSON.stringify({ email, password, name, poste, picture }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  
    if (result.status === 200) {
      let response = await result.json();
      let user = response.user;
      localStorage.setItem('user-info', JSON.stringify(user));
      console.log(response.poste);
     
    
      if (response.poste === "سكرتيرة الإدارة") {
        window.location.href = `/Demande?id=${response.id}`;
        
      } else if(response.poste === "سكرتيرة قسم التعليم"){
        window.location.href = `/Registres2?id=${response.id}`;

      }else if(response.poste === "مرشد اجتماعي"){
        window.location.href = `/Liste?id=${response.id}`;

      }else if(response.poste === "لجنة الاستقبال"){
        window.location.href = `/Candidat?id=${response.id}`;

      }else if(response.poste === "مدير"){
        window.location.href = `/ListeAttestation?id=${response.id}`;

      }else if(response.poste === "مربي"){
        window.location.href = `/Registres?id=${response.id}`;

      }else if(response.poste === "الحارس العام"){
        window.location.href = `/ListRapp?id=${response.id}`;

      }
      
  
      // navigate('./components/chat');
    } else {
      alert('Invalid connection');
    }
  };
  
  
 
  return (
   
      
 <>
 
 <div class="min-vh-100 d-flex align-items-center">
	  <div class="container">
	    <div class="row">
	      <div class="col-sm-7 mx-auto">
	        <div class="shadow-lg">
	          <div class="d-flex align-items-center">
	            <div class="d-none d-md-block d-lg-block">
	              <img src={Image} class="objectFit"  />
	            </div>
	            <div class="p-2" id="formPanel">
	              <div class="text-center ">
                <img class=" w-13 h-10 ml-60 top-28 mt-2 absolute" src={ImageOne} alt='Profile'/>
	              </div>
	              <form>
	                <div class="custom-form-group text-right mr-4 mt-2">
	                  <label class="text-uppercase " for="username">بريد إلكتروني</label>
	                  <input type="email" id="username" class="pb-1 text-right" value={email} onChange={(event) => setEmail(event.target.value)}/><span class="pb-1"><i class="fas fa-user"></i></span>
	                </div>
	                <div class="custom-form-group text-right mt-2 mr-4">
	                  <label class="text-uppercase" for="password">كلمة المرور</label>
	                  <input type="password" id="password" class="pb-1 text-right"  value={password} onChange={(event) => setPassword(event.target.value)}/><span class="pb-1"><i id="showCursor" class="fas fa-eye-slash"></i></span>
	                </div>
	                <div class="mt-5">
	                  <button class="w-100 p-1 d-block custom-btn" type="submit"  onClick={handleSubmit}>تسجيل الدخول</button>
	                </div>
	              </form>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
 
 </>      
  );
}

export default Login;