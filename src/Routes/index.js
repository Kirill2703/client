import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminMainPage from "../admin/pages/admin/admin-main-page";
import CountriesList from "../admin/pages/countries/countries-list";
import GenresList from "../admin/pages/genres/genres-list";
import GenreCreate from "../admin/pages/genres/genreCreate";
import GenreUpdate from "../admin/pages/genres/genreUpdate";
import ActorsList from "../admin/pages/actors/actors-list";
import ActorCreate from "../admin/pages/actors/actorsCreate";
import ActorUpdate from "../admin/pages/actors/actorsUpdate";
import TypeList from "../admin/pages/type/typeList";
import TypeUpdate from "../admin/pages/type/typeUpdate";
import TypesCreate from "../admin/pages/type/typesCreate";
import FilmmakersList from "../admin/pages/filmmakers/filmmakersList";
import FilmmakersCreate from "../admin/pages/filmmakers/filmmakersCreate";
import FilmmakersUpdate from "../admin/pages/filmmakers/filmmakersUpdate";
import MoviesList from "../admin/pages/movies/moviesList";
import MoviesCreate from "../admin/pages/movies/moviesCreate";
import MoviesUpdate from "../admin/pages/movies/moviesUpdate";
import PageHome from "../client/pages/home/pageHome";
import MoviePage from "../client/pages/movie/moviePage";
import Main from "../client/pages/Main";
import Country from "../client/pages/country/country";
import Genre from "../client/pages/genre/genre";
import Login from "../client/pages/auth/login"
import Register from "../client/pages/auth/registr";
import ActivateUser from "../client/pages/activateUser/activateUser"
// import Actor from '../client/pages/actor/actor'
import Type from "../client/pages/type/type";
import Filmmaker from '../client/pages/filmmaker/filmmaker'
import Search from "../client/pages/search/search";
import RecoverPassword from "../client/pages/auth/recoverPassword";
import CheckMail from "../client/pages/auth/checkMail";
import ChangePassword from "../client/pages/auth/changePassword";
import Subscribe from "../client/pages/subscribe/subscribe";
import Actor from "../client/pages/actor/actor";

const admin = {
  path: "admin",
  element: <AdminMainPage />,
  children: [
    {
      path: "countries",
      element: <CountriesList />,
      // children: [
      //   {
      //     path: "create",
      //     element: <h3>Countries create</h3>,
      //   },
      // ],
    },
    {
      path: "genres",
      element: <GenresList />,
    },
    {
      path: "genres/create",
      element: <GenreCreate />,
    },
    {
      path: "genres/update/:id",
      element: <GenreUpdate />,
    },
    {
      path: "actors",
      element: <ActorsList />,
    },
    {
      path: "actors/create",
      element: <ActorCreate />,
    },
    {
      path: "actors/update/:id",
      element: <ActorUpdate />,
    },
    {
      path: "types",
      element: <TypeList />,
    },
    {
      path: "types/create",
      element: <TypesCreate />,
    },
    {
      path: "types/update/:id",
      element: <TypeUpdate />,
    },
    {
      path: "filmmakers",
      element: <FilmmakersList />,
    },
    {
      path: "filmmakers/create",
      element: <FilmmakersCreate />,
    },
    {
      path: "filmmakers/update/:id",
      element: <FilmmakersUpdate />,
    },
    {
      path: "movies",
      element: <MoviesList />,
    },
    {
      path: "movies/create",
      element: <MoviesCreate />,
    },
    {
      path: "movies/update/:id",
      element: <MoviesUpdate />,
    },
  ],
};

const client = {
  path: "",
  element: <Main />,
  children: [
    {
      index: true,
      element: <PageHome />,
    },
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
    {
      path: "/country/:id",
      element: <Country />,
    },
    {
      path: "/genres/:id",
      element: <Genre />,
    },
    {
      path: "/types/:id",
      element: <Type />,
    },
    {
      path: "/actors/:id",
      element: <Actor />,
    },
    {
      path: "/filmmakers/:id",
      element: <Filmmaker />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/recover-password",
      element: <RecoverPassword />,
    },

    {
      path: "/check-your-email",
      element: <CheckMail />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },

    {
      path: "/activate",
      element: <ActivateUser />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/subscribes",
      element: <Subscribe />,
    },
  ],
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [admin, client],
  },
]);

export default router;
