import Chat from "./Components/chats/Chat"
import Detail from "./Components/detail/Detail"
import List from "./Components/list/List"
import Login from "./Components/login/Login";
import Notify from "./Components/notify/Notify";

const App = () => {

  const user = true;

  return (
    <div className='container'>


      {
        user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )
      }

      <Notify />



    </div>
  )
}

export default App