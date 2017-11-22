import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProductMappingService from './ProductMappingService';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
  Layout,
  Page,
  FooterHelp,
  Card,
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
  Checkbox,
  ResourceList,

} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class ProductMappingTableRow extends Component {
    constructor(props){
        super(props);
        
        this.props.tracelist.forEach(v=>console.log(v.id));
        console.log(this.props.tracelist[1].id);
        console.log(this.props.tracelist.length)

        this.productMappingService = new ProductMappingService();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    // getOptions = (input) => {
    //   return fetch('https://085da154.ngrok.io/pluginAdmin/getTraceData')
    //     .then((response) => {
    //       return response.json();
    //     }).then((json) => {
    //       return { options: json };
    //     });
    // }


    handleSubmit(event){
        event.preventDefault();
        this.productMappingService.deleteData(this.props.obj.id);
       // console.log(this.props.tracedata);
        
    }


render() {
  
    let options = [<option  disabled selected>Select Trace ID</option>];
    console.log('table');
    console.log(this.props.tracelist);
   
    let traceList = this.props.tracelist;
   
    for (let i = 0; i <traceList.length; i++) {
      options.push(<option key={traceList[i].id} value={traceList[i].title}>{traceList[i].id}</option>);
    }

    return (
        <tr>
          <td>
          <Badge>
                     <Select
                        options={[ 
                          this.props.obj.title
                                    
                        ]}
                         placeholder="Traceability Product IDs"
                      />
                      </Badge>

          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
          {this.props.obj.id}
          </td>
         
          
               
              
                 
                  
                  <td>  
                  <select>
                    {options}
                  </select>
                       
                  </td>
                 
                 
                  
               
            
              
          <td>
           <Checkbox label="Traceability Enabled " />
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
             
            </form>
          </td>
        </tr>
    );
    
  }
}

export default ProductMappingTableRow;