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
import { Icon } from "leaflet";
import iconmarker from './markers/markernotadd.svg'
import LinearWithValueLabel from "./ProgressBar/ProgressBar";
const custommarker = new Icon({
    iconUrl: iconmarker,
    iconSize: [30, 30],
    iconAnchor: [15, 28],
    popupAnchor: [0, -30]
});



const TrainingForm = () => {
    const classes = useStyles();
    var [isLoading, setIsLoading] = useState(false);

    var [trainTmp, setTrainTmp] = useState({
        name: "", numberofUsers: "", targetSNR: "", numerology: "", reservedBandwidth: "", sharedBandwidth: "",
        channelGainShadowParam1: "", channelGainShadowParam2: "", channelGainShadowParam3: "",
        power: "", trafficDist: "Poisson", trafficParam1: "", trafficParam2: ""
    })

    var [longlatTmp, setLongLatTmp] = useState({ long: "", lat: "" })
    var [marker, setMarker] = useState([])

    const handleChangeName = (event) => {
        const New = { ...trainTmp, name: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeNumberOfUsers = (event) => {
        const New = { ...trainTmp, numberofUsers: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeTargetSNR = (event) => {
        const New = { ...trainTmp, targetSNR: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeNumerology = (event) => {
        const New = { ...trainTmp, numerology: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeReservedBandwidth = (event) => {
        const New = { ...trainTmp, reservedBandwidth: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeSharedBandwidth = (event) => {
        const New = { ...trainTmp, sharedBandwidth: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeChannelParam1 = (event) => {
        const New = { ...trainTmp, channelGainShadowParam1: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeChannelParam2 = (event) => {
        const New = { ...trainTmp, channelGainShadowParam2: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeChannelParam3 = (event) => {
        const New = { ...trainTmp, channelGainShadowParam3: event.target.value };
        setTrainTmp(New);
    };

    const handleChangePower = (event) => {
        const New = { ...trainTmp, power: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeTrafficParam1 = (event) => {
        const New = { ...trainTmp, trafficParam1: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeTrafficParam2 = (event) => {
        const New = { ...trainTmp, trafficParam2: event.target.value };
        setTrainTmp(New);
    };

    const handleChangeLong = (event) => {
        const New = { ...longlatTmp, long: event.target.value };
        setLongLatTmp(New);
    };


    const handleChangeLat = (event) => {
        const New = { ...longlatTmp, lat: event.target.value };
        setLongLatTmp(New);
    };

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

    function AddMarkerToClick() {
        const map = useMapEvents({
            click(e) {
                if (e.latlng) {
                    setMarker([e.latlng])
                    const New = { ...longlatTmp, lat: e.latlng.lat, long: e.latlng.lng };
                    setLongLatTmp(New);
                }
                console.log(e.latlng)

            },
        })
        return (
            <>
                { marker.map(marker =>
                    <Marker position={marker} icon={custommarker}>
                    </Marker>
                )
                }
            </>
        )
    }

    return (

        <div className={classes.formDivStyle}>
            <div className={classes.containerstyle}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="ModelName" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Name</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-modelname"
                        type={'text'}
                        value={trainTmp.name}
                        onChange={handleChangeName}
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
                        value={trainTmp.targetSNR}
                        onChange={handleChangeTargetSNR}
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
                        value={trainTmp.channelGainShadowParam1}
                        onChange={handleChangeChannelParam1}
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
                        value={trainTmp.power}
                        onChange={handleChangePower}
                        placeholder={"Unit is (W)"}
                        label={"Power"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined" style={{ marginTop: '5vw' }}>
                    <div className={classes.creatingButtonContainer}>
                        {isLoading ? (
                            <CircularProgress size={26} />
                        ) : (
                            <Button
                                style={{ fontSize: '0.85vw', height: '2.7vw' }}
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
                                Start Training
                            </Button>
                        )}
                    </div>

                </FormControl>

            </div>

            <div className={classes.containerstyle}>
                <FormControl className={classes.textField0} variant="outlined">
                    <InputLabel htmlFor="number of users" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Number of Users</InputLabel>
                    <OutlinedInput
                        classes={{ root: classes.textField2, input: classes.textField4 }}
                        id="outlined-adornment-numusers"
                        type={'number'}
                        value={trainTmp.numberofUsers}
                        onChange={handleChangeNumberOfUsers}
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
                        value={trainTmp.reservedBandwidth}
                        onChange={handleChangeReservedBandwidth}
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
                        value={trainTmp.channelGainShadowParam2}
                        onChange={handleChangeChannelParam2}
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
                        value={trainTmp.trafficParam1}
                        onChange={handleChangeTrafficParam1}
                        placeholder={"Poisson (λ)"}
                        label={"Traffic Demand Parameter"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined" style={{ marginTop: '5vw' }}>
                    <div className={classes.creatingButtonContainer}>
                        {isLoading ? (
                            <CircularProgress size={26} />
                        ) : (
                            <Button
                                style={{ fontSize: '0.85vw', height: '2.7vw', backgroundColor: "#022b54" }}
                                classes={{ contained: classes.saveButton }}
                                size="large"
                                variant="contained"
                                // color="primary"
                                fullWidth
                            // className={classes.createAccountButton}
                            //   onClick={() => handleChangePassword_Step3(
                            //     securityCode,
                            //     passwordReg,
                            //     confPasswordReg,
                            //     setIsLoading,
                            //     setError)}
                            >
                                Stop Training
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
                        value={trainTmp.numerology}
                        onChange={handleChangeNumerology}
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
                        value={trainTmp.sharedBandwidth}
                        onChange={handleChangeSharedBandwidth}
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
                        value={trainTmp.channelGainShadowParam3}
                        onChange={handleChangeChannelParam3}
                        placeholder={"Rayleigh Fading (σ)"}
                        label={"Channel Gain Parameter 3"}
                    />
                </FormControl>

                <FormControl className={classes.textField0} variant="outlined" style={{ marginTop: '9.4vw' }}>
                    <div className={classes.creatingButtonContainer}>
                        {isLoading ? (
                            <CircularProgress size={26} />
                        ) : (
                            <Button
                                style={{ fontSize: '0.85vw', height: '2.7vw', backgroundColor: "#02542b" }}
                                classes={{ contained: classes.saveButton }}
                                size="large"
                                variant="contained"
                                // color="#02542b"
                                fullWidth
                            // className={classes.createAccountButton}
                            //   onClick={() => handleChangePassword_Step3(
                            //     securityCode,
                            //     passwordReg,
                            //     confPasswordReg,
                            //     setIsLoading,
                            //     setError)}
                            >
                                Save Trained Model
                            </Button>
                        )}
                    </div>

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
                    <AddMarkerToClick />

                </MapContainer>
                <div className={classes.undermapstyleleft}>
                    <FormControl className={classes.textField0} variant="outlined">
                        <InputLabel htmlFor="Latitude" classes={{ root: classes.textField1, shrink: classes.textField3 }} >Latitude</InputLabel>
                        <OutlinedInput
                            classes={{ root: classes.textField2, input: classes.textField4 }}
                            id="outlined-adornment-modelname"
                            type={'number'}
                            value={longlatTmp.lat}
                            onChange={handleChangeLat}
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
                            value={longlatTmp.long}
                            onChange={handleChangeLong}
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