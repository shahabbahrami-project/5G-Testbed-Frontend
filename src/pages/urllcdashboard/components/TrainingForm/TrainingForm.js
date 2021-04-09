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
import { MapContainer, Circle, Tooltip, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents, ZoomControl } from "react-leaflet";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    IconButton,
    Fade,
  } from "@material-ui/core";





const TrainingForm = () => {
    const classes = useStyles();
    var [isLoading, setIsLoading] = useState(false);
    //   const handleDateChangeFrom = (date) => {
    //     try {
    //       const dateformat = date.toISOString();
    //       const DateFromNew = { ...props.filterSite, VisitFrom: dateformat };
    //       props.setFilterSite(DateFromNew);
    //     }
    //     catch (err) {
    //       const DateFromNew = { ...props.filterSite, VisitFrom: null };
    //       props.setFilterSite(DateFromNew);
    //     }

    //   };


    //   const handleDateChangeTo = (date) => {
    //     try {
    //       const dateformat = date.toISOString();
    //       const DateToNew = { ...props.filterSite, VisitTo: dateformat };
    //       props.setFilterSite(DateToNew);
    //     }
    //     catch (err) {

    //       const DateToNew = { ...props.filterSite, VisitTo: null };
    //       props.setFilterSite(DateToNew);
    //     }

    //   };




    //   const handleChangeName = (event) => {
    //     const NameNew = { ...props.filterSite, siteName: event.target.value };
    //     props.setFilterSite(NameNew);
    //   };

    //   const handleChangeCity = (event) => {
    //     const CityNew = { ...props.filterSite, city: event.target.value };
    //     props.setFilterSite(CityNew);
    //   };

    //   const handleChangeWellorSurface = (event) => {
    //     const wellOrSurfaceNew = { ...props.filterSite, wellOrSurface: event.target.value };
    //     props.setFilterSite(wellOrSurfaceNew);
    //   };

    //   const handleChangeWaterorWaste = (event) => {
    //     const waterOrWasteNew = { ...props.filterSite, waterOrWaste: event.target.value };
    //     props.setFilterSite(waterOrWasteNew);
    //   };

    //   const handleChangeStatus = (event) => {
    //     const statusNew = { ...props.filterSite, status: event.target.value};
    //     props.setFilterSite(statusNew);
    //   };


    return (

        <div className={classes.formDivStyle}>
            <div className={classes.containerstyle}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="ModelName" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Name</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-modelname"
                        type={'text'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Trained Model Name"}
                        label={"Name"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Target SNR" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Traget SNR</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-modelname"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Unit is (db)"}
                        label={"Target SNR"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Channel Gain Parameter 1" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Channel Gain Parameter 1</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-param1"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Log-Normal Shadowing (μ)"}
                        label={"Channel Gain Parameter 1"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Power" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Power</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-param3"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Unit is (W)"}
                        label={"Power"}
                    />
                </FormControl>

            </div>

            <div className={classes.containerstyle}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="number of users" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Number of Users</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-numusers"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Estimate an Average!"}
                        label={"Number of Users"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Reserved Bandwidth" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Reserved Bandwidth</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-reserved"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Unit is (GHz)"}
                        label={"Reserved Bandwidth"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Channel Gain Parameter 2" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Channel Gain Parameter 2</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-param2"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Log-Normal Shadowing (σ2)"}
                        label={"Channel Gain Parameter 2"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Traffic Demand Parameter" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Traffic Demand Parameter</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-param1"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Poisson (λ)"}
                        label={"Traffic Demand Parameter"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined" style={{marginTop:'5vw'}}>
                <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                    <Button
                      style={{ fontSize: '0.85vw',  height: '2.7vw' }}
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                      // className={classes.createAccountButton}
                    //   onClick={() => handleChangePassword_Step3(
                    //     securityCode,
                    //     passwordReg,
                    //     confPasswordReg,
                    //     setIsLoading,
                    //     setError)}
                    >
                      Start Algorithm Training
                    </Button>
                  )}
              </div>

                </FormControl>
            </div>

            <div className={classes.containerstyle}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Numerology" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Numerologies (0, 1, or 2)</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-numerology"
                        type={'text'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"e.g., 0,2"}
                        label={"Numerologies (0, 1, or 2)"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Shared Bandwidth" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Shared Bandwidth</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-shared"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Unit is (GHz)"}
                        label={"Shared Bandwidth"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Channel Gain Parameter 3" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Channel Gain Parameter 3</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-param3"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Rayleigh Fading (σ)"}
                        label={"Channel Gain Parameter 3"}
                    />
                </FormControl>
            </div>

            <div style={{ float: 'right', width: '39%', marginBottom: '1vw', marginTop: '0.7vw' }}>
            <MapContainer
                center={[49.26110399179613, -123.24909169999108]}
                zoomControl={false}
                zoom={15} scrollWheelZoom={true}
                style={{
                  width: '98%', height: '50vh', borderRadius: '0.5rem', marginTop: "-0px", webkitBoxShadow: '0px 0.5px 1px 0.1px rgba(0,0,0,0.43)',
                  mozBoxShadow: '0px 0.5px 1px 0.1px rgba(0,0,0,0.43)',
                  boxShadow: '0px 0.5px 1px 0.1px rgba(0,0,0,0.43)',
                }}
                doubleClickZoom={false}
              >

                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl style={{ '& .leaflet-left': { left: '5vh !important' } }} />
                {/* <LocateMArkeronMap />
                <MySiteMAp /> */}

              </MapContainer>
              <div className={classes.undermapstyleleft}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Latitude" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Latitude</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-modelname"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Latitude"}
                        label={"Latitude"}
                    />
                </FormControl>
            </div>
            <div className={classes.undermapstyleright}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="Longitude" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Longitude</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-modelname"
                        type={'number'}
                        // value={props.filterSite.siteName}
                        // onChange={handleChangeName}
                        placeholder={"Longitude"}
                        label={"Longitude"}
                    />
                </FormControl>
            </div>
            </div>

        </div>


    );
};

export default TrainingForm;