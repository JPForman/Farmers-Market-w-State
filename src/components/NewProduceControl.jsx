import React from 'react';
import NewProduceForm from './NewProduceForm';
import PropTypes from 'prop-types';

class NewProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };

    }

  render()  {
    // currentlyVisibleContent = <NewProduceForm onNewProduceCreation={this.props.onNewProduceCreation}/>;

    return (
      <div>
        <NewProduceForm onNewProduceCreation={this.props.onNewProduceCreation}/>;

      </div>
    );
  }
}
NewProduceControl.propTypes = {
  onNewProduceCreation: PropTypes.func
};

export default NewProduceControl;
