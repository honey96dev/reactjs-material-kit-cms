import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx";

class SectionDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} sm={8}>
              <h4 className={classes.description}>
                BUILD YOUR TEAM AND FIND OPPORTUNITY
              </h4>
            </GridItem>
          </GridContainer>
          <div className={classes.features}>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="List"
                  description="List your team and build a team resume."
                  icon={Apps}
                  iconColor="danger"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Network"
                  description="Network and to match with opportunities."
                  icon={ViewDay}
                  iconColor="primary"
                  vertical={true}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <InfoArea
                  title="Hire"
                  description="Hire whole teams instead of individuals."
                  icon={ViewCarousel}
                  iconColor="success"
                  vertical={true}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(descriptionStyle)(SectionDescription);
