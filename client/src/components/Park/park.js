//Main view for each park, responsible for rendering all other subviews eg
//Articles, campgrounds, etc. Responsible for all api calls for each park,
//calling every API and distributing to appropriate child components

import React, { Component } from 'react';

import styles from './park.module.css';

//Component imports
import ParkTitle from './main/parktitle.js';
import Alerts from './alerts/alerts.js';
import Campgrounds from './campgrounds/campgrounds.js';
import VisitorCenters from './visitorcenters/visitorcenters.js';
import Educational from './educational/educational.js';
import Panel from './main/panel.js';
import ParkMain from './main/parkmain.js';
import GeneralInfo from './generalinfo/generalinfo.js';
import Media from './media/media.js';
import Events from './events/events.js';
import Container from 'react-bootstrap/Container';
import NewsReleases from './newsreleases/newsreleases.js';
import Images from './images/images.js';

//Bootstrap imports
import Spinner from 'react-bootstrap/Spinner';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


const axios = require('axios');

class Park extends Component {
  state = {
    park: null,
    alerts: null
  };

  //API CALLS
  componentDidMount() {
    this.callParkInfo()
      .then(res => {
        console.log(res.data[0]); this.setState({ park: res.data[0] })
      })
      .catch(err => console.log(err));
    this.callAlertInfo()
      .then(res => {
        console.log(res.data); this.setState({ alerts: res.data })
      })
      .catch(err => console.log(err));
    this.callCampgroundsInfo()
      .then(res => {
        console.log(res.data); this.setState({ campgrounds: res.data })
      })
      .catch(err => console.log(err));
    this.callVisitorCenterInfo()
      .then(res => {
        console.log(res.data); this.setState({ visitorcenters: res.data })
      })
      .catch(err => console.log(err));
    this.callLessonPlansInfo()
      .then(res => {
        console.log(res.data); this.setState({ educational: res.data })
      })
      .catch(err => console.log(err));
    this.callEventsInfo()
      .then(res => {
        console.log(res.data); this.setState({ events: res.data })
      })
      .catch(err => console.log(err));
    this.callArticlesInfo()
      .then(res => {
        console.log(res.data); this.setState({ articles: res.data })
      })
      .catch(err => console.log(err));
    this.callPeopleInfo()
      .then(res => {
        console.log(res.data); this.setState({ people: res.data })
      })
      .catch(err => console.log(err));
    this.callPlacesInfo()
      .then(res => {
        console.log(res.data); this.setState({ places: res.data })
      })
      .catch(err => console.log(err));
    this.callNewsReleasesInfo()
      .then(res => {
        console.log(res.data); this.setState({ newsreleases: res.data })
      })
      .catch(err => console.log(err));

  }

  //API CALL LOGIC, CALLS NODE/EXPRESS BACKEND

  callParkInfo = () => {
    return axios.get("/api/parks", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY, fields: "images,entranceFees,entrancePasses,operatingHours,contacts,addresses,latLong" } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callAlertInfo = () => {
    return axios.get("/api/alerts", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callEventsInfo = () => {
    return axios.get("/api/events", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callCampgroundsInfo = () => {
    return axios.get("/api/campgrounds", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callArticlesInfo = () => {
    return axios.get("/api/articles", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callLessonPlansInfo = () => {
    return axios.get("/api/lessonplans", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callVisitorCenterInfo = () => {
    return axios.get("/api/visitorcenters", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callNewsReleasesInfo = () => {
    return axios.get("/api/newsreleases", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callPeopleInfo = () => {
    return axios.get("/api/people", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };

  callPlacesInfo = () => {
    return axios.get("/api/places", { params: { parkCode: this.props.match.params.code, api_key: process.env.API_KEY } })
      .then(function (response) {
        // handle success
        //console.log(response.data.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        //
      });;
  };



  render() {
    //IF API CALLS ARE NOT COMPLETE, CONTINUE TO LOAD

    if (this.state.articles == null || this.state.newsreleases == null || this.state.park == null || this.state.campgrounds == null || this.state.events == null
      || this.state.visitorcenters == null || this.state.people == null || this.state.places == null || this.state.alerts == null || this.state.educational == null) {
      return (
        <div className={styles.spinnerwrapper}>
          <Spinner className={styles.spinner} animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>)
    } else {
      return (
        <div className={styles.park}>
          <Container className={styles.parkcontainer}>
            <ParkTitle name={this.state.park.name} designation={this.state.park.designation} state={this.state.park.states} latlong={this.state.park.latLong} />
            <Panel path={this.props.match.url} titles={{
              generalinfo: "General Info", alerts: "Alerts",
              "": this.state.park.fullName, campgrounds: "Campgrounds", images: "Images", visitorcenters: "Visitor Centers", educational: "Educational",
              media: "Media", events: "Events"
            }} title={this.props.location.pathname.substring(this.props.match.url.length + 1)}></Panel>

            <Switch>
              <Route
                exact path={`${this.props.match.path}`}
                render={() => <ParkMain path={this.props.match.url} park={this.state.park} />} />
              <Route
                path="/park/:code/alerts"
                render={() => <Alerts alerts={this.state.alerts} />} />

              <Route
                path="/park/:code/campgrounds"
                render={() => <Campgrounds campgrounds={this.state.campgrounds} />} />

              <Route
                path="/park/:code/visitorcenters"
                render={() => <VisitorCenters visitorcenters={this.state.visitorcenters} />} />
              <Route
                path="/park/:code/educational"
                render={() => <Educational educational={this.state.educational} people={this.state.people} places={this.state.places} />} />
              <Route
                path="/park/:code/generalinfo"
                render={() => <GeneralInfo park={this.state.park} address={this.state.park.addresses.find((address) => {
                  return address.type == "Physical";
                })} contacts={this.state.park.contacts} />} />
              <Route
                path="/park/:code/media"
                render={() => <Media articles={this.state.articles} />} />
              <Route
                path="/park/:code/events"
                render={() => <Events events={this.state.events} />} />
              <Route
                path="/park/:code/newsreleases"
                render={() => <NewsReleases newsreleases={this.state.newsreleases} />} />
              <Route
                path="/park/:code/images"
                render={() => <Images images={this.state.park.images} />} />
            </Switch>
          </Container>
        </div>
      );

    }

  }
}

export default Park;