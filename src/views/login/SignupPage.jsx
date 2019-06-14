import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Danger from "../../components/Typography/Danger";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/img/bg7.jpg";
import { config } from "../../core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "actions/authentication";
import { Formik } from "formik";
import * as Yup from "yup";
import FooterContent from "components/FooterContent";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  accepted: Yup.boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),
});

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleSignin = (e) => {
    this.props.history.push("/signin");
  };

  render() {
    const self = this;
    const { classes, ...rest } = self.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand={config.app.name}
          // links={<HeaderLinks dropdownHoverColor="rose" />}
          {...rest}
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
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Register</h2>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Marketing"
                          description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                          icon={Timeline}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Fully Coded in HTML5"
                          description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Built Audience"
                          description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                          icon={Group}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <Formik
                          initialValues={{
                            name: "Zhenlong J.",
                            email: "honey96dev@gmail.com",
                            password: "123456",
                            accepted: false,
                          }}
                          validationSchema={SignupSchema}
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
                              <CustomInput
                                id="name"
                                name="name"
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Face
                                        className={classes.inputAdornmentIcon}
                                      />
                                    </InputAdornment>
                                  ),
                                  placeholder: "Name",
                                  onChange: handleChange,
                                  onBlur: handleBlur,
                                  value: values.name
                                }}
                                success={!(errors.name && touched.name)}
                                error={!!(errors.name && touched.name)}
                              />
                              {errors.name && touched.name && <Danger>{errors.name}</Danger>}
                              <CustomInput
                                id="email"
                                name="email"
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Email
                                        className={classes.inputAdornmentIcon}
                                      />
                                    </InputAdornment>
                                  ),
                                  placeholder: "Email",
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
                                  fullWidth: true,
                                  className: classes.customFormControlClasses
                                }}
                                inputProps={{
                                  startAdornment: (
                                    <InputAdornment
                                      position="start"
                                      className={classes.inputAdornment}
                                    >
                                      <Icon className={classes.inputAdornmentIcon}>
                                        lock_outline
                                      </Icon>
                                    </InputAdornment>
                                  ),
                                  placeholder: "Password",
                                  onChange: handleChange,
                                  onBlur: handleBlur,
                                  value: values.password
                                }}
                                success={!(errors.password && touched.password)}
                                error={!!(errors.password && touched.password)}
                              />
                              {errors.password && touched.password && <Danger>{errors.password}</Danger>}
                              <FormControlLabel
                                classes={{
                                  label: classes.label
                                }}
                                control={
                                  <Checkbox
                                    id={'accepted'}
                                    name={'accepted'}
                                    tabIndex={-1}
                                    // onClick={() => this.handleToggle(1)}
                                    checkedIcon={
                                      <Check className={classes.checkedIcon}/>
                                    }
                                    icon={
                                      <Check className={classes.uncheckedIcon}/>
                                    }
                                    classes={{
                                      checked: classes.checked,
                                      root: classes.checkRoot
                                    }}
                                    checked={
                                      values.accepted ? true
                                        : false
                                    }
                                    onClick={handleChange}
                                  />
                                }
                                label={
                                  <span>
                                I agree to the{" "}
                                    <a href="#pablo">terms and conditions</a>.
                              </span>
                                }
                              />
                              {errors.accepted && touched.accepted && <Danger>{errors.accepted}</Danger>}
                              <div className={classes.textCenter}>
                                <Button round color="primary" type={"submit"} disabled={isSubmitting}>
                                  Sign in
                                </Button>
                                <Button round simple color="info" disabled={isSubmitting} onClick={self.handleSignin}>
                                  Already Registered?
                                </Button>
                              </div>
                            </form>)}
                        </Formik>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            content={
              FooterContent(classes)
            }
          />
        </div>
      </div>
    );
  }
}


SignupPage.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withStyles(signupPageStyle)(SignupPage));
// export default withStyles(signupPageStyle)(SignupPage);
