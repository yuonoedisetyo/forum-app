import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { asyncRegister } from "../states/account/action";
import Header from "../components/common/Header";

function RegisterPage() {
  const account = useSelector((states) => states.account);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async (formdata) => {
    dispatch(asyncRegister(formdata));
  };

  useEffect(() => {
    if (account?.id) {
      navigate("/");
    }
  }, [account]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div style={{ maxWidth: 600 }}>
            <h3>Register</h3>
            <div style={{ height: 16 }} />
            <RegisterInput register={onRegister} />
            <p>
              Sudah punya akun? <Link to="/login">Login di sini.</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default RegisterPage;
