import { Head, Link, useForm } from '@inertiajs/react';

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

    return (
        <div>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="name" name="name" value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required/>
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>

                    <input type="email" name="email" value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required/>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <input type="password" name="password_confirmation" value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required />
                     {errors.password_confirmation && <p>{errors.password_confirmation}</p>}
                </div>

                <div>
                    <Link href={route('login')}>Already registered?</Link>
                    <button disabled={processing}>Register</button>
                </div>
            </form>
        </div>
    );
}
