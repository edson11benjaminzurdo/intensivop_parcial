import "./App.css"
import { ButtonFooter } from "./component/ButtonFooter"
import {Chip} from './component/Chip'
import { Description } from "./component/Description"
import { TopCast } from "./component/TopCast"
import {TopImage} from "./component/TopImage"

function App() {

  return (
    <>
    <TopImage/>
    <Chip/>
    <Description/>
    <TopCast />
    <ButtonFooter/>
    </>
  )
}

export default App
