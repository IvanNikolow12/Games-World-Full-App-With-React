import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm'
import Footer from '../components/Footer';

function LoginPage() {
    return <>
    <AuthForm />
    <Footer/>
    </>
}

export default LoginPage;

export async function action({request, params}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if(mode !== 'login' && mode !== 'signup') {
        throw json({message: 'Unsupported mode.'}, {status: 422})
    }
    const data = await request.formData();

    let url;
    let authData;
    if(mode === 'login') {
        authData = {
            email: data.get('email'),
            password: data.get('password')
        }
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key={ApiKey}`
    } else {
        authData = {
            email: data.get('email'),
            password: data.get('password'),
            repeatPassword: data.get('repeat-password')
        }
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key={ApiKey}`
    }
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if(response.status === 422 || response.status === 401) {
        return response;
    }

    if(!response.ok) {
        throw json({message: 'Could not authenticate user.'}, {status: 500});
    }

    const resData = await response.json();
    const token = resData.idToken;

    localStorage.setItem('token', token);
    

    return redirect('/games')
}
