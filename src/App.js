import './App.css';
import Social from './elements/social.jsx';
import Header from './elements/header.jsx';
import Age from './utilities/age.tsx';
import santiksu from './images/santiksu.png'
export default function App() {
  const birthDate = new Date('2005-11-16');
  return (
    <div>
    <Header />
        <figure id="fade-in" className="bg-[#383d30] rounded-3xl max-sm:mt-48 p-2 h-auto w-80 mx-auto mt-48 items-center">
        <div className="p-5 items-center justify-center mx-auto">
        <img src={santiksu} className="h-auto mx-auto w-48 p-2 margin-4 border border-gray-600 rounded-full" alt="santiksu logo"/>
                        <h1 className="text-[#C9EE9E] font-bold mt-4 font-google text-center text-3xl">Alexander Timush</h1>
                            <Age birthDate={birthDate} />
        </div>
       

<Social />
      
          
        </figure>
 
    </div>
    )
}
