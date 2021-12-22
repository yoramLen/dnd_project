import {useState, useEffect} from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import styles from "./Contactform.module.css";


interface FormInput{
  firstName: string,
  lastName: string,
  email: string,
  message:string,
  address:string
}

const Contactform = () =>{
    const [sent, setSent] = useState<boolean>(false);



    useEffect(()=>{
        setSent(false);
    }, [])


    const SubmitHandler = ()=>{
      setSent(true);

      setTimeout(()=>{
        window.location.reload()
      },2000)

    }


return(
  
    <div className={styles.formAlign}>
      {sent?<Alert variant='success' className={styles.formWidth}>Your Email was sent successfully</Alert>:""}
            <Form className={styles.formWidth}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label className={styles.formlabel}>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  </Row>
  <Row className='mb-3'>
  <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="first name" placeholder="John" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="last name" placeholder="Doe"  />
    </Form.Group>


      
  </Row>
<Row>
<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
</Row>

  <Row className="mb-3">
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Row>


  <Button variant="danger" type="submit" onClick={()=>{SubmitHandler()}}>
    Submit
  </Button>
</Form>


    </div>




)


}


export default Contactform;