import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Title } from 'native-base';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';

export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container style = {{justifyContent:'center'}}>
        {/* <Header style ={{backgroundColor:"#5F9CD1",height:70}} hasTabs>
            <Left/>
            <Body>
              <Title style ={{color:'white'}}>News App</Title>
            </Body>
            <Right />
        </Header> */}
        <Tabs>
          <Tab activeTabStyle = {{backgroundColor:"#5F9CD1"}} tabStyle = {{backgroundColor:"#5F9CD1"}} textStyle = {{color:'white'}} activeTextStyle ={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab activeTabStyle = {{backgroundColor:"#5F9CD1"}} tabStyle = {{backgroundColor:"#5F9CD1"}} textStyle = {{color:'white'}} activeTextStyle ={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab activeTabStyle = {{backgroundColor:"#5F9CD1"}} tabStyle = {{backgroundColor:"#5F9CD1"}} textStyle = {{color:'white'}} activeTextStyle ={{color:'white'}} heading="Science">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}