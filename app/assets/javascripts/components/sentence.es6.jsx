class Sentence extends React.Component {
  constructor(props) {
    super(props)
    this.state = {sentence: this.props.sentence}
  }

  createNewSentence(){
    $.get({
      url: window.location.origin+'/random_phrase',
      success: function(data){
        this.setState({sentence: data.words+" "+data.give_or_get+" $"+data.random_number})

      }.bind(this)
    })
  }

  render () {
    return (
        <div className='container card'>
          <h1>{this.state.sentence}</h1>
          <button onClick={this.createNewSentence.bind(this)}  className='btn btn-success'>Create Random Sentence</button>
        </div>
    );
  }
}
