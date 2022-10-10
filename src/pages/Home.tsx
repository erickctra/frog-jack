import projectLogo from '../assets/projectLogo.png';
import playIcon from '../assets/playIcon.png';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className='w-auto'>
        <div className='flex items-center'>
          <img className='w-24' src={projectLogo} alt="" />
          <Link className='ml-8 w-auto flex items-center animate-bounce text-2xl' to={'/game'}>Play now <img className='w-4 h-6 ml-2' src={playIcon} alt="" /></Link>
        </div>
        <a className="text-2xl text-secondary" target={"_blank"} href="https://github.com/erickctra">https://github.com/erickctra</a>
      </div>
    </div>
  )
}