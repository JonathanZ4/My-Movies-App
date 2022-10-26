import React, { Component } from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        
      ]
    }
  }

  

  // Board.js Board Component Class Function

  addNote() {
    let movies = this.state.movies;
    movies.push(
      {
        id: Date.now()
      }
    );
    this.setState(
      {
        notes: this.state.movies
      }
    );
  }

  deleteNote(id) {
    let newNoteArr = this.state.movies;
    newNoteArr.map((movie, index) => {
      if (id === movie.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState(
      {
        moviess: newNoteArr
      }
    );
  }

  render() {
    return (
  
      <div>
        
        <div className="div-board">
          <div className="row">

            {
              this.state.movies.map(movie => {
                return <Note key={movie.id} id={movie.id} deleteHandler={this.deleteNote.bind(this)} />
              })
              
            }
          </div>
        </div>
        <div>
          <button className="btn btn-success add-button" onClick={this.addNote.bind(this)}>Add Movie</button>
      
        </div>
      </div>
      
    );
  }
}

export default Board;