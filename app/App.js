var React = require('react');
var Search = require('./Search');
var Griddle = require('griddle-react');

var ImageComponent = React.createClass({
  render () {
    return (
      <img src={this.props.data} />
    )
  }
});

var Detail = React.createClass({
  //{this.props.rowData.trackName}
  handleClick: function (data){
    //console.log(data);
  },
  render(){
    return (
      <button type="button" className="btn btn-large btn-primary" onClick={this.handleClick(this.props.rowData)}>DETAIL</button>
    )
  }
});


var App = React.createClass({
  getInitialState () {
    return {
      data: ''
/*
      data: [
        {
          "PUBLISHER": "pub",
          "STYLE": "style",
          "TITLE": "foo",
          "PARTS": {
            "baritone_tc": "8", "timpani": "", "d_flat_piccolo": "", "f_horn_2": "", "percussion_other": "", "bassoon_2": "", "bassoon_1": "", "e_flat_horn_4": "", "e_flat_horn_3": "", "e_flat_horn_2": "", "c_piccolo": "",
            "string_bass": "", "f_horn_4": "", "baritone_bc": "7", "bass_clarinet": "", "trombone_3": "9", "oboe_1": "", "oboe_2": "", "percussion_1": "", "percussion_2": "", "trombone_2": "0", "f_horn_3": "",
            "solo_b_flat_clarinet": "", "f_horn_1": "", "cornet_1": "", "cornet_2": "", "cornet_3": "", "alto_saxophone_1": "", "alto_saxophone_2": "", "trumpet_3": "", "contrabass_clarinet": "", "trumpet_2": "",
            "b_flat_clarinet_3": "", "b_flat_clarinet_2": "", "soprano_saxophone": "", "mallets": "", "tenor_saxophone": "", "b_flat_clarinet_1": "", "solo_cornet": "", "e_flat_horn_1": "", "trombone_1": "3", "flute_1": "", "flute_2": "",
            "flute_3": "", "trumpet_1": "", "alto_clarinet": "", "bass_tuba": "6", "e_flat_clarinet": "", "baritone_saxophone": "", "b_flat_clarinet_4": ""
          },
          "COMPOSER": "foo comp",
          "DURATION": "1:02",
          "CONDENSED_SCORE": "",
          "DATE_LAST_PERFORMED": null,
          "COMMENTS": "",
          "ARRANGER": "",
          "DATE_LAST_PASSED_OUT": null,
          "COPYRIGHT_YEAR": null,
          "FULL_SCORE": ""
        }
        /*
        {
        title: 'Test Track',
        type: 'Type',
        composer: 'Composer',
        arranger: 'Arranger',
        duration: '2:33',
        publisher: 'Publisher',
        instruments: [
          "Horn 1", "Horn 2", "Drums", "Bass", "Flute 1", "Flute 2"
        ]
      },
      {
        title: 'Another Track',
        type: 'Diff',
        composer: 'Composer',
        arranger: 'Arranger',
        duration: '3:44',
        publisher: 'Publisher',
        instruments: [
          "Horn 1", "Drums", "Bass", "Flute 1", "Flute 2", "Guitar 1", "Guitar 2", "Oboe", "Accordian"
        ]
      }

      ]*/
    }

  },
  updateState (info) {
    //console.log(info);
    this.setState({
      data: info
    })
  },
  getDetail(data){
    console.log(data);
  },
  render () {
    var griddleMeta = [
      {columnName: 'detail',displayName: '',customComponent: Detail, locked: true},
      {columnName: 'TITLE',displayName: 'Title'},
      {columnName: 'STYLE', displayName: 'Style'},
      {columnName: 'PUBLISHER',displayName: 'Publisher'},
      {columnName: 'ARRANGER',displayName: 'Arranger'},
      {columnName: 'COMPOSER',displayName: 'Composer'},
      {columnName: 'DURATION',displayName: 'Duration'},
      {columnName: 'CONDENSED_SCORE', displayName: 'Condensed Score'},
      {columnName: 'DATE_LAST_PERFORMED', displayName: 'Last Performed'},
      {columnName: 'COMMENTS', displayName: 'Comments'},
      {columnName: 'ARRANGER', displayName: 'Arranger'},
      {columnName: 'DATE_LAST_PASSED_OUT', displayName: 'Last Passed Out'},
      {columnName: 'COPYRIGHT_YEAR', displayName: 'Copyright'},
      {columnName: 'FULL_SCORE', displayName: 'Full Score'},

    ];

    var searchHeader = (this.state.data === '') ? "Make a Search" : "Results";

    var styles = {
      inputBar: {
        margin: 7
      },
      searchHeader: {
        marginTop: 50
      }
    }

    return (
      <span>
        <div className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-6" style={styles.inputBar}>
                <Search cb={this.updateState}/>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default" style={styles.searchHeader}>
          <div className="panel-heading searchHeader">
            {searchHeader}
          </div>
          <Griddle
           results={this.state.data}
           tableClassName="table"
           columnMetadata={griddleMeta}
           columns={['TITLE', 'STYLE', 'PUBLISHER', 'ARRANGER', 'COMPOSER', 'DURATION','detail']}
           //enableInfiniteScroll={true}
           bodyHeight={500}
          />
        </div>
      </span>
    )

  }
});

React.render(
  <App />,
  document.getElementById('app')
);
