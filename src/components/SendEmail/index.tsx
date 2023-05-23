import React, { useRef } from 'react';
import './styles.scss';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSent, setIsSent] = React.useState(false);

  const sendEmail = handleSubmit(() => {
    if (form.current) {
      emailjs
        .sendForm('service_gmailMessageRM', 'template_ikqqo87', form.current, '1i5gLVxFRlX-z-9ES')
        .then((result) => {
          reset(); // Limpa o formulário
          setIsSent(prev => !prev)
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  });
  

  return (
    <div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='contact-form'>
            <h1>Envie aqui uma Sugestão!</h1>
            <label className='form-topic'>Nome</label>
            <input className='form-input' type="text" {...register('user_name', { required: true })} />
            {errors.user_name && <span className="error-message">Campo obrigatório</span>}

            <label className='form-topic'>Email</label>
            <input className='form-input' type="email" {...register('user_email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.user_email && errors.user_email.type === 'required' && <span className="error-message">Campo obrigatório</span>}
            {errors.user_email && errors.user_email.type === 'pattern' && <span className="error-message">Digite um email válido</span>}

            <label className='form-topic'>Digite sua mensagem</label>
            <textarea className='form-textarea' {...register('message', { required: true })}></textarea>
            {errors.message && <span className="error-message">Campo obrigatório</span>}

            <button className='form-submit' type="submit">Enviar</button>
            {isSent && (
                <>
                    <span className='footer-message-success'>{"Mensagem enviada com Sucesso"}</span>
                    <span className='footer-message'>{"Obrigado por entrar em contato!"}</span>
                </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
