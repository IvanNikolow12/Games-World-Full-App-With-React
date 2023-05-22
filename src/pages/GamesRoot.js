import { Outlet } from "react-router-dom";
import GamesNavigation from "../components/GamesNavigation";

function GamesRoot() {
    return <>
    <GamesNavigation/>
    < Outlet />
    </>
}

export default GamesRoot