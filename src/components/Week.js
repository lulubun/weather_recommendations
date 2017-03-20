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
              <TableRowColumn>{this.props.dayUne}</TableRowColumn>
              <TableRowColumn>{this.props.dayUneFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayDeux}</TableRowColumn>
              <TableRowColumn>{this.props.dayDeuxFor}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{this.props.dayTrois}</TableRowColumn>
              <TableRowColumn>{this.props.dayTroisFor}</TableRowColumn>
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
  dayUneFor: state.WeekState.day1for,
  dayDeuxFor: state.WeekState.day2for,
  dayTroisFor: state.WeekState.day3for,
  zipNow: state.weatherState.url
});

const mapDispatchToProps = (dispatch) => ({
  getWeek: () => dispatch(actions.getWeek())
})

export default connect(mapStateToProps, mapDispatchToProps)(Week);
