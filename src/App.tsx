import "./App.css"
import { ButtonTicket } from "./component/ButtonTicket"
import {Chip} from './component/Chip'
import { Resume } from "./component/Resume"
import { TopCast } from "./component/TopCast"
import {TopImage} from "./component/Porter"

function App() {

  return (
    <>
    <TopImage/>
    <Chip/>
    <Resume/>
    <TopCast />
    <ButtonTicket/>
    </>
  )
}

export default App
