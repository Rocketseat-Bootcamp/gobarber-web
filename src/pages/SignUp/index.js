import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatorio.'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres.')
    .required('A senha é obrigatória.'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
