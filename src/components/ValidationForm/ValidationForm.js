import React from 'react';
import PropTypes from 'prop-types';

import bonsaiImg from './../../assets/images/Validation/bonsai.png';

import fernImg from './../../assets/images/Validation/fern.png';

import classes from './ValidationForm.module.css';

import { Link } from 'react-router-dom';

const ValidationForm = (props) => {
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
							>
								<div className={classes.formGroup}>
									<label htmlFor='name'>
										<i className='fas fa-user'></i>
									</label>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='Your Name'
									/>
								</div>
								<div className={classes.formGroup}>
									<label htmlFor='email'>
										<i className='fas fa-envelope'></i>
									</label>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='Your Email'
									/>
								</div>
								<div className={classes.formGroup}>
									<label htmlFor='pass'>
										<i className='fas fa-lock'></i>
									</label>
									<input
										type='password'
										name='pass'
										id='pass'
										placeholder='Password'
									/>
								</div>
								<div className={classes.formGroup}>
									<label htmlFor='re-pass'>
										<i className='fas fa-unlock'></i>
									</label>
									<input
										type='password'
										name='re_pass'
										id='re_pass'
										placeholder='Repeat your password'
									/>
								</div>
								<div className={classes.formGroup}>
									<input
										type='checkbox'
										name='agree-term'
										id='agree-term'
										className={classes.agreeTerm}
									/>
									<label
										htmlFor='agree-term'
										className={classes.labelAgreeTerm}
									>
										<span>
											<span></span>
										</span>
										I agree all statements in
										<a href='#' className={classes.termService}>
											Terms of service
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
								<img src={bonsaiImg} alt='sign up' />
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
		form = (
			<main>
				<section>
					<div className={classes.container}>
						<div className={classes.signinContent}>
							<div className={classes.signinImage}>
								<figure>
									<img src={fernImg} alt='sign in' />
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
								>
									<div className={classes.formGroup}>
										<label htmlFor='your_name'>
											<i className='fas fa-user'></i>
										</label>
										<input
											type='text'
											name='your_name'
											id='your_name'
											placeholder='Your Name'
										/>
									</div>
									<div className={classes.formGroup}>
										<label htmlFor='your_pass'>
											<i className='fas fa-lock'></i>
										</label>
										<input
											type='password'
											name='your_pass'
											id='your_pass'
											placeholder='Password'
										/>
									</div>
									<div className={classes.formGroup}>
										<input
											type='checkbox'
											name='remember-me'
											id='remember-me'
											className={classes.agreeTerm}
										/>
										<label
											htmlFor='remember-me'
											className={classes.labelAgreeTerm}
										>
											<span>
												<span></span>
											</span>
											Remember me
										</label>
									</div>
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
	return <>{form}</>;
};

ValidationForm.propTypes = {};

export default ValidationForm;
