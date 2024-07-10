import './App.css';
import Header from './elements/header.jsx';
import Webring from './elements/webring';
import santiksu from './images/santiksu.png'
export default function App() {
  return (
    <div>
    <Header />
        <figure id="fade-in" className="bg-[#383d30] rounded-3xl max-sm:mt-48 p-2 h-auto w-80 mx-auto mt-48 items-center">
        <div className="p-5 items-center justify-center mx-auto">
        <img src={santiksu} className="h-auto mx-auto w-48 p-2 margin-4 border border-gray-600 rounded-full" alt="santiksu logo"/>
                        <h1 className="text-[#C9EE9E] font-bold mt-4 font-google text-center text-3xl">Alexander Timush</h1>
                        <p className="text-white font-google text-center">18 y.o. Funny developer guy from 🇷🇺 Russia. </p>
                          
        </div>
       

      
          
        </figure>
 <Webring />
    </div>
    )
}
