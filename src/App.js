import "../src/MyComponents/Styles/Styles.css"
import { ExpenseCardBody } from "./MyComponents/ExpenseCard/ExpenseCardBody";
function App() {
  return (
    <div className="Container">

      <div className='roseGold'>
        <h3>Expense Tracker</h3>
      </div>
      <div className='steelGray'>
         <ExpenseCardBody/>
      </div>
   
   
   
   
    </div>
  );
}

export default App;
