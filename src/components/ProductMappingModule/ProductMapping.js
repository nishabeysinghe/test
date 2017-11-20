// ProductMapping.js

import React, { Component } from 'react';
import ProductMappingService from './ProductMappingService';
import axios from 'axios';
import ProductMappingTableRow from './ProductMappingTableRow';
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Stack,
  Badge,
  Heading,
  PageActions,
  Select,
  Checkbox
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';




class ProductMapping extends Component {

  constructor(props) {
      super(props);
      this.state = {value: '', shopifyProducts:'' , tracedata: ''};
      this.productMappingService = new ProductMappingService();
    }
    componentDidMount(){
     
      axios.get('https://fe5b1685.ngrok.io/pluginAdmin/getProducts')
      .then(response => {
        console.log('testngaxio');
        console.log(typeof response.data);
        console.log(typeof shopifyProducts);
        this.setState({ shopifyProducts: response.data });
         
      })
      .catch(function (error) {
        console.log(error);
      }); 

      
      
      axios.get('https://fe5b1685.ngrok.io/pluginAdmin/getTraceData')
        .then(response_ => {
          console.log(response_);
          this.setState({ tracedata: response_.data });
          
          console.log('tracedatacheck');
          console.log(typeof response_.data);
        })
        .catch(function (error) {
          console.log(error);
        })

    }

    // componentDidMount(){
    //   axios.get('https://cc37a427.ngrok.io/pluginAdmin/getTraceData')
    //   .then(response => {
    //     this.setState({ tracedata: response.data });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    // }
    tabRow(){
      const trace = this.state.tracedata;
      console.log('checkkk');
      console.log(this.state.tracedata);
      console.log(this.state.shopifyProducts);
      if(this.state.shopifyProducts instanceof Array){
        return this.state.shopifyProducts.map(function(object, i){
            return <ProductMappingTableRow obj={object} key={i} tracelist={trace} />;
        })  
      }
      
    }


    
    render() {
      return (

       
        <div className="container">



      <Layout>
        <Layout.AnnotatedSection>
        <Card title="Product Mapping Details">
            <table className="table table-striped">
              <thead>
                <tr>
               
                    <td>Product ID </td>
                    <td>Product Name</td>
                    <td>Tracified Item ID</td>
                    <td>Tracified Item title</td>
                    <td>Permission</td>
                </tr>
              </thead>
              <tbody>

                {this.tabRow()}

              </tbody>
            </table>
        </Card>

            
          </Layout.AnnotatedSection>
          </Layout>
        </div>
       

      );
    }
  }

export default ProductMapping;