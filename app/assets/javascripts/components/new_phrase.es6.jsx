class NewPhrase extends React.Component {
  constructor(props, content){
    super(props, content)
    this.state= {newPhrase: this.props.newPhrase, selectedOption: 'beginning'}
  }

  createPhrase(){
    var textInput = $("#textInput").val();
    console.log(this.state.selectedOption.toString());
    var phraseSection = this.state.selectedOption.toString()
    dataHash = {words: textInput, section: phraseSection}
    console.log(dataHash);
    $.post(window.location.origin+'/add_phrase', {phrase_params: dataHash})
  }

  showText(){
    console.log($("#textInput").val());
  }

  handleOptionChange(changeEvent){
    this.setState ({selectedOption: changeEvent.target.value})
    console.log(this.state.selectedOption);
  }

  render () {
    return(
      <div>
        <div className='card'>
          <input type="text" onChange={this.showText} placeholder="Type Of Person, (e.g. first to the front, last to stay standing)" id='textInput'/>
          <br/><br/>
          <button className='btn btn-primary' onClick={this.createPhrase.bind(this)}>Create Phrase</button>
        </div>
      </div>
    );
  }
}
