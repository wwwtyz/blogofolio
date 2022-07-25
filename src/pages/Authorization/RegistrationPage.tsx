import React from 'react';

import { ButtonStyle } from 'components/Button/Button';
import FormButton from 'components/Button/FormButton';
import Input from 'components/Input/Input';
import {
  ConfirmSection,
  ContentContainer,
  FormContainer,
  PrimaryLink,
  SecondaryLink
} from './authorization.styled';
import { AppRoute } from 'enums/router';

export interface UserRegistrationData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function RegistrationPage() {
  const [formData, setFormData] = React.useState<UserRegistrationData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div
      style={{
        maxWidth: '1120px',
        margin: '100px auto 0',
        textAlign: 'center'
      }}
    >
      <ContentContainer>
        <SecondaryLink to={AppRoute.Main}>Back to home</SecondaryLink>
        <h1>Sign Up</h1>
        <FormContainer>
          <Input
            value={formData.username}
            onChange={({ currentTarget: { value } }) => {
              setFormData((prevState) => ({
                ...prevState,
                username: value
              }));
            }}
            label="Name"
            autoComplete="username"
          ></Input>
          <Input
            value={formData.email}
            onChange={({ currentTarget: { value } }) => {
              setFormData((prevState) => ({ ...prevState, email: value }));
            }}
            label="Email"
            type="email"
            autoComplete="email"
          ></Input>
          <Input
            value={formData.password}
            onChange={({ currentTarget: { value } }) => {
              setFormData((prevState) => ({ ...prevState, password: value }));
            }}
            label="Password"
            type="password"
            autoComplete="new-password"
          ></Input>
          <Input
            label={'Confirm Password'}
            type={'password'}
            value={formData.confirmPassword}
            autoComplete="new-password"
            onChange={({ currentTarget: { value } }) => {
              setFormData((prevState) => ({
                ...prevState,
                confirmPassword: value
              }));
            }}
          ></Input>
          <ConfirmSection>
            <FormButton buttonStyle={ButtonStyle.Primary}>Sign In</FormButton>
            <div>
              Already have an account?
              <PrimaryLink to={AppRoute.Login}> Sign In</PrimaryLink>
            </div>
          </ConfirmSection>
        </FormContainer>
      </ContentContainer>
    </div>
  );
}

export default RegistrationPage;
