import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  Chat Feed  from './components/ChatFeed';

const App = () => {
    return <ChatEngine 
        height="100vh"
        projectID="c2ba0d03-7dd6-4200-8099-40f95a10c0ab"
        userName="mecallmathers"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />   

}

export default App;