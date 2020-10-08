import React, {useState, useEffect} from "react";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import Pusher from "pusher-js";
import axios from "./axios";


function App() {

  const [messages,setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        //console.log(response.data);
        setMessages(response.data);
      })
  }, []);
  
  useEffect(() => {
    const pusher = new Pusher('c40bd9c9f9c704992e2c', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      //alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessage])
      console.log('YIPEEKI YAY MF');
    });

    return () => {
      channel.unbind_all();         //CleanUP function
      channel.unsubscribe();
    }; 
  },[messages]);

  //console.log(messages);

  return (
    <div className="App">
      <h1>Lets build a MERN Whatsapp Clone</h1>
      <div className="app__body"> 
        <Sidebar />
        <Chat messages = {messages} />
      
      </div>
      
        
    </div>
  );
}

export default App;
