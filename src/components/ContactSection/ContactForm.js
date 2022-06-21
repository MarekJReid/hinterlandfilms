import React from "react";
import { useForm } from "react-hook-form";
import styled from 'styled-components';
export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
  <FormGroup>
  <input type="input"  class="form__field" placeholder="Name" name="name" id='name' required  />
      <label for="name" class="form__label">Name</label>
  </FormGroup>
   <FormGroup>    <input type="input"  class="form__field" placeholder="Phone" name="phone" id='phone'  />
      <label for="phone" class="form__label">Phone Number</label>

   </FormGroup>
   <FormGroup>    <input type="text"  class="form__field" placeholder="Message" name="message" id='message'  />
      <label for="message" class="form__label">Leave a Message here</label>

   </FormGroup>
      {/* include validation with required or other standard HTML validation rules */}
   
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <SubmitButton>
        Send
        </SubmitButton>
    </Form>
  );
}

export const Form = styled.form`
  width: 100%;
`;
export const FormGroup = styled.form`
{
    position: relative;
    padding: 15px 0 0;
    margin-top: 40px;
    width: 100%;
  }
$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;


input  {
  font-family: inherit;
  width: 100%;
  height: 2.5rem;
  border-top: 1px;
  border-right: 1px;
  border-left: 1px;
  border-width: 3px;
  border-image: linear-gradient(to left,  #603601, #ffeead);
  border-image-slice: 1;
  
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #ffeead;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color:  #603601;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right,  #603601, #ffeead);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
/* demo */
body {
  
`;

export const SubmitButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 4rem;
	// box-shadow:inset 0px 1px 0px 0px #f29c93;
	background:#603601;
	
	border-radius:2px;
	height: 3rem;
    width: 15rem;
    
	cursor:pointer;
	color:#ffeead;
	font-family:Arial;
	font-size:1.8rem;
	font-weight:bold;
	
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
    transition: all .2s ease-in-out;
:hover {
	transform: scale(1.05);
    top: 5px;
	// background: #ffeead;
    // color: #603601;
}
:active {
	position:relative;
	top:3px;
}

    
  
`;