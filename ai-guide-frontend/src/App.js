import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure you have this for styling

function App() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return; // Prevent sending empty messages
    const response = await axios.post('/chat', { message });
    setHistory([...history, { role: 'You', content: message }, { role: 'AI', content: response.data.message }]);
    setMessage(''); // Clear the message input after sending
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="app">
      <div className="chat-box">
        <div className="history">
          {history.map((entry, index) => (
            <div key={index} className={`message ${entry.role.toLowerCase()}`}>
              <div className="content">{entry.content}</div>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
