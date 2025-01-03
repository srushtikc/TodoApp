import './App.css'
import ClockHeading from './component/ClockHeading';
import ClockSlogan from './component/ClockSlogan';
import CurrentTimming from './component/CurrentTimming';


function App(){
return <center><div class="container">
  <ClockHeading/>
  <ClockSlogan/>
  <CurrentTimming/>
  </div>
</center>

}

export default App;