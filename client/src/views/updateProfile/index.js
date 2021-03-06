import React from "react";
import { connect } from "react-redux";
// reactstrap components
import { Button, Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { onUpdateProfile } from "../../store/actions/Auth";

class UpdateProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisabled: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  componentDidMount() {
    const { userData } = this.props;
    const { formData } = this.state;
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== formData.password) {
        return false;
      }
      return true;
    });

    formData["name"] = userData.name;
    formData["email"] = userData.email;

    this.setState({ formData });
  }

  goToLogin = (e) => {
    this.props.history.push("/login");
  };

  onSubmit = () => {
    console.log("submit clicked");
  };

  handleUpdateProfile = async () => {
    const { onUpdateProfile, token } = this.props;
    const { formData } = this.state;
    this.setState({ isDisabled: true });
    await onUpdateProfile(token, formData);
    this.setState({ isDisabled: false });
  };

  handlePassChange = () => {
    const { history } = this.props;
    // api for pass change
    history.push({
      pathname: "/home/update-password",
      state: { comingFrom: "settings" },
    });
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  render() {
    const { formData, isDisabled, disabledPass } = this.state;
    return (
      <div className="content">
        <Row style={{ justifyContent: "center" }}>
          <Col md="6">
            <Card>
              <CardHeader>
                <p className="form-title">Update Profile</p>
                <hr style={{ margin: "0px" }} />
              </CardHeader>
              <CardBody>
                <ValidatorForm
                  className="validatorForm"
                  onSubmit={this.handleUpdateProfile}
                >
                  <TextValidator
                    className="input-field"
                    label="Name"
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
                    disabled
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    type="text"
                    margin="dense"
                    variant="outlined"
                    validators={["required", "isEmail"]}
                    errorMessages={[
                      "Email can not be empty",
                      "Email is not valid",
                    ]}
                    value={formData.email}
                  />
                  <hr style={{ margin: "20px 0px 20px 0px" }} />
                  <Button className="" type="submit" disabled={isDisabled}>
                    {!isDisabled ? (
                      "Update"
                    ) : (
                      <i className="fa fa-spinner fa-spin fa-1x fa-fw" />
                    )}
                  </Button>
                  <div />
                  <Button
                    className=""
                    onClick={this.handlePassChange}
                    disabled={disabledPass}
                  >
                    {!disabledPass ? (
                      "Change Password"
                    ) : (
                      <i className="fa fa-spinner fa-spin fa-1x fa-fw" />
                    )}
                  </Button>
                </ValidatorForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.AppState.Auth.token,
    userData: state.AppState.Auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateProfile: (token, data) => dispatch(onUpdateProfile(token, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfile);
