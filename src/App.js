import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  return (

   <div>

     <h2>Let's Get Started</h2>
     {/* you can call the other components
     by using it like the code below or just 
     write or use this also
     this <ExpenseItem></ExpenseItem> */}
     <ExpenseItem />
     
   </div>

  );

}

export default App;
