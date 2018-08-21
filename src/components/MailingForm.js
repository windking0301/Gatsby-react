import React from 'react'
import styled from 'styled-components'
import { below } from "../styles/functions";
import Button from "../components/Button"
import Input from "../components/Input"

import { colors, textStyles } from '../styles/vars'

const MailingForm = () => (

		<MailingFormContainer >
			<Input name='email' label='Email' type='email' required='true' />
			<Button to='/' >Submit</Button>
		</MailingFormContainer>

)

export default MailingForm

const MailingFormContainer = styled.form`
  
`
