import React, { useState } from "react";
import useStyles from "./styles";

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import search from "./search.svg";
import OutlinedInput from '@material-ui/core/OutlinedInput';







const FormReport = () => {
  const classes = useStyles();

  var [datetime, setDateTime]=useState({ReportFrom:null, ReportTo:null})
  

  const handleDateChangeFrom = (date) => {
    try {
      const dateformat = date.toISOString();
      const DateFromNew = { ...datetime, ReportFrom: dateformat };
      setDateTime(DateFromNew);
    }
    catch (err) {
      const DateFromNew = { ...datetime, ReportFrom: null };
      setDateTime(DateFromNew);
    }
  };


  const handleDateChangeTo = (date) => {
    try {
      const dateformat = date.toISOString();
      const DateToNew = { ...datetime, ReportTo: dateformat };
      setDateTime(DateToNew);
    }
    catch (err) {
      const DateToNew = { ...datetime, ReportTo: null};
      setDateTime(DateToNew);
    }
  };






  return (

    <div className={classes.formDivStyle}>
      <div className={classes.containerstyle}>

      </div>

      <div style={{ float: 'left', width: '30%', marginBottom: '-1rem' }}>

        <FormControl className={classes.textField0} variant="outlined">
          <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.datePickerText}>
            <KeyboardDatePicker
              classes={{ root: classes.datePickerText2 }}
              variant="outline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="From"
              value={datetime.ReportFrom}
              onChange={handleDateChangeFrom}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>

      </div>

      <div style={{ float: 'left', width: '30%', marginBottom:'-1rem' }}>

        <FormControl className={classes.textField0} variant="outlined">
          <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.datePickerText}>
            <KeyboardDatePicker
              classes={{ root: classes.datePickerText2 }}
              variant="outline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="To"
              value={datetime.ReportTo}
              onChange={handleDateChangeTo}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>

      </div>
    </div>
  );
};

export default FormReport;