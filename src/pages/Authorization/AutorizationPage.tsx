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
import { UserRegistrationData } from './RegistrationPage';

function AutorizationPage() {
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
        <SecondaryLink href="/">Back to home</SecondaryLink>
        <h1>Sign In</h1>
        <FormContainer>
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

          <ConfirmSection>
            <FormButton buttonStyle={ButtonStyle.Primary}>Sign In</FormButton>
            <div>
              Forgot password?
              <PrimaryLink href={'/'}> Reset Password</PrimaryLink>
            </div>
            <div>
              Don't have an aacount?
              <PrimaryLink href={'/'}> Sign Up</PrimaryLink>
            </div>
          </ConfirmSection>
        </FormContainer>
      </ContentContainer>
    </div>
  );
}

export default AutorizationPage;
