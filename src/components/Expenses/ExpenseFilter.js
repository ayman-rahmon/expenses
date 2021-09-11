import "./ExpenseFilter.css"

function ExpenseFilter(props) {



    const onChangeHandler = (event) =>{
        
        // output values .... 
        console.log(event.target.value) ;
        props.onFilteredHandler(event.target.value);

    }


 
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected}onChange={onChangeHandler}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                </select>
            
            </div>

            

        </div>
   );
} 




export default ExpenseFilter ; 