import Cookies from 'js-cookie';

const AdminPage = () => {
    let token = Cookies.get('token');
    console.log(token);

    return(
        <div>
            <h1>Admin Page</h1>
        </div>
    )
}

export default AdminPage;