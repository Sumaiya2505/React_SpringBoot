import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Productform extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          productid: "",
          productname: "",
          productcost: "",
          productonline: "",
          selectcategory: "",
          availableinstore: [],
          list1:[],
          fin: "",
          val:"false",
          checkarr:[],
        };
      }

      
      onChangeCtrl=(e)=> {
        console.log(e)
        var cname = e.target.name;
        var cval = e.target.value;
        console.log(cname+" "+cval)
        this.setState({ [cname]: cval });
      }
      onHandleCheckbox=(e)=>{
        var name = e.target.checked;
        console.log(this.state.name);
        if(name === true)
        {
                var cval = e.target.value;
                this.setState({checkarr: [...this.state.checkarr,cval]});
        }
        console.log(this.state.checkarr);
        }
    
      onSubmit=(e)=> {
        e.preventDefault();
        var ereg = new Store(
            this.state.productid,
            this.state.productname,
            this.state.productcost,
            this.state.productonline,
            this.state.selectcategory,
            this.state.availableinstore
         );
         this.setState({list1: [...this.state.list1,ereg]});
        console.log(this.state.list1);
        let a = JSON.stringify(ereg);
        this.setState({ fin: a });
      }
    
   render(){
        return(
       <div>
         <form className="container  d-flex  align-items-center  justify-content-center " onSubmit={this.onSubmit}>
         <table className=" text-start" >
            <tr>
                <td >Product ID</td>
                <td ><input type = "text"  className="form-control" placeholder="Enter Product ID" name="productid" onChange={this.onChangeCtrl}/></td>
            </tr>
            <tr>
                <td>Product Name</td>
                <td ><input type = "text" className="form-control" placeholder="Enter Product Name" name="productname" onChange={this.onChangeCtrl} /></td>
            </tr>
            <tr>
                <td>Product Cost</td>
                <td><input type = "text" className="form-control " placeholder="Enter Product Cost" name="productcost" onChange={this.onChangeCtrl}/></td>
            </tr>
            <tr>
                <td>Product Online</td>
                <td><input type="radio" className="form-check-input " name="productonline" value="Yes" onChange={this.onChangeCtrl}/>Yes
                    <input type="radio" className="form-check-input " name="productonline" value="No" onChange={this.onChangeCtrl}/>No
                </td>
            </tr>
            <tr>
                <td><label className="control-label">Product Category</label> </td>
                <td><select className="form-select"  name="selectcategory" onChange={this.onChangeCtrl}>
                    <option>Select Category</option>
                    <option>Groceries</option>
                    <option>Electronics</option>
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    </select> 
                </td>
            </tr>
            <tr>
                <td><label className="control-label ">Available in Store</label></td>
                <td><input type="checkbox"  className="form-check-input " name="availableinstore" value="Big Bazar" onChange={this.onHandleCheckbox}/>Big Bazar
                <input type="checkbox" className="form-check-input " name="availableinstore" value="D-mart" onChange={this.onHandleCheckbox}/>D-mart
                <input type="checkbox" className="form-check-input " name="availableinstore" value="Reliance" onChange={this.onHandleCheckbox}/>Reliance
                <input type="checkbox" className="form-check-input " name="availableinstore" value="Megastore" onChange={this.onHandleCheckbox}/>Megastore</td>
            </tr>
            <tr>
                <td><input type="submit"/></td>
            </tr>
            </table>
             </form>
             <input type="submit"/><br/><br/>
             <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ProductId</th>
                        <th>ProductName</th>
                        <th>ProductCost</th>
                        <th>ProductOnline</th>
                        <th>ProductCategory</th>
                        <th>AvailableIn </th>
                    </tr>
                </thead>
                <tbody>
                {this.state.list1.map((x) => (
                    <tr>
                      <td>{x.productid}</td>
                      <td>{x.productname}</td>
                      <td>{x.productcost}</td>
                      <td>{x.productonline}</td>
                      <td>{x.selectcategory}</td>
                      <td>{this.state.checkarr}</td>
                      </tr>
                ))}
                </tbody>
             </table>
             
        
        </div>
    );};
}
class Store {
    constructor(productid, productname, productcost, productonline,selectcategory,availableinstore) {
        this.productid=productid;
        this.productname=productname;
        this.productcost=productcost;
        this.productonline=productonline;
        this.selectcategory=selectcategory;
        this.availableinstore=availableinstore;
    }
  }
export default Productform


