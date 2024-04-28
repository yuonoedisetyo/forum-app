import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegister } from '../states/account/action';

function RegisterPage() {
  const account = useSelector((states) => states.account);
  console.log("account - ",JSON.stringify(account))

    const dispatch = useDispatch()
    const navigate = useNavigate();

   const onRegister = async(formdata)=>{
        dispatch(asyncRegister(formdata));
   }

   useEffect(()=>{
     console.log("account?.id ",account?.id)
    if(account?.id){
      navigate("/")
    }
   },[account])

  return (
    <div style={{}}>
      <h3>Register</h3>
      <RegisterInput register={onRegister} />

       
    </div>
  );
}

export default RegisterPage;
