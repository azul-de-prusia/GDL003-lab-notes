import React, {Component} from 'react';

class Notes extends Component {

  render() {
    return (
    <div class="notesContainer">
      <div>
      <textarea class="monday" rows="20" cols="20">Write your monday´s dream here</textarea>
      </div>
      <div>
      <textarea class="tuesday" rows="20" cols="20">Write your tuesday´s dream here</textarea>
      </div>
      <div >
      <textarea class="wednesday" rows="20" cols="20">Write your wednesday´s dream here</textarea>
      </div>
      <div>
      <textarea class="thursday" rows="20" cols="20">Write your thursday´s dream here</textarea>
      </div>
      <div>
      <textarea class="friday" rows="20" cols="20">Write your friday´s dream here</textarea>
      </div>
      <div>
      <textarea class="saturday" rows="20" cols="20">Write your saturday´s dream here</textarea>
      </div>
      <div>
      <textarea class="sunday" rows="20" cols="20">Write your sunday´s dream here</textarea>
      </div>
    </div>

    );
  }
}

export default Notes; 