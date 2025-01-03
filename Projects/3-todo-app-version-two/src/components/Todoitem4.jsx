function Todoitem4(){
  let todoName='Make a project';
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
  
  export default Todoitem4;