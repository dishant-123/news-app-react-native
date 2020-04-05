import React, { Component } from 'react';
import { Container, Content, List, Left} from 'native-base';
import fetchData from '../../service/news';
import {Alert, ActivityIndicator, StatusBar, View} from 'react-native'
import DataItem from '../../component/dataItem';
import Model from '../../component/model';

export default class TabOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoading : true,
             data : null,
             setModelVisible : false,
             modelArticleData : {}
        }
    }
    handleItemDataOnPress =(articleData)=>{
        this.setState({
            setModelVisible : true,
            modelArticleData : articleData
        })
    }
    handleModelClose = ()=>{
        this.setState({
            setModelVisible : false,
            modelArticleData : {}
        })
    }
    componentDidMount(){
        fetchData('general').then((items)=>{
            this.setState({
                isLoading : false,
                data : items
            })
        })
        .catch((error) =>{
            Alert.alert("Something went Wrong!",error)
        })
    }
  render() {
        
        let view = this.state.isLoading  ?  (
            <View>
                <ActivityIndicator />
                <StatusBar />
            </View>
        ):
        (
            <List 
                    dataArray = {this.state.data}
                    renderRow = {(item)=> {
                        return <DataItem data = {item} onClick = {this.handleItemDataOnPress}/>
                    }}
            />
        )
        return (
            <Container>
                <Content>
                    {view}
                </Content>
                    <Model 
                        showModel = {this.state.setModelVisible}
                        articleData = {this.state.modelArticleData}
                        onClose = {this.handleModelClose}
                    />
                
            </Container>
        )
  }
}