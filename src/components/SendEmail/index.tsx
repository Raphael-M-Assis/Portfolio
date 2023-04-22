import React, { useRef } from 'react';
import './styles.scss';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useContext } from "react";

const SendEmail = () => {
    const form = useRef<HTMLFormElement>(null);
    const [done, setDone] = useState(false);

    function inputClear() {
        const input = document.querySelectorAll('input');
        const textarea = document.querySelectorAll('textarea');

        input.forEach((item) => {
            item.value = '';
        });

        textarea.forEach((item) => {
            item.value = '';
        });
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        form.current && (emailjs.sendForm('service_gmailMessageRM', 'template_ikqqo87', form.current, '1i5gLVxFRlX-z-9ES'))
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

        inputClear();
    };

    return (
        <div>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact-form'>
                        <label className='form-topic'>Nome</label>
                        <input className='form-input' type="text" name="user_name"/>
                        <label className='form-topic'>Email</label>
                        <input className='form-input' type="email" name="user_email"/>
                        <label className='form-topic'>Digite sua mensagem</label>
                        <textarea className='form-textarea' name="message"></textarea>
                        <button className='form-submit' type="submit">Enviar</button>
                        <span className='footer-message'>{done && "Obrigado por entrar em contato!"}</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendEmail;