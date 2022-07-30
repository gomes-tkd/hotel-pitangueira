import React from 'react';
import { Routes, Route } from "react-router-dom"
import RegisterRoom from "./RegisterRoom";
import RegisteredRoom from "./RegisteredRoom";
import EditRoom from "./EditRoom";

const Room = () => {

    return (
        <>
            <Routes>
                <Route path={"cadastro"} element={<RegisterRoom />} />
                <Route path={"cadastrados"} element={<RegisteredRoom />} />
                <Route path={`:id/editar`} element={<EditRoom />} />
            </Routes>
        </>
    );
};

export default Room;