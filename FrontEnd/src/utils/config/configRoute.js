import CreateBook from "../../pages/AdminPages/Book/CreateBook";
import ListBook from "../../pages/AdminPages/Book/ListBook";
import RegisterBook from "../../pages/AdminPages/Book/RegisterBook";
import HeaderAdmin from "../../pages/AdminPages/Header/HeaderAdmin";
import IndexAdmin from "../../pages/AdminPages/Index/IndexAdmin";
import UserManager from "../../pages/AdminPages/User/UserManager";
import Login from "../../pages/Login/Login";
import PageNotFound from "../../pages/PageError/PageNotFound";
import Register from "../../pages/Register/Register";
import HeaderUser from "../../pages/UserPage/Header/HeaderUser";

// Public routes
export const publicRoutes = [
    //login
    { path: '/', component: Login },
    { path: '/login', component: Login },
    //register user
    { path: '/register', component: Register },
    //admin Page
    { path: '/adminPage', component: IndexAdmin, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/adminPage/indexAdmin', component: IndexAdmin, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/adminPage/userManager', component: UserManager, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/adminPage/bookManager/listBook', component: ListBook, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/adminPage/bookManager/createBook', component: CreateBook, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/adminPage/bookManager/registerBook', component: RegisterBook, layout: HeaderAdmin, pathLayout: '/adminPage' },
    { path: '/userPage', component: HeaderUser },
    { path: '*', component: PageNotFound },
];

// Private routes
export const privateRoutes = [];