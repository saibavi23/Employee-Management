import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.ChangeFirstNameHandler= this.ChangeFirstNameHandler.bind(this);
        this.ChangeLastNameHandler= this.ChangeLastNameHandler.bind(this);
        this.ChangeEmailIdHandler= this.ChangeEmailIdHandler.bind(this);
        this.updateEmployee= this.updateEmployee.bind(this);
       
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    Cancel=(e)=>{
        this.props.history.push("/employees")
    }

    ChangeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    }

    ChangeLastNameHandler= (event)=>{
        this.setState({lastName: event.target.value});
    }
    ChangeEmailIdHandler =(event)=>{
        this.setState({emailId: event.target.value});
    }
    render() {
        return (
            <div className='container'>
            <div className='row'>
               <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <h3>Update Employee</h3>
                  <div  className = "card-body">
                     <form>
                        <div className='form-group'>
                           <label>FirstName:</label>
                           <input type='text' className='form-control' value={this.state.firstName} onChange={this.ChangeFirstNameHandler}></input>
                        </div>
                        <div className='form-group'>
                           <label>LastName:</label>
                           <input type='text' className='form-control' value={this.state.lastName} onChange={this.ChangeLastNameHandler}></input>
                        </div>
                        <div className='form-group'>
                           <label>EmailId:</label>
                           <input type='text' className='form-control' value={this.state.emailId} onChange={this.ChangeEmailIdHandler}></input>
                        </div>
                        <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
                        <button className='btn btn-danger' onClick={this.Cancel.bind(this)}>Cancel</button>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        );
    }
}

export default UpdateEmployeeComponent;