import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthService from '../../services/AuthService';
import Logo from '../../Assets/logo.png';
import bgImage from '../../Assets/collage.jpg';
import Cookies from 'js-cookie';
import Spinner from '../Common/Spinner';

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (Cookies.get('token')) navigate('/profile');
  }, []);

  function LoggingIn(e: any) {
    e.preventDefault();
    setIsLoading(true);
    const name = NameRef.current.value;
    // const email = EmailRef.current.value;
    const collegeName = CollegeNameRef.current.value;
    const gender = GenderRef.current.value;
    const mobile = MobileRef.current.value;
    AuthService.signIn(name, email, collegeName, gender, mobile)
      .then((data) => {
        if (data['success']) {
          setIsLoading(false);
          toast.success('A verification mail has been sent!');
        } else toast.error(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        setIsLoading(false);
        toast.error('Please try again later!');
      });
  }

  const NameRef = useRef(document.createElement('input'));
  // const EmailRef = useRef(document.createElement('input'));
  const CollegeNameRef = useRef(document.createElement('input'));
  const GenderRef = useRef(document.createElement('select'));
  const MobileRef = useRef(document.createElement('input'));

  const handleEmail = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    if (value.endsWith('@mnnit.ac.in')) CollegeNameRef.current.value = 'MNNIT';
    setEmail(value);
  };

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen"
      style={{ background: `url(${bgImage})` }}>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
          <img className="w-16 h-16 mr-2" src={Logo} alt="logo" />
          Avishkar
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <div className="w-full mt-4 text-center text-white">
              MNNIT students must use their college GSuite ID
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={LoggingIn} method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={NameRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="your name"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="college"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  College name
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  ref={CollegeNameRef}
                  disabled={email.endsWith('@mnnit.ac.in')}
                  className={`${
                    email.endsWith('@mnnit.ac.in') ? 'cursor-not-allowed ' : ''
                  } bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="your college name"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  ref={GenderRef}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue="Male">
                  <option value="male" selected={true}>
                    Male
                  </option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Mobile
                </label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={10}
                  ref={MobileRef}
                  name="mobile"
                  id="mobile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {isLoading ? <Spinner displayTxt="Creating Account.." /> : 'Create Account'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
