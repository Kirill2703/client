import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminMainPage from "../admin/pages/admin/admin-main-page";
import CountriesList from "../admin/pages/countries/countries-list";
import GenresList from "../admin/pages/genres/genres-list";
import GenreCreate from "../admin/pages/genres/genreCreate";
import GenreUpdate from "../admin/pages/genres/genreUpdate";
import ActorsList from "../admin/pages/actors/actors-list";
import ActorCreate from '../admin/pages/actors/actorsCreate';
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

const client = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [admin, client],
  },
]);

export default router;
