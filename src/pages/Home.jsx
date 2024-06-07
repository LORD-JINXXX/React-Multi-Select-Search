import React, {useState} from 'react';
import Select from 'react-select';

const Home = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const option = [
        {value: 'react', label: "React"},
        {value: 'html5', label: "HTML5"},
        {value: 'css3', label: "CSS3"},
        {value: 'javascript', label: "JavaScript"},
        {value: 'node', label: "Node JS"},
        {value: 'express', label: "Express JS"},
        {value: 'bootstrap', label: "Bootstrap"},
        {value: 'tailwind', label: "Tailwind CSS"},
        {value: 'material', label: "Material UI"},
        {value: 'mongodb', label: "MongoDB"},
        {value: 'firebase', label: "Firebase"},
        {value: 'postgresql', label: "PostgreSQL"},
        {value: 'next', label: "Next JS"},
        {value: 'angular', label: "Angular"},
    ]

    const handleChange = (selectedValue) => {
        setSelectedOptions(selectedValue);
    }
  return (
    <div className='w-[100vw] h-screen flex justify-start items-center flex-col'>
        <h1 className='font-mono text-2xl text-blue-500 font-medium mt-5'>Select your skill</h1>
        <Select
        isMulti
        options={option}
        value={selectedOptions}
        onChange={handleChange}
        placeholder={"Search your skills here"}
        className='w-[500px] mt-5'
        />

    </div>
  )
}

export default Home;