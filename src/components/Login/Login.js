import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import "./LoginStyles.css"





const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const[isError,setIsError]=useState(false)
    const history = useHistory();



    function onChange(event){

        if(event?.target?.name==='username'){
            setUsername(event?.target?.value)
            setIsError(false);
        }
        else if(event?.target?.name==='password'){
            setPassword(event?.target?.value)
            setIsError(false);

        }
    }






    const onSubmit=()=>{

        if(username!=="mac" || password!=="sl")
        {
            setIsError(true);
        }
        else
        {
            history.push('/home');



        }
    }


    return (
        <body>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Employee Login</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="login-wrap p-4 p-md-5">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <span className="fa fa-user-o"></span>
                            </div>
                            <h3 className="text-center mb-4">Login</h3>
                            <div  className="login-form">
                                <div className="form-group">
                                    <input type="text" name={"username"} className="form-control rounded-left" placeholder="Username" onChange={(e)=>onChange(e)}
                                           required/>
                                </div>
                                <div className="form-group d-flex">
                                    <input type="password" name={"password"} className="form-control rounded-left"
                                           placeholder="Password" onChange={(e)=>onChange(e)} required/>
                                </div>
                                <div className="form-group">

                                    <button type="submit" onClick={onSubmit}
                                            className="form-control btn btn-primary rounded submit px-3">Login
                                    </button>

                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50">
                                        <label className="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox" checked/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
                                    </div>
                                </div>
                                {isError && (<p>Username or Password wrong </p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </body>
    );
};

export default Login;
