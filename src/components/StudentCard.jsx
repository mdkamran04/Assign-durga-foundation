import React from 'react';

const StudentCard = ({ name, class: studentClass, attendance, markPresent }) => {
  return (
    <div className="text-center p-5 px-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-md"> {/* Increased border radius */}
      <h2 className="text-xl font-bold text-gray-500">{name}</h2>
      <p className="text-gray-800">Class: {studentClass}</p>
      <p className={`text-lg ${attendance === 'Present' ? 'text-green-400' : 'text-red-400'}`}>
        Attendance: {attendance}
      </p>
      <button 
        className={`mt-2 px-4 py-1 rounded transition duration-300 ${attendance === 'Present' ? 'bg-red-500' : 'bg-blue-500'} text-white`} 
        onClick={markPresent}
      >
        Mark as {attendance === 'Present' ? 'Absent' : 'Present'}
      </button>
    </div>
  );
};

export default StudentCard;
