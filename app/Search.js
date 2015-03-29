var React = require('react');
var $ = require('jquery');

var Search = React.createClass({
  propTypes: {
    cb: React.PropTypes.func.isRequired
  },
  handleSubmit (){
    var url = '/compositions?callback=cb';
    /*
    For Example,
    //`https://itunes.apple.com/search?term=${this.refs.searchInput.getDOMNode().value}&entity=${this.refs.selectInput.getDOMNode().value}&callback=cb`;
    */
    $.ajax({
      url: url,

      dataType: 'JSONP',
      error: function(error){
        console.log('error on post:' + error);
      },
      success: function(data){
        this.refs.searchInput.getDOMNode().value = '';
        this.props.cb(data.results);
      }.bind(this)
    })
  },
  handleReturn(e){
    if(e.keyCode === 13) this.handleSubmit();
  },
  render (){
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="input-group-inline col-sm-4">
            <input type="text" placeholder="Search" ref="searchInput" className="form-control" onKeyDown={this.handleReturn} />
          </div>
          <div className="input-group-inline col-sm-4">
            <select ref="selectInput" className="form-control">
              <option value="title">Title</option>
              <option value="type">Type</option>
              <option value="composer">Composer</option>
              <option value="arranger">Arranger</option>
              <option value="duration">Duration</option>
              <option value="publisher">Publisher</option>
            </select>
          </div>
          <div className="input-group-inline col-sm-4">
            <button className="btn btn-primary" type="button" name="Submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;
