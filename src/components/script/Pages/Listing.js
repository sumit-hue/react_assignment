import React, { Component } from 'react'
import {onFetchData} from './../../Redux/NarutoAction';
import {connect} from 'react-redux';
import {withRouter,NavLink} from 'react-router-dom';
import { Spinner,Search } from 'reactstrap';


class Listing extends Component {
constructor(props) {
    super(props)

    this.state = {
         search:"",
         flag:false,
         load:6,
         mili:0,
         api:"",
         er:"",
         modal:"",
         loading:"",
         

    }
    this.inc=null;
}
componentDidMount(){

}
handle=(e)=>{
this.setState({search:e.target.value})
}
onkey=(e)=>{
    if (e.keyCode === 13) {
        this.submit(e);
     }
}
handleValidation(){
    var formIsValid = true;

    if(!this.state.search){
        formIsValid = false;
        this.setState({er:"Cannot be empty"});
        
     }
     if(this.state.search.length<3){
        formIsValid = false;
        this.setState({er:"Enter atleast 3 characters"});
     }
     
   return formIsValid;
}
submit=async(e)=>{
    e.preventDefault();
    if(this.handleValidation()){
        this.setState({load:6,mili:0});
    this.inc = setInterval( () =>
    this.setState({mili: this.state.mili + 1}), 1);
  const res = await this.props.onFetchData(this.state.search);
  if(res){
    clearInterval(this.inc);
    this.setState({
      mili: this.state.mili
    });
  }
   if(this.props.naruto.naruto){
    this.setState({flag:true,api:`https://api.jikan.moe/v3/search/anime?q=${this.state.search}&limit=30}`});   }
    }  else{
        if(!this.state.er){
        alert("cannot be empty");
        }else{
            alert(this.state.er);  
        }
     }

    
}
loader=(i)=>{  
        var x =  document.getElementById(i).offsetHeight-300;
          document.getElementById(`dots${i}`).style.height=`${x}px`;  
}
loadmore=()=>{
this.setState({load:(this.state.load+6)})
console.log(this.state.load);
}
    render() {
        console.log(this.props.naruto)
        if(this.props.naruto.datastate=="NOT_INITIALIZED" || this.props.naruto.datastate=="FETCHING"){
            return (
                <div className="content-wrapper mt-5">
                <Spinner color="primary" className="ml-5 mt-5" />
           </div>
            );
        }
    
        else if(this.props.naruto.datastate=="FETCHED_FAILURE"){
            return (
                <div>
                   failure 
                </div>
            )   
        }
       else{

        return (
            <div className=" bg-primary mt-5">
           
           <div className="container bg-primary">
           <div className="container row justify-content-center mb-3">

            <input type="search" className="mt-5 bg-primary searchbar" name="search tex-bold" placeholder="Search for an Anime" 
            value={this.state.search} onChange={this.handle} onKeyDown={this.onkey}></input>

             <button className=" buttono mt-5" onClick={this.submit} ><strong>Go</strong></button> 
            
           <div className="col-md-12"></div>
           {this.state.flag?<p className="text-light"> Requesting : {this.state.api} </p>:null}
           {this.state.flag?<p className="text-light"> Time taken : {this.state.mili} ms</p>:null}

               <div className="row" >
                    {this.state.flag?this.props.naruto.naruto.results.slice(0,this.state.load).map((el,index)=>(
                        <div className="col-md-4 mt-3" id={index} onLoad={()=>this.loader(index)}>

                        <div className="card-deck">
                        <div className="card bg-light text-dark " >
                        <img className="card-img-top myimages" src={el.image_url}  />
                        <div className="card-body" id={`dots${index}`}>
                        <h5 className="card-title" >{el.title} </h5>
                    </div>
                    </div>
                    </div>
                    </div>

                    )):<div className="btou"></div>}
                </div>
                {this.state.flag?<button className="btn btn-dark align-items-center ml-5" onClick={this.loadmore} >Load more...</button>:null}
              </div>
               </div>
           </div>
        )
       }
        
    }
}

const mapStateToProps=state=>({
    naruto:state.naruto,
})

export default connect(mapStateToProps,{onFetchData})(withRouter(Listing));
