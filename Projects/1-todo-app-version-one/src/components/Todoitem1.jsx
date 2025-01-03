function Todoitem1(){
let todoName='Buy a milk.';
let todoDate='4/10/24';
return <div class="container  item-container">
    <div class="row">
    <div class="col-5">{todoName}</div>
    <div class="col-4">{todoDate}</div>
    <div class="col-3"> 
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
    </div>
    </div>

}

export default Todoitem1;