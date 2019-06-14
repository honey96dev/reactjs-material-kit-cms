import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Danger from "../../components/Typography/Danger";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/bg7.jpg";

import { config } from "core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "actions/authentication";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterContent from "components/FooterContent";

const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

class SigninPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleSubmit = (e) => {

  };

  handleSignup = (e) => {
    this.props.history.push("/signup");
  };

  render() {
    const self = this;
    const { classes } = self.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand={config.app.name}
          // links={<HeaderLinks dropdownHoverColor="info" />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>

                  <Formik
                    initialValues={{
                      email: "honey96dev@gmail.com",
                      password: "123456"
                    }}
                    validationSchema={SigninSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                      // this.handleSubmit(values);
                    }}
                  >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                      }) => (
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <CardHeader
                          color="primary"
                          signup
                          className={classes.cardHeader}
                        >
                          <h4 className={classes.cardTitle}>Sign in</h4>
                        </CardHeader>
                        <CardBody signup>
                          <CustomInput
                            id="email"
                            name="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "Email",
                              // type: "email",
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email className={classes.inputIconsColor}/>
                                </InputAdornment>
                              ),
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.email
                            }}
                            success={!(errors.email && touched.email)}
                            error={!!(errors.email && touched.email)}
                          />
                          {errors.email && touched.email && <Danger>{errors.email}</Danger>}
                          <CustomInput
                            id="password"
                            name="password"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              placeholder: "Password",
                              type: "password",
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon className={classes.inputIconsColor}>
                                    lock_utline
                                  </Icon>
                                </InputAdornment>
                              ),
                              onChange: handleChange,
                              onBlur: handleBlur,
                              value: values.password
                            }}
                            success={!(errors.password && touched.password)}
                            error={!!(errors.password && touched.password)}
                          />
                          {errors.password && touched.password && <Danger>{errors.password}</Danger>}
                        </CardBody>
                        <div className={classes.textCenter}>
                          <Button round color="primary" type={"submit"} disabled={isSubmitting}>
                            Sign in
                          </Button>
                          <Button round simple color="info" disabled={isSubmitting} onClick={self.handleSignup}>
                            Not Registered?
                          </Button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
            content={
              FooterContent(classes)
            }
          />
        </div>
      </div>
    );
  }
}

SigninPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withStyles(loginPageStyle)(SigninPage));
// export default withStyles(loginPageStyle)(SigninPage);
