import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  
  const [resp, setResp] = useState('')
  const [buttonOn, setButtonOn] = useState(false)
  const [lang] = useState(localStorage.getItem('language'))

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(
        form.current.user_name.value,
        form.current.user_email.value,
        form.current.message.value
    )

    // emailjs.sendForm('service_me2u88e', 'template_002jngj', form.current, 'OQF4MUAEJnnn30HE4')
    //   .then((result) => {
    //       form.current.user_name.value = '';
    //       form.current.user_email.value = '';
    //       form.current.message.value = '';
    //       setButtonOn(true)
    //       lang === 'Eng' ? setResp('Thanks for your message.') : setResp('Ačiū už jūsų žinutę.');
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };
 

    if(lang === 'ENG') {
      return (
        <form ref={form} onSubmit={sendEmail} >
          <div>
            <h1 className='susisiekti'>Contact me directly</h1>
          </div>
          <div>
            <label>Name</label>
          <input type="text" name="user_name" placeholder='Your name' required/> 
          </div>
            <div>
             <label>Email</label>
          <input type="email" name="user_email" placeholder='Your email' required/> 
            </div>
          <div>
            <label>Message</label>
          <textarea name="message" rows="4" cols="50" placeholder='Your message . . .' required/>
          </div>
          <div>
            <button className={buttonOn ? 'done' : null} type="submit" name='butt' value="Send" id={buttonOn ? 'contact-submit1' : 'contact-submit'} disabled={buttonOn} >Send</button>
            <div className='response'>{'Jūsų žinutė sėkmingai išsiųsta'}</div>
          </div>         
          
        </form>
      );
    }else if (lang === "LT"){
      return (
        <form ref={form} required onSubmit={sendEmail}>
          <div>
            <h1 className='susisiekti'>Susisiekite su manimi </h1>
          </div>       
          <div>
            <label>Vardas</label>
          <input type="text" name="user_name" placeholder='Vardas' required/> 
          </div>
            <div>
              <label>Paštas</label>
          <input type="email" name="user_email" placeholder='Paštas' required/>
            </div>
          <div>
            <label>Jūsų žinutė</label>
          <textarea name="message" rows="4" cols="50" placeholder='Žinutė . . . ' required/>
          </div>
          <div>
            <button  type="submit" name='butt' value="Send" id={buttonOn ? 'contact-submit1' : 'contact-submit'} disabled={buttonOn} >Siųsti</button>
            {resp && <div className='response'>{'Jūsų žinutė sėkmingai išsiųsta'}</div>} 
          </div>              
        </form>
      );
    }else {
        return (
          <form ref={form} required onSubmit={sendEmail}>
            <div>
              <h1 className='susisiekti'>Susisiekite su manimi </h1>
            </div>       
            <div>
              <label>Vardas</label>
            <input type="text" name="user_name" placeholder='Vardas' required/> 
            </div>
              <div>
                <label>Paštas</label>
            <input type="email" name="user_email" placeholder='Paštas' required/>
              </div>
            <div>
              <label>Jūsų žinutė</label>
            <textarea name="message" rows="4" cols="50" placeholder='Žinutė . . . ' required/>
            </div>
            <div>
              <button  type="submit" name='butt' value="Send" id={buttonOn ? 'contact-submit1' : 'contact-submit'} disabled={buttonOn} >Siųsti</button>
              {resp && <div className='response'>{'Jūsų žinutė sėkmingai išsiųsta'}</div>} 
            </div>              
          </form>
        );
      }
};

export default ContactUs;