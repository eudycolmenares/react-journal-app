import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <h3 className='auth__title mb-4'>Login</h3>
      <form>
        <input
          className='auth__input mb-2'
          type='text'
          placeholder='Email'
          name='email'
          autoComplete='off'
        />
        <input
          className='auth__input mb-2'
          type='password'
          placeholder='Password'
          name='password'
        />
        <button
          className='btn btn-primary btn-block mt-1'
          type='submit'
        >Login</button>
        <hr className='mt-2' />
        <div className='auth__social-networks'>
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className='link' to='/auth/register'>Create new account</Link>
      </form>
    </>
  )
}
