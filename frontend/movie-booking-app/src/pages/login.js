import Layout from './layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginPage( {username} ) {
    const router = useRouter()
    const { msg } = router.query

    const handleLogin = async (event) => {
        event.preventDefault();
    
        // Get the form data
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
    
        try {
          // Make the API call to check user's email and password
          const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            // Successful login, you may want to handle the response accordingly
            router.push('/'); // Redirect to the home page after successful login
          } else {
            // Handle unsuccessful login
            const errorData = await response.json();
            console.error('Login failed:', errorData);
            router.push('/login?msg=Login failed');
          }
        } catch (error) {
          console.error('Error during login:', error);
          router.push('/login?msg=An error occurred during login');
        }
      };

    return (
        <Layout pageTitle="Login">
            <Link href="/">Home</Link><br/>
            {msg ?
                <h3 className="red">{msg}</h3>
            :
                <></>
            }
            <h2>Log in</h2>
            <form onSubmit={handleLogin}>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br/>
                <input type="submit" value="Login"/>
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};