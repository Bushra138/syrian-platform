import React from 'react';
import reactLogo from '../../../public/imgs/sp logo 12 (1).png';
import { FaGlobe } from 'react-icons/fa';


const Header = () => {
  return (
    <header className=" py-5 border-none" >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* الجانب الأيمن: الهوية */}
        <div className="flex items-center gap-4">
          <div className="w-32 h-12  rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      <img src={reactLogo}  alt="React logo" />
          </div>
                      <div className="h-10 w-px bg-gray-300"></div>
          <div className="flex items-center gap-4">
                     <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الصفحة الرئيسية</a>
          </div>
        </div>

        {/* الجانب الأيسر: التنقل */}
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">الدعم والمساعدة</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">سياسة الخصوصية</a>
          </nav>
          
          {/* <div className="h-6 w-px bg-gray-300"></div> */}
          
          <div className="flex items-center gap-2">
            <FaGlobe className="text-white bg-black group-hover:text-blue-600 transition-colors rounded-full text-lg" />
            <div className="flex items-center gap-1 text-gray-700 cursor-pointer hover:text-blue-600 font-medium transition-colors">
              <select>
                <option className="font-medium">
                    العربية
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;