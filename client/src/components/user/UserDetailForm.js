import React from "react";

// reactstrap components
import { Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { onRegister } from "../../store/actions/Auth";

class UserDetailForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("userData :: ", props);
    this.state = {
      isDisabled: false,
      formData: {
        name: props.userData.name,
        email: props.userData.email,
      },
    };
  }

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
    const { formData, isDisabled } = this.state;
    const { editModal } = this.props;
    
    return (
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <ValidatorForm
                className="validatorForm"
                onSubmit={this.handleSignup}
              >
                <TextValidator
                  className="input-field"
                  label="Name"
                  disabled={!editModal}
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                  margin="dense"
                  variant="outlined"
                  validators={["required"]}
                  errorMessages={["Name can not be empty"]}
                  value={formData.name}
                />

                <TextValidator
                  className="input-field"
                  label="Email"
                  disabled={!editModal}
                  onChange={this.handleChange}
                  name="email"
                  type="email"
                  margin="dense"
                  variant="outlined"
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "Email can not be empty",
                    "Email is not valid",
                  ]}
                  value={formData.email}
                />
              </ValidatorForm>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

// const mapStateToProps = (state) =>
// {
//   return {
//     authToken: state.Auth.authToken,
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onRegister: (data) => dispatch(onRegister(data)),
// });
export default connect(
  null,
  null
)(UserDetailForm);
