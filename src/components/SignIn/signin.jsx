import React from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ForgetPassward from '../ForgetPassward/forgetpassward'

const SignInForm = () => {
  return (
<div className="w-full  flex items-center justify-center p-4 py-8" dir='rtl'>      
      {/* البطاقة الرئيسية */}
      <div className=" border-none rounded-2xl p-4 max-w-md w-full">
        
        {/* 1. العنوان الرئيسي */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
         تسجيل الدخول
        </h1>
        {/* 2. رابط للمستخدمين الحاليين */}
        <p className="text-center text-gray-600 mb-6">
           ليس لديك حساب بالمنصةالسورية 
     <Link to="/signup" className="text-blue-400 hover:underline font-medium mr-1">
           إنشاء حساب
          </Link>
        </p>

        {/* 3. أزرار التسجيل بالمنصات */}
        <div className="flex gap-3 mb-6 mx-0 w-full">
         
          
          <button className="w-72 mx-0 flex bg-gray-50 text-md hover:bg-gray-100 border border-gray-300 text-black py-3 px-3 rounded-4xl transition-colors">
           <img src='/imgs/g-logo.png' alt='G' 
            className="w-6 h-6 mx-3"
             />
           تسجيل عبر جوجل
          </button>

          <button className="w-72 mx-0 flex text-md bg-gray-50 hover:bg-gray-100 border border-gray-300 text-black py-3 px-4 rounded-4xl transition-colors">
            <img src='/imgs/Apple_logo_black.svg' alt='Apple'
            className="w-6 h-6 mx-3 "
            />
            تسجيل عبر آبل
          </button>
        </div>

        {/* 4. الفاصل */}
        <div className="flex items-center mb-6">
          <div className="flex-1 "></div>
          <span className="mx-4 text-gray-600 text-md">أو</span>
          <div className="flex-1 "></div>
        </div>

        {/* 5. حقول الإدخال */}
        <div className="space-y-4">

          {/* حقل البريد الإلكتروني */}
          <div>
            <label className="block  mb-2 text-right font-bold text-black">البريد الإلكتروني</label>
            <input 
              type="email" 
              placeholder="أدخل البريد الالكتروني"
              className=" text-gray-700 w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* حقل كلمة المرور */}
          <div className='relative'>
            <label className="block mb-2 text-right font-bold text-black">كلمة المرور</label>
            <p className="text-sm text-gray-600 text-right pb-2">
           6 أحرف على الأقل من فضلك  يجب أن تحتوي على رموز أيضا 
            </p>
            <div className="relative">
            <input 
              type="password" 
              placeholder="أدخل كلمة السر"
              className="  w-full px-4 py-3 border border-gray-300 rounded-4xl focus:ring-2
               focus:ring-blue-500 focus:border-transparent "
            />
            <FaRegEyeSlash className='absolute left-4 top-1/2 transform -translate-y-1/2 text-black '/>
            </div>
          </div>
        </div>

        {/* 7. خانة نسيت كلمة السر */}
        <div className="flex items-start gap-3 my-6">
            <Link to='/forgetpassward' className="text-black text-sm font-bold">
          هل نسيت كلمة السر ؟
          </Link>
        </div>

        {/* 8. زر إنشاء الحساب */}
        <button className="w-full bg-blue-300 hover:bg-blue-700 text-white py-3 px-4 font-medium transition-colors rounded-4xl">
         تسجيل الدخول
        </button>

      </div>
    </div>
  );
};

export default SignInForm;