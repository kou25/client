import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';




class Contact extends Component {


    onDeleteClick = id => {
        this.props.deleteContact(id);
      };

      render() {
        
        const { id, name, email, phone } = this.props.contact;
        return (
              
                <div>
                 <div className="row">     
                 </div>
                        <div className="contain">
                          <table className="table table-striped" id="table">
                                  <tbody>
                                      {
                                          <tr>
                                             <td style={{paddingLeft:"20px"}}>
                                                  <strong>{name}</strong> 
                                             </td>
                                             <td>{email}</td>
                                             <td><strong>{phone} </strong></td>
                                             <i 
                                                className="fas fa-times"
                                                style={{ cursor: 'pointer', float: 'right', paddingTop:'20px',paddingRight:'20px', color: 'red' }}
                                                onClick={this.onDeleteClick.bind(this, id)}
                                              />
                                             <Link to={`contact/edit/${id}`}>
                                                   <i
                                                  className="fas fa-pencil-alt"
                                                  style={{
                                                    cursor: 'pointer',
                                                    float: 'right',
                                                    color: 'black',
                                                    marginRight: '1rem',
                                                    paddingTop:'20px'
                                                    }}
                                                    />
                                              </Link>
                                              </tr>
                                      }
                                    </tbody>
                            </table>
                         </div>
                    </div>
                  
               );
}
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
  };

  export default connect(
    null,
    { deleteContact }
  )(Contact);