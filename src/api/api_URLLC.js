import {getAxiosInstanceTestBedApi } from "./api";


export const getURLLCTrainInfo = (callback) => {
    getAxiosInstanceTestBedApi().get("api/train/train-data")
      .then(response => {
        const data = response.data;
        callback(true, data);
      }).catch(error => {
      console.log(error);
      callback(false, error);
    })
  };