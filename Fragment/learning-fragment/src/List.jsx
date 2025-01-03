
function List(){

  // let marketItems =["sugar","rice","cornflour"];
  let marketItems=[];
  //  if(marketItems.length===0){
  //   return (
  //     <h3>I am still shopping.</h3>
  //   )
  //  }

// let emptyMessage=marketItems.length === 0 ?<h3>Iam still shopping.</h3>:null;



return (
<>

<h1>Market Items</h1>
{/* {emptyMessage} */}
{marketItems.length === 0 && <h3>I am still shopping.</h3>}
  <ul className="list-group">
    {marketItems.map((item) =>(
      <li key={item} className="list-group-item">
        {item}
     </li> 
     ))}
</ul>

</>
);

}



export default List;