import { Head, Link, useForm } from '@inertiajs/react';
import styles from "../../../css/Login.module.css";

export default function Login() {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <div className={styles.loginContainer}>
            <Head title="Log in" />
            <h2 className={styles.loginHeader}>Login</h2>

            <form className={styles.loginForm} onSubmit={submit}>
                <div className={styles.loginEmailContainer}>
                    <input type="email" name="email" value={data.email} placeholder="Email"
                        onChange={(e) => setData('email', e.target.value)}
                        style={errors.email && errorBorder} />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={styles.loginPasswordContainer}>
                    <input name="password" type="password" value={data.password}
                        placeholder="Password" onChange={(e) => setData('password', e.target.value)}
                        style={errors.password && errorBorder} />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className={styles.loginRememberBoxContainer}>
                    <input type="checkbox"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked) }/>
                    <span>Remember me</span>
                </div>

                <button className={styles.loginButton} disabled={processing}>Log in</button>

                <div className={styles.loginRegisterLinkContainer}>
                    You don't have an account?
                    <Link className={styles.loginRegisterLink} href={route('register')}>Register</Link>
                </div>
            </form>
        </div>
    );
}
