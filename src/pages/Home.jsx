import wave from '../assets/wave.svg';
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div  className="border relative flex flex-col justify-center min-h-[calc(100vh-116px)] ">
      <Hero/>
    <img className='bottom-0 absolute w-full' src={wave} alt="" />
    </div>
  );
};

export default Home;
