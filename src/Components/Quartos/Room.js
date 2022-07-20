import React from 'react';
import { Routes, Route } from "react-router-dom"
import RegisterRoom from "./RegisterRoom";
import RegisteredRoom from "./RegisteredRoom";

const Room = () => {
    return (
        <>
            <Routes>
                <Route path={"cadastro"} element={<RegisterRoom />} />
                <Route path={"cadastrados"} element={<RegisteredRoom />} />
            </Routes>
        </>
    );
};

export default Room;