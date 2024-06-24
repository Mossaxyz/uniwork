import React from 'react';
import Image from 'next/image';

const SelectCard = ({ isChecked, onClick, logo, title, subtitle }) => {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center px-4 py-2 space-x-2 border rounded-lg cursor-pointer ${isChecked ? 'border-blue-500 text-blue-500 bg-blue-100' : 'border-gray-300 text-gray-700'}`}
    >
      <input
        type="radio"
        checked={isChecked}
        onChange={onClick}
        className="form-radio"
      />
      <div className="flex items-center space-x-2">
        {logo && <Image src={logo} alt="Logo" className="w-5 h-5" />}
        <span className="font-semibold">{title}</span>
      </div>
      {subtitle && (
        <span className="absolute top-0 px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full left-4 -mt-3">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export default SelectCard;
