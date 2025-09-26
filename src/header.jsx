import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-black text-white sticky top-0 z-50">
      <div className="flex items-center">
        <img  className="h-8"  />
        <br />
        <p>Christopher Doss Jr.   CSCI 581 - Computer Vision</p>
        
      </div>
      <nav>
        <ul className="flex space-x-10 list-none">
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4 bg-gray-800'><Link to="/">Home Page</Link></li>
          <li className='font-medium text-[#45c7fe] hover:text-white no-underline space-x-4 bg-red-800'><Link to="/project1">Project 1</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;