import { useState } from "react"


function Login() {

    const initialState = useState({
        username:'',
        password:'',
        userToLogIn: false,
    })
    const [message, setMessage] = useState('')
    const [formState, setFormState] = useState(initialState)
    const [userToLogIn, setUserToLogin] = useState()
    const [loggedIn, setIsLoggedIn]= useState()

    const signIn = async () => {
        try {
            const requestData = {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    username: formState.username,
                    password: formState.password
                })
            }
            const logInResponse = await fetch('http://localhost:4000/session/login', requestData);
            const loginJson = await logInResponse.json();
            console.log(loginJson);
            console.log(logInResponse);
            if(loginJson.loggedIn) {
                setIsLoggedIn(loginJson.loggedIn);
                setUserToLogin(loginJson.user);
                setMessage(`Welcome ${userToLogIn.username}`);
                console.log('logged in ')
            }
            (await loginJson.loggedIn) ? setIsLoggedIn(true) : setIsLoggedIn(false);

        } catch (err){
            console.log(err)
        }
    }

    const handleChange = (e) => {
        // console.log('handlechange')
          setFormState({
            ...formState,
            [e.target.id]: e.target.value,
          });
        };
      
       
        const handleSubmit = (e) => {
          // console.log('handlesubmit')
          e.preventDefault();
          setFormState({ ...formState });
          signIn();
         
        };
          



    return(
        <div>
            <form onSubmit={handleChange} className='form'>
            <div className='logInForm'>
                <input
                    name='username'
                    type='text'
                    id='username'
                    placeholder='Username'
                    value={formState.username}
                    onChange={handleChange}
                />
          
            </div>

            <div className='logInForm'>
                <input
                    name='password'
                    type='password'
                    id='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={handleChange}
                />
          
          
            </div>

        
            <button
                className='button'
                type='button'
                onClick={handleSubmit}
            >
          
            <div className='text'>Log In</div>
          
            </button>
        

            </form>
        </div>
    )
}

export default Login