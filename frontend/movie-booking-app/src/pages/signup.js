import Layout from './layout'
import { getCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SignupPage({ username }) {
    const router = useRouter()
    const { msg } = router.query

    const handleSignup = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const passwordagain = formData.get('passwordagain');

        // Check if passwords match
        if (password !== passwordagain) {
            console.error('Passwords do not match');
            return;
        }

        // Call the API
        try {
            const response = await fetch('http://localhost:5000/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username, // Assuming username is the email
                    password: password,
                }),
            });

            if (response.ok) {
                // Successful signup
                const data = await response.json();
                console.log('Signup successful:', data);
                router.push('/'); // Redirect to home page or wherever you want
            } else {
                // Handle signup error
                const errorData = await response.json();
                console.error('Signup error:', errorData.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };


    return (
        <Layout pageTitle="Signup">
            <Link href="/">Home</Link><br />
            {msg ?
                <h3 className="red">{msg}</h3>
                :
                <></>
            }
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' required></input><br />
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br />
                <input minLength="5" name="passwordagain" id="passwordagain" type="password" placeholder='password again' required></input><br />
                <input type="submit" value="Signup" />
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    if (username != undefined) {
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: { username: false } };
};