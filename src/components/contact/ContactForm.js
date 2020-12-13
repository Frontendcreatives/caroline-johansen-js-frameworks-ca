import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const formInput = Yup.object().shape({
    fname: Yup.string()
            .min(2, 'First name must be minimum 2 characters')
            .required("First name is required"),
    lname: Yup.string()
            .min(2, 'Last name must be minimum 2 characters')
            .required("Last name is required"),
    
    email: Yup
            .string()
            .email("Email not valid, try again")
            .required("Email is required"),
    
    message: Yup.string()
            .min(10, 'Message must be minimum 10 characters')
            .required('Message is required'),
      
       
});



function ContactForm() {
    
    const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formInput),
});
    
    function onSubmit(data) {
        alert("Message sent!")
        console.log("data", data);
    }
    
    return ( 
       <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="fname" placeholder="Enter your first name" ref={register} />
                {errors.fname && <p>{errors.fname.message}</p>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lname" placeholder="Enter your last name" ref={register} />
                {errors.lname && <p>{errors.lname.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email"  placeholder="Enter your email" ref={register} />
                {errors.email && <p>{errors.email.message}</p>}
            </Form.Group>


            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control  name="message"  placeholder="Enter your message" ref={register} />
                {errors.message && <p>{errors.message.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
           );
    
}

export default ContactForm;
