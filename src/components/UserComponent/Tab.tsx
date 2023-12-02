import { useState } from 'react';
import './tab.css'
import { Login } from '../Login';
import { Register } from "../Register"



const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index: number) => {
    setActiveTab(index);
  };

  const children = [{ title: "Log In" }, { title: "Register" }]

  return (
    <div className='tabs'>
      <div className='tab-buttons'>
        {children?.map((child, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active' : 'inactive'}
            onClick={() => toggleTab(index)}
          >
            {child.title}
          </button>

        ))}
        <div className='tab'>
          {activeTab === 0 && <Login />}
          {activeTab === 1 && <Register />}
        </div>
      </div>
    </div>
  );
};

export default Tab;
