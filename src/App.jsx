import { Link } from "react-router-dom";
import GradientBlinds from './flair/GradientBlinds.jsx';


export default function App() {
  return (
    <div>
      {/* Gradient background - fixed, behind everything */}
      <GradientBlinds />

      {/* Content container with higher stacking context so text appears above gradient */}
      <main className="relative z-20 flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">Welcome to My CSCI 581 Projects</h1>
        <h4 className="text-2xl items-center justify-center  font-semibold ">Explore the following projects:</h4>

        <ul className="flex space-x-32 list-none">
          <li className="text-lg text-blue-500 flex items-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-3" aria-hidden="true"></span><Link to="/project1">Project 1</Link></li>
          <li className="text-lg text-blue-500 flex items-center"><span className="inline-block w-2 h-2 bg-white rounded-full mr-3" aria-hidden="true"></span><Link to="/project2">Project 2</Link></li>
        </ul>
        
        <p className="text-lg text-gray-700">Select a project from the header or the list above.</p>
      </main>
    </div>
  );
}
