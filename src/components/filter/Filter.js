import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, Title } from './Filter.styled';

class Filter extends Component {
  handleChange = event => {
    this.props.setFilter(event.target.value);
  };

  render() {
    return (
      <>
        <Title>Find contacts by name</Title>
        <Field
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
