import notfound from '../assets/img/404-img.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
    <div className='bg-[#1A183E] min-h-screen flex flex-row justify-around items-center px-20'>
        <div className="flex flex-col justify-center items-center text-white gap-2">
          <p className='text-[5rem]'>404</p>
          <p className='text-[2.5rem]'>Page not found</p>
          <p className='text-center'>Sorry, we couldn’t find the page you ‘re looking for. But don’t worry, you can...</p>
          <Link to="/" className='bg-[#1F803D] rounded p-2 mt-4'>Go back Home</Link>
        </div>
        <div>
          <img src={notfound} alt="notfound-image" />
        </div>
        </div>
    </>
  )
}

export default NotFound