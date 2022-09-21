import React from "react";

const Test = () => {
    return (
        <div>
            <h1 className="py-5">Test</h1>
            <div id="message-container"></div>
            <form id="send-mess">
                <input type="text" id="mess" placeholder="Message" />
                <button id="sendMess" type="submit">
                    Send Mess
                </button>
            </form>
            <script
                defer
                src="http://localhost:4000/socket.io/socket.io.js"
            ></script>
            <script defer type="module" src="./chatscrip.js"></script>
        </div>
    );
};

export default Test;
