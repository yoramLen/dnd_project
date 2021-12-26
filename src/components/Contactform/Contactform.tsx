import {useState, useEffect, useRef} from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import styles from "./Contactform.module.css";
import emailjs from "emailjs-com"


interface FormInput{
  firstName: string,
  lastName: string,
  email: string,
  message:string,
  address:string
}

  

const Contactform = () =>{
    const [sent, setSent] = useState<boolean>(false);
    const form = useRef<HTMLFormElement>(null);



    useEffect(()=>{
        setSent(false);
        emailjs.init('user_XQlCB7S5hRa6EpNOf0Zxf');
    }, [])

    const sendEmail = (e:any) => {
      e.preventDefault();
      setSent(true);
      emailjs.sendForm('dndservice', 'template_wpu6krp', form.current!, 'user_XQlCB7S5hRa6EpNOf0Zxf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setTimeout(()=>{window.location.reload()},2000)
    };


return(
  
    <div className={styles.formAlign}>
      {sent?<Alert variant='success' className={styles.formWidth}>Your Email was sent successfully</Alert>:""}
      <Form ref={form} onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name="user_email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="John Doe" name="user_name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} name={"message"} />
  </Form.Group>
  <Button variant="danger" type="submit" value="send">
    Submit
  </Button>
</Form>  

    </div>




)


}


export default Contactform;