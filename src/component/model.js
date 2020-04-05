/*
    Used for print data as its as on website.
*/
import React, { Component } from 'react';
import { Dimensions, WebView, Modal, Share } from 'react-native';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';

export class model extends Component {
    constructor(props) {
        super(props)
    }
    handleClose = ()=>{
        return this.props.onClose()
    }
    handleShare = ()=>{

        const {url, title} = this.props.articleData;
        message  = `${title} \n\n Read More @${url} \n\n Shared Via NewsApp `;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }
    render() {
        const {showModel, articleData}  = this.props;
        const url = articleData.url;
        const webViewHeight = Dimensions.get('window').height-56;
        if(url != undefined)
        {
           return (
                <Modal 
                    animationType = "slide"
                    transparent
                    visible = {showModel}
                    onRequestClose = {this.handleClose}
                >
                    <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                            <Header style={{backgroundColor:'#009387'}}>
                                <Left>
                                    <Button onPress={this.handleClose} transparent>
                                        <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                                    </Button>
                                </Left>
                                <Body>
                                    <Title children={articleData.title} style={{color: 'white'}}/>
                                </Body>
                                <Right>
                                    <Button onPress={this.handleShare} transparent>
                                        <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                                    </Button>
                                </Right>
                            </Header>
                            <Content contentContainerStyle={{height: webViewHeight}}>
                                <WebView source={{uri:url}} style={{flex: 1}}
                                onError={this.handleClose} startInLoadingState
                                scalesPageToFit
                                />
                            </Content>
                    </Container>
                </Modal>
           )
        }
        else{
            return (
                null
            )
        }
    }
}

export default model
