import React from 'react';
import PropTypes from 'prop-types';

import bonsaiImg from './../../assets/images/Validation/bonsai.png';

import fernImg from './../../assets/images/Validation/fern.png';

import classes from './ValidationForm.module.css';

import { Link } from 'react-router-dom';

import { isMobile } from 'mobile-device-detect';

import Input from './../UI/Input/Input';

import validationFormData from './../../utils/validationForm';

const ValidationForm = (props) => {
	const inputsForRegister = Object.keys(validationFormData).map((val) => (
		<Input
			key={val}
			error={props.errors[val]}
			{...validationFormData[val]}
			validationRef={props.register(validationFormData[val].validation)}
		/>
	));

	let form = (
		<main>
			<section className={classes.signup}>
				<div className={classes.container}>
					<div className={classes.signupContent}>
						<div className={classes.signupForm}>
							<i
								className={`fas fa-arrow-left ${classes.goBackLink}`}
								onClick={props.goBack}
							></i>

							<h2 className={classes.formTitle}>Sign up</h2>
							<form
								method='POST'
								className={classes.registerForm}
								id='register-form'
								onSubmit={props.submit(props.dataSubmission)}
							>
								{inputsForRegister}

								<div className={classes.formGroup}>
									<input
										type='checkbox'
										name='agree-term'
										id='agree-term'
										className={classes.agreeTerm}
										ref={props.register({
											required: {
												value: true,
												message: 'Agreement is mandatory',
											},
										})}
									/>
									<label
										htmlFor='agree-term'
										className={classes.labelAgreeTerm}
									>
										<span
											style={{
												border: props.errors['agree-term'] && '1px solid red',
											}}
										>
											<span></span>
										</span>
										I agree all statements in
										<a href='#' className={classes.termService}>
											Terms of service*
										</a>
									</label>
								</div>

								<div className={`${classes.formGroup} ${classes.formButton}`}>
									<input
										type='submit'
										name='signup'
										id='signup'
										className={classes.formSubmit}
										value='Register'
									/>
								</div>
							</form>
						</div>
						<div className={classes.signupImage}>
							<figure>
								<img
									src={bonsaiImg}
									alt='sign up'
									style={{ width: isMobile ? '65%' : '100%' }}
								/>
							</figure>
							<Link to='/login' className={classes.signupImageLink}>
								I am already member
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);

	if (!props.signup) {
		const validationFormDataLogin = {
			name: validationFormData.name,
			pass: validationFormData.pass,
		};

		const inputsForLogin = Object.keys(validationFormDataLogin).map((val) => (
			<Input
				key={val}
				error={props.errors[val]}
				{...validationFormDataLogin[val]}
				validationRef={props.register(validationFormDataLogin[val].validation)}
			/>
		));

		form = (
			<main>
				<section className={classes.signup}>
					<div className={classes.container}>
						<div className={classes.signupContent}>
							<div className={classes.signinImage}>
								<figure>
									<img
										src={fernImg}
										alt='sign in'
										style={{ width: isMobile ? '50%' : '100%' }}
									/>
								</figure>
								<Link to='/signup' className={classes.signupImageLink}>
									Create an account
								</Link>
							</div>

							<div className={classes.signinForm}>
								<i
									className={`fas fa-arrow-left ${classes.goBackLink}`}
									onClick={props.goBack}
								></i>
								<h2 className={classes.formTitle}>Log in</h2>

								<form
									method='POST'
									className={classes.registerForm}
									id='login-form'
									onSubmit={props.submit(props.dataSubmission)}
								>
									{inputsForLogin}
									<div className={`${classes.formGroup} ${classes.formButton}`}>
										<input
											type='submit'
											name='signin'
											id='signin'
											className={classes.formSubmit}
											value='Log in'
										/>
									</div>
								</form>
								<div className={classes.socialLogin}>
									<span className={classes.socialLabel}>Or login with</span>
									<ul className={classes.socials}>
										<li>
											<a href='#'>
												<i
													className={`${classes.displayFlexCenter} fab fa-facebook-f ${classes.facebookIcon}`}
												></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i
													className={`fab fa-twitter ${classes.twitterIcon}`}
												></i>
											</a>
										</li>
										<li>
											<a href='#'>
												<i
													className={`fab fa-google ${classes.googleIcon}`}
												></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		);
	}
	return form;
};

ValidationForm.propTypes = {};

export default ValidationForm;
