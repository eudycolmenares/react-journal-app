import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className='auth__title mb-4'>Register</h3>
      <form>
      <input
          className='auth__input mb-2'
          type='text'
          placeholder='Name'
          name='name'
          autoComplete='off'
        />
        <input
          className='auth__input mb-2'
          type='text'
          placeholder='email'
          name='email'
          autoComplete='off'
        />
        <input
          className='auth__input mb-2'
          type='password'
          placeholder='Password'
          name='password'
        />
        <input
          className='auth__input mb-2'
          type='password'
          placeholder='Confirm password'
          name='password2'
        />
        <button
          className='btn btn-primary btn-block mt-1 mb-4'
          type='submit'
        >Register</button>
        <Link className='link' to='/auth/login'>Already registered?</Link>
      </form>
    </>
  )
}
