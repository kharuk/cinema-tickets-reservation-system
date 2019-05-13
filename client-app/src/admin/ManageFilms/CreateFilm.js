import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import TextInput from '../../shared/TextInput/TextInput';
import ImageUploader from '../ImageUploader/ImageUploader';
import { withStyles } from '@material-ui/core/styles';
import * as validators from '../../helper/Validators';
import {addFilmInfo} from '../../store/actions/adminActions';

import './filmTab.scss';


class FilmTab extends Component {

    onSubmit = (values) => {
      this.props.addFilmInfo(values);
    };

    state = {
      filmPoster: new FormData()
    }


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
              name="photo" 
              className="photo-form__field" 
              component={ImageUploader} 
              validate={[validators.isRequired]} 
            />
          </label>   
          <div>
            <button className={`film-tab__button ${(pristine || submitting) && 'link-disabled'}`} type="submit" disabled={pristine || submitting}>Submit</button>
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
  addFilmInfo: data => dispatch(addFilmInfo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'filmForm'})(FilmTab));