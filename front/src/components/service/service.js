import Cookies from 'js-cookie';

const loginUsers = (data) => {
    const {login, password} = data;
    if (login === 'testuser@gmail.com' && password === 'testuser_2025') {
        const token = 'asdasdasdasdasdasdasdasdasdasdads'
        Cookies.set('token', token);
        
        return {name: 'Нуржигит', surname: 'Карыпбеков', email: 'testuser@gmail.com'}
    }
}

export default loginUsers