import { useContext, useState } from 'react'
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';
import {LuSparkles} from "react-icons/lu";
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';
import { Typewriter } from 'react-simple-typewriter';


const LandingPage = () => {

  const {user} = useContext(UserContext);

  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if(!user){
      setOpenAuthModal(true);
    }else{
      navigate("/dashboard");
    }
  };

  return (

    <>

      <div className='w-full min-h-full bg-[#F7CFD8]'>
        <div className='w-[500px] h-[500px] bg-[#A53860] blur-[300px] absolute top-0 left-0'/>

        <div className='w-9/10 container mx-auto px-4 pt-6 pb-[200px] relative z-10'>
          { /* Headers */ }
          <header className='flex justify-between items-center mb-16'>
            <div className='text-xl text-black font-bold'>
            PrepAI Assistant
            </div>
            {user ? (
              <ProfileInfoCard/>
            ) : (
              <button className='bg-linear-to-r from-[#7D1C4A] to-[#670D2F] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer' onClick={() => setOpenAuthModal(true)}>
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Content */}
          <div className='flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
              <div className='flex items-center justify-left mb-2'>
                <div className='flex items-center gap-2 text-[13px] text-[#670D2F] font-semibold bg-[#F7CFD8] px-3 py-1 rounded-full border border-[#7D1C4A]'>
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className='text-5xl text-black font-medium mb-6 leading-tight animate-fade-in'>
                Ace Interviews with <br/>
                <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7D1C4A_0%,_#670D2F_100%)] bg-[length:200%_200%] animate-text-shine font-semibold'>
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className='w-full md:w-1/2'>
              <p className='text-[17px] text-gray-900 mr-0 md:mr-20 mb-6'>
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preperation to mastery - your ultimate interview toolkit is 
                here.
              </p>

              <button className='bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#FFEEF4] hover:text-black border border-[#F7CFD8] hover:border-[#670D2F] transition-colors cursor-pointer' onClick={handleCTA}>
                Get Started
              </button>

            </div>
          </div>
        </div>
      </div>

      <div className='w-full min-h-full relative z-10'>
        <div>
          <section className='flex items-center justify-center -mt-36'>
            <img src={HERO_IMG} alt="Hero Image" className='w-[80vw] rounded-lg' />
          </section>
        </div>

        <div className='w-full min-h-full bg-[#F7CFD8] mt-10'>
          <div className='w-9/10 container mx-auto px-4 pt-10 pb-20'>
            <section className='mt-5'>
              <h2 className='text-2xl font-medium text-center mb-12'>
                Features That Make You Shine
              </h2>
              <div className='flex flex-col items-center gap-8'>
                {/* First 3 Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
                  {APP_FEATURES.slice(0,3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#FFEEF4] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-[#670D2F] transition border border-[#670D2F]'
                    >
                      <h3 className='text-base font-semibold mb-3'>{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className='bg-[#FFEEF4] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-[#670D2F] transition border border-[#670D2F]'
                    >
                      <h3 className='text-base font-semibold mb-3'>{feature.title}</h3>
                      <p className='text-gray-600'>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        <a
          className='text-sm bg-gray-50 text-secondary text-center p-5 mt-5 block'
          href="https://github.com/Devesh-x"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crafted with ❤️ by <span className='underline'>Devesh Rajput</span>
        </a>
      </div>


      <Modal
        isOpen = {openAuthModal}
        onClose = {() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && (
            <Login setCurrentPage={setCurrentPage} />
          )}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage
