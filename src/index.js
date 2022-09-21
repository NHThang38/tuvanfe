import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Introduce from "./components/Introduce";
import Specialty from "./components/Specialty";
import RequestME from "./components/RequestME";
import Chats from "./components/Chats";
import Tests from "./components/Test";
import { AuthProvider } from "./Context/AuthProvider";
import { RequestAndChat } from "./components/RequestAndChat";
import { OpenConversation } from "./components/OpenConversation";
import { ConversationProvider } from "./Context/ConversationProvider";
import { SocketProvider } from "./Context/SocketProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        
        <AuthProvider>
            {/* <SocketProvider> */}
        {/* <ConversationProvider> */}
            <Routes>
                <Route exact path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                    <Route path="intro" element={<Introduce />} />
                    <Route path="speci" element={<Specialty />} />
                    <Route path="request" element={<RequestME />} />
                    <Route path="chats" element={<Chats />} />
                    <Route path="tests" element={<Tests />} />
                    <Route path="requestchat" element={<RequestAndChat />} />
                    <Route path="open" element={<OpenConversation/>} />
                </Route>
            </Routes>
            {/* </ConversationProvider> */}
            {/* </SocketProvider> */}
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
