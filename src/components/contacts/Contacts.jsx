import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  

  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts,loading } = this.props;
      return (
        <div>
        <div>
          <h2>
                {' '}
                  <i className="fas fa-users" /> Clients{' '}
            </h2>
          </div>
          {loading? <Spinner/>:
          <div className="tables">
          <tbody>
            {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} 
          />))}
        </tbody>
        </div>
    }
        </div>
        
      );
    }
  }

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
  loading: state.contact.loading
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
