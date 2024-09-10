import React, { useState } from 'react';
import "./login.css"
import { toast } from 'react-toastify';


const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }

    }

    const handleLogin = (e) => {
        e.preventDefault();
        toast.success("Hello")
    }

    const user = false;

    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin} action="">
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name="password" />
                    <button>Sign In</button>
                </form>
            </div>
            <div className="separater"></div>
            <div className="item">
                <h2>Creat an Account</h2>
                <form action="">
                    <label htmlFor="file" style={{ cursor: "pointer" }} >
                        <img src={avatar.url || "./avatar.png"} alt="" />
                          <span>Upload an Image</span></label>
                    <input type="file" id='file' name='file' style={{ display: "none" }} onChange={handleChange} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name="password" id="" />
                    <button>Sign up</button>
                </form>

            </div>
        </div>
    )
}

export default Login;