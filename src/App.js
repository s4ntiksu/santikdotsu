import './App.css';
import Social from './elements/social.jsx';
import Header from './elements/header.jsx';
export default function App() {
  return (
    <div>
    <Header />
        <figure id="fade-in" className="rounded-3xl max-sm:mt-48 p-5 h-auto w-80 mx-auto mt-48 items-center">
        <div className="flex p-5 items-center justify-center mx-auto">
                        <h1 className="text-[#C9EE9E] font-bold font-google text-center text-3xl">santiksu</h1>
                        
        </div>
          <h1 className="text-white font-bold text-center text-3xl font-google">Happy New Year</h1>
          <p className="text-white text-center font-google">Updating my site very soon.</p>
          <div className="flex p-5 justify-center mx-auto">
<Social />
          </div>
          
        </figure>
 
    </div>
    )
}
