import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status }) {
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

    return (
        <div>
            <Head title="Log in" />

            {status && (
                <div>
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="email">Email</label>

                    <input type="email" name='email' value={data.email}
                        onChange={(e) => setData('email', e.target.value)} />

                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>

                    <input name="password" type="password" value={data.password}
                        onChange={(e) => setData('password', e.target.value)}/>

                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>
                        <input type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked) }
                        />
                        <span>Remember me</span>
                    </label>
                </div>

                <div>
                    You don't have an account?
                    <Link href={route('register')}>Register</Link>
                    <button disabled={processing}>Log in</button>
                </div>
            </form>
        </div>
    );
}
