import React from 'react';
import useStyles from "./styles";
import { toast } from "react-toastify";
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getAlerts, getExcel, getReports, getReportsById } from "../../../../api/api_sites";
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PrintIcon from '@material-ui/icons/Print';
import { Grid } from "@material-ui/core"
import FormReport from '../FormReport/FormReport';
import MUIDataTable from "mui-datatables";
import AssignmentIcon from '@material-ui/icons/Assignment';
import WarningIcon from '@material-ui/icons/Warning';
import ReportInput from "./Modal/reportInput"
import {Button} from "@material-ui/core";
import CustomToolbarSelect from "./CustomToolbarSelect";
import { parseISO, format } from 'date-fns';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import { getURLLCTrainInfo } from '../../../../api/api_URLLC';



export default function TabTable(props2) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [loadingSearch, setLoadingSearch] = React.useState(false);
  const [successSearch, setSuccessSearch] = React.useState(false);
  const [loadingRefreshAlert, setLoadingRefreshAlert] = React.useState(false);
  const [successRefreshAlert, setSuccessRefreshAlert] = React.useState(false);
  const [loadingRefreshReport, setLoadingRefreshReport] = React.useState(false);
  const [successRefreshReport, setSuccessRefreshReport] = React.useState(false);
  const [loadingSearchReport, setLoadingSearchReport] = React.useState(false);
  const [successSearchReport, setSuccessSearchReport] = React.useState(false);
  const [loadingSearchAlert, setLoadingSearchAlert] = React.useState(false);
  const [successSearchAlert, setSuccessSearchAlert] = React.useState(false);
  const [loadingSearchExcel, setLoadingSearchExcel] = React.useState(false);
  const [successSearchExcel, setSuccessSearchExcel] = React.useState(false);
  const [loadingSearchPrint, setLoadingSearchPrint] = React.useState(false);
  const [successSearchPrint, setSuccessSearchPrint] = React.useState(false);
  const [report, setReport]=React.useState([])
  const handleOpen = (e) => {
    props2.setOpenReportModal(true);
  };
  const timer = React.useRef();
  const buttonClassnameSearch = clsx({
    [classes.buttonSuccess]: successSearch,
  });
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const handleButtonClickFilterReport = () => {
    setSuccessSearchReport(false);
    setLoadingSearchReport(true);
    // getReports(props2.reportFilter, (isOk, data) => {
    //   if (!isOk) {
    //     setSuccessSearchReport(false);
    //     setLoadingSearchReport(false);
    //     return toast.error("Could not get report!");
    //   } else {
    //     props2.setReport(data);
    //     setSuccessSearchReport(true);
    //     setTimeout(function () {
    //       setSuccessSearchReport(false);
    //       setLoadingSearchReport(false);
    //     }, 1000);
    //   }
    // }
    // )
  };
  const handleButtonClickRefreshReport = () => {
    setSuccessRefreshReport(false);
    setLoadingRefreshReport(true);
    getURLLCTrainInfo((isOk, data) => {
      if (!isOk) {
        setSuccessRefreshReport(false);
        setLoadingRefreshReport(false);
        // return toast.error("Server is not responding!");
        return toast.error("Could not get report!");
      } else {
        setReport(data);
        console.log(data)
        setSuccessRefreshReport(true);
        setTimeout(function () {
          setSuccessRefreshReport(false);
          setLoadingRefreshReport(false);
        }, 500);
      }
    }
    )
  };
  function change(n) {
    return n > 9 ? "" + n : "0" + n;
  }
  const handleButtonClickExcel = () => {
    setSuccessSearchExcel(false);
    setLoadingSearchExcel(true);
    // var dateNow = new Date();
    // var options = { hour12: false };
    // const filename = props2.site.siteName + " " + dateNow.toDateString() + " " + change(dateNow.getHours()) + change(dateNow.getMinutes()) + change(dateNow.getSeconds()) + ".xlsx"
    // getExcel(props2.reportFilter, filename, (isOk, data) => {
    //   if (!isOk) {
    //     setSuccessSearchExcel(false);
    //     setLoadingSearchExcel(false);
    //     // return toast.error("Server is not responding!");
    //     return toast.error("Could not extract Excel file!");
    //   } else {
    //     console.log(data);
    //     toast.success("Extract Excel file!");
    //     setSuccessSearchExcel(true);
    //     setTimeout(function () {
    //       setSuccessSearchExcel(false);
    //       setLoadingSearchExcel(false);
    //     }, 1000);
    //   }
    // }
    // )
  };
  function convertDate(date) {
    const Date2 = format(parseISO(date), 'yyy-MM-dd hh:mm:ss');
    return Date2;
  }
  const handleButtonClickFilterAlert = () => {
    setSuccessSearchAlert(false);
    setLoadingSearchAlert(true);
    // getAlerts(props2.alertFilter, (isOk, data) => {
    //   if (!isOk) {
    //     setSuccessSearchAlert(false);
    //     setLoadingSearchAlert(false);
    //      return toast.error("Could not get alerts!");
    //   } else {

    //     setTimeout(function () {
    //       console.log("data", data)
    //       let alerts = data.map(item => [props2.site.siteName, item.sensorCode, item.problem, convertDate(item.startDateTime), item.endDateTime == null ? "--" : convertDate(item.endDateTime), item.endDateTime == null ? "Yes" : "No", null, item.id, props2.site.id])
    //       props2.setAlert(alerts)
    //       setSuccessSearchAlert(false);
    //       setLoadingSearchAlert(false);
    //     }, 1000);
    //   }
    // }
    // )
  };
  const handleButtonClickRefreshAlert = () => {
    setSuccessRefreshAlert(false);
    setLoadingRefreshAlert(true);
    // getAlerts(props2.alertFilter, (isOk, data) => {
    //   if (!isOk) {
    //     setSuccessRefreshAlert(false);
    //     setLoadingRefreshAlert(false);
    //     return toast.error("Could not get alerts!");
    //   } else {
    //     setTimeout(function () {
    //       console.log("data", data)
    //       let alerts = data.map(item => [props2.site.siteName, item.sensorCode, item.problem, convertDate(item.startDateTime), item.endDateTime == null ? "--" : convertDate(item.endDateTime), item.endDateTime == null ? "Yes" : "No", null, item.id, props2.site.id])
    //       props2.setAlert(alerts)
    //       setSuccessRefreshAlert(false);
    //       setLoadingRefreshAlert(false);
    //     }, 500);
    //   }
    // }
    // )
  };

  function CreateReport(OriginalReport) {
    const ModifiedReport= OriginalReport.map(item=>[item.name, item.numberofUsers, item.numerology, item.TargetSNR, item.reservedBandwidth, item.sharedBandwidth, 
                                                    item.channelGainFadeParam1, item.channelGainFadeParam2,item.channelGainShadowParam1, item.power, item.TrafficParam1, item.created_at, item.status])
    
    console.log(ModifiedReport)
    return ModifiedReport;   // The function returns the product of p1 and p2
  }
  const handleButtonClickPrint = () => {
    setSuccessSearchPrint(false);
    setLoadingSearchPrint(true);
    // console.log('filterreport', props2.reportFilter)
    // getReportsById(props2.reportFilter, (isOk, data) => {
    //   if (!isOk) {
    //     setSuccessSearchPrint(false);
    //     setLoadingSearchPrint(false);
    //     return toast.error("Server is not responding for Reports!");
    //   } else {
    //     setSuccessSearchPrint(true);

    //     let AllReports = data;

    //     let myWindow = window.open("", "my div", "height=400,width=600");
    //     myWindow.document.write("<html><head><title>Reports</title>");
    //     setSuccessSearchPrint(false);
    //     setLoadingSearchPrint(false);

    //     myWindow.document.write(
    //       `
    //  <style type="text/css" media="print">
    //    @page { size: landscape; }
    //  </style>
    //  <style>
    //  body{
    //   font-size:15;
    //   margin:10px;
    //   padding:17px;
    //   border:double;
    //  }
    //   th{
    //     color:white;
    //     font-weight:bold;
    //     background-color:black
    //   }
    //   table , th , td {
    //     border :0.7px solid black;
    //     border-collapse : collapse;
    //   }
    //   td{
    //     padding-left : 5px;
    //   }
    //  </style>
    //  `,
    //     );
    //     myWindow.document.write("</head><body>");
    //     myWindow.document.write(
    //       `
    //   <img src="${logo}" alt="logo"/>
    //   <div >
    //     <span style="font-weight:bold;margin-right:10">City/Community :</span>
    //     <span>${props2.site.city}</span>
    //   </div>
    //   <div>
    //     <span style="font-weight:bold;margin-right:77">Utility :</span>
    //     <span>${props2.site.siteName}</span>
    //   </div>
    //   <div>
    //     <span style="font-weight:bold;margin-right:16">Report between :</span>
    //     <span style="margin-right:60">${props2.reportFilter.ReportFrom.split("T")[0]}</span>
    //     <span>${props2.reportFilter.ReportTo.split("T")[0]}</span>
    //   </div>
    //   <div>
    //     <span style="font-weight:bold;margin-right:57">Operator :</span>
    //     <span>${String(props2.site.operators)}</span>
    //   </div>
    //   <div>
    //     <span style="font-weight:bold;">Water Consumption per person per day (M3 /day) :</span>
    //     <span style="color:red;">12.02</span>
    //     <span style="font-weight:bold;margin-left : 10px;margin-right:126px;">The Norme Water Usage in Canada is :</span>
    //     <span>10 (M3 /day)</span>
    //   </div>
    //   <div style="margin-bottom : 20px;">
    //     <span style="font-weight:bold;margin-right:122px;">Energy Consumption (kW/M3) :</span>
    //     <span style="color:green;">29.51</span>
    //     <span style="font-weight:bold;margin-left : 10px;">The Norme Energy Usage to Produce Water in Canada is :</span>
    //     <span>40 (kW/M3)</span>
    //   </div>
    //   `,
    //     );

    //     myWindow.document.write(
    //       `
    //   <table style="width:95%;margin:auto">
    //     <thead>
    //       <tr>  
    //         <th>Problem</th>
    //         <th>Action</th>
    //         <th>Date</th>
    //         <th>Time</th>
    //         <th>Maintenance Time</th>
    //         <th>Cost(C$)</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //   `,
    //     );
    //     let totalCost = 0;
    //     if (AllReports) {
    //       for (let i = 0; i < AllReports.length; i++) {
    //         let timestamp = AllReports[i].actionDateTime.split("T");
    //         let date = timestamp[0];
    //         let time = timestamp[1].slice(0, 5);
    //         let action = "";
    //         if (AllReports[i].addedAmount == null) {
    //           action = AllReports[i].action
    //         }
    //         else {
    //           action = AllReports[i].action + " (" + AllReports[i].addedAmount + ")"
    //         }
    //         let maintenanceTime= "";
    //         if (AllReports[i].maintenanceTime!=null){
    //           maintenanceTime=AllReports[i].maintenanceTime
    //         }
    //         totalCost += AllReports[i].cost;
    //         myWindow.document.write(
    //           `
    //       <tr style="text-align:center">
    //         <td>${AllReports[i].subject}</td>
    //         <td>${action}</td>
    //         <td>${date}</td>
    //         <td>${time}</td>
    //         <td>${maintenanceTime}</td>
    //         <td>${AllReports[i].cost}</td>
    //       </tr>
    //       `,
    //         );
    //       }
    //     }
    //     myWindow.document.write(
    //       `
    //   <tr>
    //     <td colspan="6" style="text-align : right;margin-right:5px;" ><b style="margin-right:50px;">Total Cost: </b><b style="margin-right:0px;">C$</b>${totalCost}</td>
    //   </tr>
    //   `,
    //     );
    //     myWindow.document.write("</tbody></table></body></html>");
    //     myWindow.document.close();
    //     myWindow.print();
    //   }
    // });


  };

  const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#FFFFF"
        },
        paper: {
          boxShadow: "none"
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FFFFF",
          fontSize:'0.75vw'
        }
      },
      MUIDataTableHeadCell: {
        root: {
          backgroundColor: "#FFFFF",
          fontSize:'0.75vw'
        }
      },
      MuiTypography: {
        h6: {
          fontSize:'0.9vw'
        },
      },
    }
  });
  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <AssignmentIcon />
          <Typography className={classes.heading}>Reports</Typography>
        </AccordionSummary>
        <AccordionDetails>

          <Grid container direction={'column'} >

            <Grid item style={{ marginTop: '0vh' }}>
            <FormReport></FormReport>
              {/* <FormReport {...props2}></FormReport> */}
              <div className={classes.wrapper}>
                <Fab
                  aria-label="save"
                  style={{ backgroundColor: '#02542b', color: 'white', width: '2.5vw', height: '2.5vw', borderRadius: '100%' }}
                  className={buttonClassnameSearch}
                  onClick={handleButtonClickPrint}
                >
                  {successSearchPrint ? <CheckIcon /> : <PrintIcon />}
                </Fab>
                {loadingSearchPrint && <CircularProgress size={'3.1vw'} className={classes.fabProgress} />}
              </div>
              <div className={classes.wrapper}>
                <Fab
                  aria-label="excel"
                  style={{ backgroundColor: '#022b54', color: 'white', width: '2.5vw', height: '2.5vw', borderRadius: '100%' }}

                  className={buttonClassnameSearch}
                  onClick={handleButtonClickExcel}
                >
                  {successSearchExcel ? <CheckIcon /> : <CloudDownloadIcon />}
                </Fab>
                {loadingSearchExcel && <CircularProgress size={'3.1vw'} className={classes.fabProgress} />}
              </div>

              <div className={classes.wrapper}>
                <Fab
                  aria-label="save"
                  style={{ width: '2.5vw', height: '2.5vw', borderRadius: '100%' }}
                  color="primary"
                  className={buttonClassnameSearch}
                  onClick={handleButtonClickFilterReport}
                >
                  {successSearchReport ? <CheckIcon /> : <SearchIcon />}
                </Fab>
                {loadingSearchReport && <CircularProgress size={'3.1vw'} className={classes.fabProgress} />}
              </div>

            </Grid>
            <Grid item style={{ marginTop: '0vh' }}>
              <div className={classes.wrapper}>
                <Fab
                  aria-label="save"
                  style={{ backgroundColor: '#e0baf5', color: 'white', width: '2.5vw', height: '2.5vw', borderRadius: '100%' }}
                  color="primary"
                  className={buttonClassnameSearch}
                  onClick={handleButtonClickRefreshReport}
                >
                  {successRefreshReport ? <CheckIcon /> : <AutorenewIcon />}
                </Fab>
                {loadingRefreshReport && <CircularProgress size={'3.1vw'} className={classes.fabProgress} />}
              </div>
            </Grid>
            <Grid item>
            <MuiThemeProvider theme={getMuiTheme()}>
              <MUIDataTable
                title={"Table of Trained Models "}
                data={CreateReport(report)}
                options={{
                  filter: true,
                  sort: true,
                  print: false,
                  download: false,
                  filterType: 'dropdown',
                  responsive: "stacked",
                  selectableRows: true,
                  pagination: true,
                  rowsPerPage: 10,
                  headerStyle:{backgroundColor:'red'},
                  customToolbarSelect: selectedRows => (
                    <CustomToolbarSelect selectedRows={selectedRows} />
                  ),
                }}
                columns={[
                  {
                    name: "Name",
                    options: {
                      filter: true
                    }
                  },
                  {
                    name: "#Users",
                    options: {
                      filter: true,
                    }
                  },
                  {
                    name: "Numerology",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "SNR",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Reserved Bandwidth (GHz)",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Shared Bandwidth (GHz)",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Channel Gain (??)",
                    options: {
                      filter: false
                    }
                  },

                  {
                    name: "Channel Gain (??2)",
                    options: {
                      filter: false
                    }
                  },

                  {
                    name: "Channel Gain (??)",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Power (W)",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Traffic (Poisson-??)",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Date/Time",
                    options: {
                      filter: false
                    }
                  },
                  {
                    name: "Status",
                    options: {
                      filter: true
                    }
                  },


                ]}
              />
            </MuiThemeProvider>
            </Grid>

          </Grid>


        </AccordionDetails>
      </Accordion>


    </div>
  );
}