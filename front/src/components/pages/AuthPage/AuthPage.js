import { useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom'; // Используем Navigate вместо Redirect
import loginUsers from "../../service/service";
import './AuthPage.scss';
import { useState } from 'react'; // Добавляем хук useState

const AuthPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [redirect, setRedirect] = useState(false); // Состояние для перенаправления

    const onSubmit = (data) => {
        console.log(data);
        const user = loginUsers(data);
        if (user) {
            console.log("Пользователь авторизован:", user);
            setRedirect(true); // Устанавливаем состояние для перенаправления
        }
    };

    // Если redirect === true, перенаправляем на /admin
    if (redirect) {
        return <Navigate to="/admin" />;
    }
    let color;
    return (
        <div className="auth">
            <div className="container">
                <div className="auth-Illustration"></div>
                <div className="auth-block">
                    <h1>
                        Добро пожаловать в<br />
                        <span>Gippokrat</span>
                    </h1>
                    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                placeholder="Логин"
                                className="auth-form__login"
                                {...register("login", { required: true })}
                            />
                            {errors.login && <span>Вы пропустили поле!</span>}
                        </div>
                        <div>
                            <input style={{border: errors.password ? 'red solid 1px' : 'none'}}
                                placeholder="Пароль"
                                className="auth-form__password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span>Вы пропустили поле!</span>}
                        </div>
                        <input className="auth-form__button" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;