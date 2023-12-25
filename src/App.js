import './App.css';
import Social from './elements/social.jsx';
import Snowfall from 'react-snowfall';
import Lottie from 'lottie-react';
import snow from './stickers/snowflake.json';

export default function App() {
  return (
    <div>
                      <h1 className="absolute top-[10%] left-1/2 transform w-64 -translate-x-1/2 font-bold text-center text-4xl font-google text-[#c9ee9e5e]">santiksu | βeta</h1>
        <figure id="fade-in" className="bg-[#23261E] rounded-3xl p-5 h-auto w-80 mx-auto mt-[45%] items-center">
        <div className="flex p-5 items-center justify-center mx-auto">
                        <h1 className="text-[#C9EE9E] font-bold font-google text-center text-7xl">2</h1>
        <Lottie className="h-16 w-16" animationData={snow} loop={true} />
                        <h1 className="text-[#C9EE9E] font-bold text-center text-7xl font-google">24</h1>
        </div>
          <h1 className="text-white font-bold text-center text-3xl font-google">Happy New Year</h1>
          <p className="text-white text-center font-google">Updating my site very soon.</p>
          <div className="flex p-5 justify-center mx-auto">
<Social />
          </div>
          
        </figure>
    <Snowfall snowflakeCount={50} />
    </div>
    )
}
