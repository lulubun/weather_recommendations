import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {connect} from 'react-redux';
import * as actions from '../actions/index';


export class Week extends React.Component {
  render() {
    return (
      <div className="week">
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn className="col">{this.props.dayUne}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.dayUneFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayDeux}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.dayDeuxFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayTrois}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.dayTroisFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayQuatre}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.dayQuatreFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayCinq}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.dayCinqFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.daySix}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.daySixFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.daySept}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>{this.props.daySeptFor}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  dayUne: state.WeekState.day1,
  dayDeux: state.WeekState.day2,
  dayTrois: state.WeekState.day3,
  dayQuatre: state.WeekState.day4,
  dayCinq: state.WeekState.day5,
  daySix: state.WeekState.day6,
  daySept: state.WeekState.day7,
  dayUneFor: state.WeekState.day1for,
  dayDeuxFor: state.WeekState.day2for,
  dayTroisFor: state.WeekState.day3for,
  dayQuatreFor: state.WeekState.day4for,
  dayCinqFor: state.WeekState.day5for,
  daySixFor: state.WeekState.day6for,
  daySeptFor: state.WeekState.day7for
});

const mapDispatchToProps = (dispatch) => ({
  getWeek: () => dispatch(actions.getWeek())
})

export default connect(mapStateToProps, mapDispatchToProps)(Week);
