import React,{useState} from 'react'
import "./Login.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
// import firebase from "./firebase";



const Login = () => {
    let user={
        email:"",
        password:"",
        confirmpassword:''

    }
    

    // let errors = [];
    // let userCollectionRef = firebase.db().ref('users');

    const [userState, setUserState] = useState(user);
    // const emailRef = useRef();
    const [state, dispatch] = useStateValue();
    // const [errorState, seterrorState] = useState(errors);
    

    // const handleChange = (e) => {
    //     let target = e.target;
    //     setUserState((currentState) =>{
    //         let currentuser = {...currentState};
    //         currentuser[target.name] = target.value;
    //         return currentuser;


    //     })
    // }

    

    // const checkForm = () =>{
    //     if(isFormEmpty())
    //     {
    //         seterrorState((error) => error.concat({message: "please fill in all fields"}))
    //         return false;
    //     }

    //     else if(!checkPassword()){
    //         return false;
    //     }
    //     return true;
    // }

    // const checkPassword=()=>{
    //     if(userState.password.length < 8){
    //         return false;
    //     }

    //     else if(userState.password !== userState.confpassword){
    //         return false;
    //     }

    //     return true;
    // }

    // const isFormEmpty=() => {
    //     return !userState.userEmail.length ||
    //     !userState.password.length ||
    //     !userState.confpassword.length ||
    //     !userState.email.length;
    // }

    // const handleSubmit = (e) =>{
    //     seterrorState(()=>[])
    //     if (checkForm()){
    //         firebase.auth()
    //         .createUserWithEmailAndPassword(userState.email,userState.password)
    //         .then(createdUser =>{
    //             console.log(createdUser);
    //         })
    //         .catch(servererror => {
    //             seterrorState((error) => error.concat(servererror));
    //             console.log(servererror);
    //         })
    //     }
        
    // }
    // const{ email,password,confpassword} = state;

    const signIn =() => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    // const updateuserDetails=(createdUser)=>{
    //     if(createdUser){
    //         createdUser.user.updateProfile({
    //             displayName:userState.userName
    //         })
    //         .then(()=>{
    //             saveUserInDB(createdUser);
    //         })
    //         .catch((servererror)=>{
    //             seterrorState((error)=> error.concat(servererror));
    //         })
    //     }
    // }

    // const saveUserInDB= (createdUser)=>{
    //     userCollectionRef.child(createdUser.user.uid).set({
    //         displayName : createdUser.user.displayName,
    //         photoURL: createdUser.user.photoURL
    //     })
    //     .then(()=>{
    //         console.log("user saved in db");

    //     })
    //     .catch(servererror =>{
    //         seterrorState((error)=> error.concat(servererror));
    //     })
    // }

    // const formaterrors=()=>{
    //     return errorState.map((error,index) => <p key={index}>{error.message}</p>)
    // }

    return (

        <body className="bg">
        <div className="login" >
            <div className="login__container">
                <img
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt=""
                />

                <h1>Sign in</h1>
                
                <Button onClick={signIn}>Sign in with Google</Button>
                <p>OR</p>
             <div className='form'>
                <form id="email">
              
              <input classname="email" style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="email" type="email" required placeholder="Email" />
            </form>

            <form id="password">
              
              <input classname="password" style={{width: '270px',position:"relative",padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="password" type="password"  required placeholder="Password" />
            </form>

            <form id="conf-password">
              
              <input classname="conf-password"  style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name ="confpassword"  type="password"  required placeholder="Confirm Password" />
            </form>
            
            </div>
            <Button >SignUp</Button>
            
            <p>Forgot password?</p>
            <p>Already using Slack?</p>
            <Link to="/Signin" style={{padding:"12px", textDecoration:"none", color: "white", margin: "12px", color:"pink"}}>Sign In to an existing workspace</Link>
            </div>
            {/* <h3>Error {formaterrors()}</h3> */}
        </div >
        </body>


    )

    }
    
    export default Login;





// import React from 'react'
// import "./Login.css";
// import { Button } from "@material-ui/core";
// import { auth, provider } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import { actionTypes } from "./reducer";

// const Login = () => {
//     const [state, dispatch] = useStateValue();

//     const signIn = () => {
//         auth.signInWithPopup(provider)
//             .then((result) => {
//                 dispatch({
                    
//                     type: actionTypes.SET_USER,
//                     user: result.user,
//                 });
//                 console.log("hi")
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     };

//     return (
//         <body className="bg">
//         <div className="login" >
//             <div className="login__container">
//                 <img
//                     src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
//                     alt=""
//                 />

//                 <h1>Sign in</h1>
//                 <p>Slack</p>
//                 <Button onClick={signIn}>Sign in with Google</Button>
//             </div>
//         </div >
//         </body>
//     )
// }

// export default Login