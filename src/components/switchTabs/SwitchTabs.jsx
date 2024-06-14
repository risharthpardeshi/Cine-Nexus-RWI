// import React,{useState} from 'react'
// import "./style.scss"
// const SwitchTabs = ({data, onTabChange}) => {
//     const [selectedTab,setSelectedTabs] = useState(0)
//     const [left,setLeft] = useState(0);

//     const activeTab = (tab, index) =>{
//         setLeft(index * 100)
//         setTimeout(() => {
//             setSelectedTabs(index)
//         },300);
//         onTabChange(tab,index)
//     }
//   return (
//     <div className='switchingTabs'>
//         <div className="tabItems">
//             {data.map((tab, index) => (
//                 <span 
//                 onClick={() => activeTab(tab, index)} 
//                 key={index} className={`tabItem ${selectedTab === index ? "active" : ""}`}>
//                     {tab}
//                 </span>
//             ))}
//             <span className="movingBg" style={{left}}/>
//         </div>
//     </div>
//   )
// }

// export default SwitchTabs

import React, { useState } from 'react';

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTabs] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTabs(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="relative h-8 bg-white rounded-full p-1">
      <div className="relative flex items-center h-full">
        {data.map((tab, index) => (
          <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`relative z-10 flex items-center justify-center w-24 h-full cursor-pointer text-black transition-colors duration-300 ${
              selectedTab === index ? 'text-white' : ''
            }`}
          >
            {tab}
          </span>
        ))}
        <span
          className="absolute top-0 h-full w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-400"
          style={{ left: `${left}px` }}
        />
      </div>
    </div>
  );
};

export default SwitchTabs;
