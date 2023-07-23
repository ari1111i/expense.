import React, { useState } from 'react'
import { styled } from 'styled-components'
import Card from '../UI/card/Card'
import FormInput from '../UI/input/FormInput'
import Button from '../UI/button/Button'

const Login = ({ onLogin }) => {
	const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

	const handleLogin = () => {

		if (email.length === 8 && password.length === 8) {
		  onLogin();
		} else {
		  alert('Логин и пароль должны состоять не менее из 8 символов.');
		}
	  };

	return (
		<StyledCard>
			<StyledForm>
				<FormInput
				    placeholder='Email'
					label='Email'
					containerClassName='field'
					value={email}
                    onChange={(e) => setUsername(e.target.value)}
					// error={false}
				/>
				<FormInput
				    placeholder='Password'
					label='Password'
					containerClassName='field'
					type='password'
					value={password}
                    onChange={(e) => setPassword(e.target.value)}
					// error={false}
				/>
				<StyledButton onClick={handleLogin} type='submit'>Login</StyledButton>
			</StyledForm>
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
	width: 50rem;
	max-width: 90%;
	margin: 0 auto;
	padding: 2rem 1.5rem;
	margin-top: 5rem;
`

const StyledForm = styled('form')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	.field {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.field > label {
		flex: 1;
	}
	.field > input {
		flex: 5;
	}
`
const StyledButton = styled(Button)`
	align-self: center;
`

export default Login
