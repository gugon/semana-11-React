import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";


import Home from "./Home";
import AppExe1 from "./[M3S09] Ex 1/AppExe1";
import AppExe2 from "./[M3S09] Ex 2/AppEx2";
import AppExe3 from "./[M3S11] Ex 3 /AppEx3";
import AppExe4 from "./[M3S11] Ex 4/AppEx4";
import AppExe5 from "./[M3S11] Ex 5/AppEx5";
import AppExe6 from "./[M3S11] Ex 6/AppEx6";

function Routes() {
    return (
        <RoutesDom>
            <Route index element={<Home />} />
            <Route path="exercicio1" element={ <AppExe1 />} />
            <Route path="exercicio2" element={ <AppExe2 />} />
            <Route path="exercicio3" element={ <AppExe3 />} />
            <Route path="exercicio4" element={ <AppExe4 />} />
            <Route path="exercicio5" element={ <AppExe5 />} />
            <Route path="exercicio6" element={ <AppExe6 />} />
        </RoutesDom>        
    );
}

export default Routes;