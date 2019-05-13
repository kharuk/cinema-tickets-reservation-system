import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import TextInput from '../../shared/TextInput/TextInput';
import ImageUploader from '../ImageUploader/ImageUploader';

import { withStyles } from '@material-ui/core/styles';
//import validate from './validate';

import * as validators from '../../helper/Validators';
//import { COUNTRIES } from '../../constants/index';
//import {} from '../../store/actions/filmActions';

import './filmTab.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: 20,
  },
  input: {
    display: 'none',
  },
});

class FilmTab extends Component {

    onSubmit = (values) => {
        this.props.addFilmInfo(values);
    };

    render() {
      const { handleSubmit, pristine, reset, submitting } = this.props;
      return (
        <Form className="film-tab__form" onSubmit={handleSubmit(this.onSubmit)} noValidate>        
          <label className="film-tab__form-label" htmlFor="name">
            {'What is your film name?'}
            <Field
              validate={[validators.isRequired]}
              className="film-tab__form-field"
              name="name"
              component={TextInput}
              type="text"
              essence="Film name"
              placeholder="Film name"
            />
          </label>
          <label className="film-tab__form-label" htmlFor="description">
            {'What is description of your film name?'}
            <Field
              validate={[validators.isRequired]}
              className="film-tab__form-field"
              name="description"
              component={TextInput}
              rows={4}
              type="text"
              essence="Film description"
              placeholder="Film Description"
            />
          </label>
          {/* 
          <div>
            <Field 
              name="duration" 
              component={TextField} 
              label="Duration" 
              validate={[validators.isRequired]} 
            />
          </div>  */}
          <label className="film-tab__form-label" htmlFor="photo">
            {'Choose film poster'}
            <Field 
              name="photos" 
              className="photo-form__field" 
              component={ImageUploader} 
              validate={[validators.isRequired]} 
            />
          </label>
          
          <div>
            <button className="film-tab__button" type="submit" disabled={pristine || submitting}>Submit</button>
          </div>
        </Form>
      );
    }
}

const mapStateToProps = state => ({
/*   initialValues: !state.adminReducer.filmInfo.name
  ? { country: 'Russia' }
  : {
      name: state.adminReducer.filmInfo.name,
      country: state.adminReducer.filmInfo.country,
      city: state.adminReducer.filmInfo.city,
      address: state.adminReducer.filmInfo.address,
  }, */

});

const mapDispatchToProps = dispatch => ({
  //addfilmInfo: data => dispatch(adminActions.addfilmInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'filmForm'})(withStyles(styles)(FilmTab)));