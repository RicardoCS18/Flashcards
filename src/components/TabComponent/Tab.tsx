import { FC, useState } from 'react';
import './tab.css'
import { Login } from '../Login';

interface TabProps {
  children: { title: string }[]; // Define children as an array of objects with a 'title' string property
}

const Tab: FC<TabProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (index: number) => {
    setActiveTab(index);
  };

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
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Tab;
