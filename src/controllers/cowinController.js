let axios = require("axios");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

const getByDistrictId = async (req, res) => {
  let districtId = req.query.district_id;
  let date = req.query.date;

  let options = {
    method: "get",
    url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`,
  };
  let result = await axios(options);
  res.send({ msg: result.data });
};
//2.) Weather
const getWeather = async (req, res) => {
  let q = req.query.q;
  let appid = req.query.appid;

  let options = {
    method: "get",
    url: `HTTP://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`,
  };
  let result = await axios(options);

  res.send({ msg: result.data });
};
const getSortedCities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let sortedArr = [];

    for (i = 0; i < cities.length; i++) {
      let obj = { city: cities[i] };
      let result = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f1a93c7f2832ca822dc0920253b1614a`
      );

      obj.temp = result.data.main.temp;

      sortedArr.push(obj);
    }

    let sorted = sortedArr.sort(function (a, b) {
      return a.temp - b.temp;
    });

    console.log(sorted);
    res.status(200).send({ status: true, data: sorted });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: false, msg: "Server Error!" });
  }
};
//3.) Meme

const createMeme = async (req, res) => {
  let template_id = req.query.template_id;

  let text0 = req.query.text0;
  let text1 = req.query.text1;
  let username = req.query.username;
  let password = req.query.password;

  let options = {
    method: "post",
    url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
  };
  let result = await axios(options);
  console.log(result);
  res.send({ msg: result.data });
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getByDistrictId = getByDistrictId;
module.exports.getWeather = getWeather;
module.exports.createMeme = createMeme;
module.exports.getSortedCities = getSortedCities;
