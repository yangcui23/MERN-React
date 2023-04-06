import React, { useState } from 'react';
import './App.css';
import Tabs from './components/tabs'
function App() {
  const [tabs, setTabs] = useState([
    {
      title: 'Javascript',
      content: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages',
      selected: false
    },
    {
      title: 'Python',
      content: 'Python is a high level general-purpose programming language. It uses a multi-paradigm approach, meaning it supports procedural, object-oriented, and some functional programming constructs.',
      selected: false
    },
    {
      title: 'React',
      content: 'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.',
      selected: false
    }
  ]);
  return (
    <div className="App">
      <div className='tabs'>

        {tabs.map((tab, index) => {
          return (
            <Tabs
              selectedIndex={index}
              title={tab.title}
              tabs={tabs}
              setTabs={setTabs}
              checked class="tab-switch" />
          )
        })}
      </div>
      <div className='tab-content'>
        {tabs.map((tab) => {
          return (
            tab.selected && <h2>{tab.content}</h2>
          )
        })}
      </div>

    </div>
  );
}

export default App;
