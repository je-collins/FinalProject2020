import React, { Component } from "react";
import UserDataService from "../services/user.service";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirm = this.onChangeConfirm.bind(this);
        this.register = this.register.bind(this);



        this.state = {
            email: "",
            password: "",
            confirm: ""
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeConfirm(e) {
        this.setState({
            confirm: e.target.value
        });
    }


    register() {
        if(this.state.password !== this.state.confirm)
            alert("Passwords do NOT match")


        const data = {
            email: this.state.email,
            password: this.state.password,
        };

        UserDataService.create(data)
            .then(response => {

                window.location.href = "/"
                this.setState({
                    email: response.data.email,
                    password: response.data.password,
                });
                console.log(response.data);

            })
            .catch(e => {
                console.log(e);
            });
    }



    render() {
        return (
            <div style={styles.container}>
                <form styles={{alignSelf: "center", alignItems: "center", justifyContent: "center"}}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        id="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        id="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>

                <button onClick={this.login} type="submit" className="btn btn-primary btn-block">Submit</button>
               
                <p className="text-right">
                    Already a user? <a href="/">Login.</a>
                </p>

            </form>
            </div>

            // <div className="submit-form">
            //         <div>
            //             <div className="form-group">
            //                 <label htmlFor="username">Enter Username</label>
            //                 <input
            //                     type="text"
            //                     className="form-control"
            //                     id="username"
            //                     required
            //                     value={this.state.username}
            //                     onChange={this.onChangeUsername}
            //                     name="username"
            //                 />
            //             </div>

            //             <div className="form-group">
            //                 <label htmlFor="password">Enter Password</label>
            //                 <input
            //                     type="text"
            //                     className="form-control"
            //                     id="password"
            //                     required
            //                     value={this.state.password}
            //                     onChange={this.onChangePassword}
            //                     name="password"
            //                 />
            //             </div>
            //             <div className="form-group">
            //                 <label htmlFor="confirm">Confirm Password</label>
            //                 <input
            //                     type="confirm"
            //                     className="form-control"
            //                     id="confirm"
            //                     required
            //                     value={this.state.confirm}
            //                     onChange={this.onChangeConfirm}
            //                     name="confirm"
            //                 />
            //             </div>

            //             <button onClick={this.register} className="btn btn-success">
            //                 Register
            //             </button>
            //         </div>

            // </div>
        );
    }
}

const styles = {
    textInput: {
        width: "50%",
        alignSelf:"center"
    },
    container: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "20px",
        padding: "5%",
        width: "50%"
    }
}