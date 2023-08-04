// import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { StyleSheetManager } from 'styled-components';




function DefaultLayout(){

    return (
<>
<StyleSheetManager shouldForwardProp={(prop) => prop !== 'data-changebackground'}>
<Header/>
</StyleSheetManager>
<Outlet/>

</>
    )
}

export default DefaultLayout 



