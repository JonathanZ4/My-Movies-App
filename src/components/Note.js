import React, {Component} from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

const GENERIC_MOVIE_TITLE = "New Movie Title", GENERIC_MOVIE_BODY = "New Movie Body", GENERIC_MOVIE_YEAR= "New Movie Year";
 
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'watched'};

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.titleContent = React.createRef();
    this.bodyContent = React.createRef();
    this.yearContent = React.createRef();
    this.state = {
      title: GENERIC_MOVIE_TITLE,
      body: GENERIC_MOVIE_BODY,
      year: GENERIC_MOVIE_YEAR,
      editMode: false
  }
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('Have you seen this movie yet??: ' + this.state.value);
  event.preventDefault();
}

handleEdit() {
  this.setState({
    editMode: true
  });
}

handleSave() {
  this.setState({
    title: this.titleContent.current.value,
    body: this.bodyContent.current.value,
    year: this.yearContent.current.value,
    editMode: false
  });
}

handleDelete() {
  this.props.deleteHandler(this.props.id);
}

  render() {
    let titleElement, bodyElement, yearElement, buttonArea; 
  if (this.state.editMode){
    titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
    bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
    yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.body}></textarea>;
    buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
  }
  else{
    titleElement = <h5 className="card-title">{this.state.title}</h5>;
    bodyElement = <p>{this.state.body}</p>;
    yearElement = <p>{this.state.year}</p>;
    buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
  }
  return (
    

    
   
    
   	 <div className='col-sm-6'>
    	<div className="card card-view">
        
      
    		<div className="card-body">
          
              {titleElement}
              {bodyElement}
              {yearElement}
              {buttonArea}

              <form onSubmit={this.handleSubmit}>
        <label>
          Have you seen this one?:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Saw it">Saw It!</option>
            <option value="Not yet">Not yet!</option>
          </select>
        </label>
        
      </form>
      

  			</div>
        <div className="card-body">
          
        </div>
  		</div>
      
 	 </div>
    
  );
  }
}

Note.defaultProps = {
  title: "A cool title",
  body: "A cool body",
  year:"Year it came out",
};

Note.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number
};
 
export default Note;

