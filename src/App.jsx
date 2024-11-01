import React, { useState } from 'react';
import StudentCard from './components/StudentCard';
import SearchBar from './components/SearchBar';

const initialStudents = [
  { id: 1, name: 'Alice Johnson', class: '12th Grade', attendance: 'Absent' },
  { id: 2, name: 'Bob Smith', class: '12th Grade', attendance: 'Absent' },
  { id: 3, name: 'Charlie Brown', class: '12th Grade', attendance: 'Absent' },
  { id: 4, name: 'Daisy Lee', class: '12th Grade', attendance: 'Absent' },
  { id: 5, name: 'Emily Carter', class: '12th Grade', attendance: 'Absent' },
  { id: 6, name: 'Fred Wright', class: '12th Grade', attendance: 'Absent' },
  { id: 7, name: 'Grace Kim', class: '12th Grade', attendance: 'Absent' },
  { id: 8, name: 'Harry Stone', class: '12th Grade', attendance: 'Absent' },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());

  const handleToggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, attendance: student.attendance === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(search);
    const matchesFilter = filter === 'All' || student.attendance === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-purple-300 to-cyan-100 p-4">
      <div className="max-w-7xl w-full flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Student Attendance</h1>
        
        {/* Search Bar and Filter Buttons in One Line */}
        <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-2 mb-4 w-full px-4">
          <SearchBar onChange={handleSearch} className="flex-grow" />

          <div className="flex space-x-0 md:space-x-2 mt-2 md:mt-0">
            <button 
              className={`px-3 py-1 rounded-full transition-all duration-200 ${filter === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button 
              className={`px-3 py-1 rounded-full transition-all duration-200 ${filter === 'Present' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('Present')}
            >
              Present
            </button>
            <button 
              className={`px-3 py-1 rounded-full transition-all duration-200 ${filter === 'Absent' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setFilter('Absent')}
            >
              Absent
            </button>
          </div>
        </div>

        {/* Student Cards */}
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 w-full px-4">
          {filteredStudents.map((student) => (
            <div 
              key={student.id} 
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 shadow-md max-w-xs mx-auto"
            >
              <StudentCard 
                {...student} 
                markPresent={() => handleToggleAttendance(student.id)} 
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default App;
