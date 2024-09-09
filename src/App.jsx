import Chat from "./Components/chats/Chat"
import Detail from "./Components/detail/Detail"
import List from "./Components/list/List"

const App = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
      <Detail />


    </div>
  )
}

export default App