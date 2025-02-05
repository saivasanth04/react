import Propschildren from './propschildren.jsx'
import Subchildren from './subchildren.jsx'


function App() {
 

  return (
   <>
   <Propschildren
   username="vasanth"
   company={25}
   />
   <h2>test it </h2>
   <Subchildren />
   </>
  )
}

export default App
