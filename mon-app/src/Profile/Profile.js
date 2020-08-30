import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Profile = (props)=> {
{props.handlename}
{Profile.defaultprops}

  return (   
  <>

  <p>{props.person.fullname}</p>
  <p>{props.person.bio}</p>
  <p>{props.person.profession}</p>
  
  </>
  );
}


profile.propTypes = {
  stringProp: PropTypes.string,  anyProp: PropTypes.any



}
export default Profile;
