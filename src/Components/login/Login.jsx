import React, { useState } from 'react';
import "./login.css"
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';


const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    });

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]),
            })
        }

    }


    //For the login
    const handleLogin = (e) => {
        e.preventDefault();
    }

    // for the sign up
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const {username, email, password} = Object.fromEntries(formData);

        console.log(username);

        try{

            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res);

            await setDoc(doc(db, "users", res.user.uid), {
                username: username,
                email: email,
                id: res.user.uid,
                block: [],
              });

            await setDoc(doc(db, "userChat", res.user.uid), {
            chats: []
            });

              toast.success("Account Created Successfully!");

        }catch(err){
            console.log(err);
            toast.error(err);
        }
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
                <form onSubmit={handleRegister} action="">
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