import { Head, Link, useForm } from '@inertiajs/react';
import styles from "../../../css/Register.module.css";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <div className={styles.registerContainer}>
            <Head title="Register" />
            <h2 className={styles.registerHeader}>Register</h2>

            <form className={styles.registerForm} onSubmit={submit}>
                <div className={styles.registerNameContainer}>
                    <input type="name" name="name" value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Name" style={errors.name && errorBorder}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div className={styles.registerEmailContainer}>
                    <input type="email" name="email" value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email" style={errors.email && errorBorder}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={styles.registerPasswordContainer}>
                    <input type="password" name="password" value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Password" style={errors.password && errorBorder} />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className={styles.registerConfirmPasswordContainer}>
                    <input type="password" name="password_confirmation" value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        placeholder="Confirm Password" style={errors.password_confirmation && errorBorder} />
                     {errors.password_confirmation && <p>{errors.password_confirmation}</p>}
                </div>

                <button className={styles.registerButton} disabled={processing}>Register</button>

                <div className={styles.registerLoginLinkContainer}>
                    Already registered?
                    <Link className={styles.registerLoginLink}  href={route('login')}>Log in</Link>
                </div>
            </form>
        </div>
    );
}
