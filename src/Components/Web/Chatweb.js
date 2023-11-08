import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";

const Div = styled.div`
  display: flex;
  margin: 0 auto; 
  
`;

const Background= styled.div`
display:flex;
flex-direction: column;
justify-content: start;
width:375px;
height: 1245px;
margin: 0 auto;
  overflow-x: hidden;

`
const Chatweb = () => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleDelete = (message) => {
        ws.send(`DELETE:${JSON.stringify({ text: message })}`);
    };
   

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        socket.onopen = () => {
            console.log('Connected to the WebSocket');
        };

        socket.onmessage = async (e) => {
            let data = e.data;
            
            if (typeof data !== 'string') {
                if (data instanceof Blob) {
                    data = await data.text();
                } else {
                    return;
                }
            }
        
            if (data.startsWith('DELETED:')) {
                const msgToDelete = JSON.parse(data.split('DELETED:')[1]).text;
                setMessages(prevMessages => prevMessages.filter(msg => msg !== msgToDelete));
           }
           else {
                setMessages(prevMessages => [...prevMessages, data]);
            }
        };

        socket.onclose = () => {
            console.log('Disconnected from the WebSocket');
        };

        setWs(socket);

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        if (inputValue.trim() !== "") {
            ws.send(JSON.stringify({ text: inputValue }));
            setInputValue("");
        }
    };
   
    
    return (
        <Div>
            <Background>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message}
                        <button onClick={() => handleDelete(message)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            </Background>
        </Div>
    );
};

export default Chatweb;
