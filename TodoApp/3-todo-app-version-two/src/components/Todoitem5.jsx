function Todoitem5(){
let todoName='Submit a project.';
let todoDate='5/10/24';
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

export default Todoitem5;