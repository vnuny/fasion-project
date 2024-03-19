"use client";
import '../css/aichat.css';
import Image from 'next/image'
import logo from '../../../public/logoLight.png'

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai'
import { useState, useRef, useEffect } from 'react';

const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyDibewH-fbqk1uD9JTejh_g59h7FSatF6A";

const botMessage = (message:any, i:any) => {
    if (message.content.includes('**')) {
        const regex = /\*\*(.*?)\*\*/g;
        let htmlText = message.content.replace(regex, '<span style="font-weight: 700; font-size: 20px; margin-bottom: 200px;">$1</span>')
        return (
            <div className="botMessage" key={i}>
                <div className="left">
                    <img className='avatar' src='https://i.pinimg.com/564x/7b/ac/c2/7bacc2565abbb536a6319822abaa8a0d.jpg' alt="logo" width={100} height={100} />
                </div>
                <div className="right">
                    <h3>FASION-ASSISTANT</h3>
                    {htmlText !== '' && (
                        <p style={{ marginBottom: '15px', whiteSpace: 'pre-line' }}>
                            <span dangerouslySetInnerHTML={{ __html: htmlText }} />
                        </p>
                    )}
                    <p style={{ whiteSpace: 'pre-line' }}>{message.time}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="botMessage" key={i}>
                <div className="left">
                    <img className='avatar' src='https://i.pinimg.com/564x/7b/ac/c2/7bacc2565abbb536a6319822abaa8a0d.jpg' alt="logo" width={100} height={100} />
                </div>
                <div className="right">
                    <h3>FASION-ASSISTANT</h3>
                    <p>{message.content}</p>
                    <p style={{ whiteSpace: 'pre-line' }}>{message.time}</p>
                </div>
            </div>
        )
    }
}

const userMessage = (message:any, i:any) => {
    return (
        <div className="botMessage" key={i}>
            <div className="left leftUser">
                <Image className='avatar avatarUser' src={logo} alt="logo" width={100} height={100} />
            </div>
            <div className="right">
                <h3>USER</h3>
                <p>{message.content}</p>
                <p>{message.time}</p>
            </div>
        </div>
    )
}

function getCurrentDateTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes:any = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const formattedDateTime = `${hours}:${minutes} ${ampm} ${month}/${day}/${year}`;
    return formattedDateTime;
}

export default function ChatAi({close}:any) {
    const [message, setMessage] = useState('');
    const [renderMessages, setRenderMessages] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([
        {
            role: 'user',
            parts: [{ text: 'you are a website called fasion and you are ai assistant in it, you can\'t talk with anything else, the website contact data is (email: fasion@gamil.com, phonenumber: \'0123456789\', loaction: \'usa-california-31steet\')' }]
        },
        {
            role: 'model',
            parts: [{ text: 'sure' }]
        },
    ]);
    const lastMessageRef:any = useRef(null);

    async function runChat(message:any) {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        const generationConfig = {
            temperature: 0.9,
            topK: 1,
            topP: 1,
            maxOutputTokens: 2048,
        };

        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                threshold: HarmBlockThreshold.BLOCK_NONE,
            },
        ];

        const chat = model.startChat({
            generationConfig,
            safetySettings,
            history: history,
        });
        const result = await chat.sendMessage(message);
        const response = result.response;
        return response.text();
    }

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [renderMessages]);

    const handleSend = async () => {
        setMessage('');
        const userRenderForm = {
            role: 'user',
            content: message,
            time: getCurrentDateTime()
        }
        setRenderMessages(prevMessages => [...prevMessages, userRenderForm]);
        if (message.length <= 0) {
            return;
        }
        try {
            const botResponse = await runChat(message);
            const botRenderForm = {
                role: 'bot',
                content: botResponse,
                time: getCurrentDateTime()
            }
            setRenderMessages(prevMessages => [...prevMessages, botRenderForm]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const initialBotMessage = {
            role: 'bot',
            content: 'Hi there! I\'m here to help you with anything fashion-related',
            time: getCurrentDateTime()
        };
        setRenderMessages([initialBotMessage]);
    }, []);

    return (
        <div className='AiChatBox'>
            <div className="header">
                <div className="logo">
                    <Image src={logo} alt="logo" width={100} height={100} />
                    <h3>FASION</h3>
                </div>
                <div className="close" onClick={close}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="chatSection">
                {renderMessages.map((message, index) => {
                    if (message.role === 'user') {
                        return userMessage(message, index);
                    } else if (message.role === 'bot') {
                        return botMessage(message, index);
                    }
                    return null;
                })}
                <div ref={lastMessageRef}></div>
            </div>
            <div className="inputSec">
                <input value={message} onKeyDown={(e) => e.key === 'Enter' && handleSend()} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="ASK Here..." />
                <button onClick={handleSend}><i className="fa-solid fa-paper-plane-top"></i></button>
            </div>
        </div>
    );
}
