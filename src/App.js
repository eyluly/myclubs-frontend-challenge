import React, { Component } from 'react';
import logo from './logo.svg';
import profile_photo from './profile_photo.jpg';
import crossfit from './crossfit.jpg';
import map from './map.JPG';
import facebook from './facebook.jpg';
import twitter from './twitter.png';
import google from './google.JPG';
import details from './details.png';
import organizer from './organizer.png';
import marker from './marker.svg';
import sports from './sports.jpg';
import facebook_end from './facebook_end.jpg';
import twitter_end from './twitter_end.png';
import google_end from './google_end.JPG';
import "./App.css"

const API = 'https://frontend-challenge-190ff.firebaseio.com/activities/coding-activity.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clubs: null,
            title: "BOOK"
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ clubs: data }));
    }

    changeText = () => {
        this.setState({ title: "SUCCESSFULLY BOOKED!" });
    };

    render() {
        const { clubs } = this.state;
        if(this.state.clubs != null) {

            return (
                <div className="App">
                    <div className="menu">
                        <div>{this.state.clubs.reservationEmail}</div>
                        <div className="profile">Sharapova, Maria</div>
                        <img src={profile_photo} className="menu-profile"/>
                    </div>
                    <div className="App-header">
                        <img className="image" src={this.state.clubs.imageFile.url}/>
                        <div className="App-info">
                            <p className="info-detail">HOME &nbsp; &nbsp; &nbsp; &nbsp; EVENTS &nbsp; &nbsp; &nbsp;
                                &nbsp; NEWS &nbsp; &nbsp; &nbsp; &nbsp; CONTACT &nbsp;</p>
                        </div>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <div className="App-title">{this.state.clubs.name}</div>
                    </div>

                    <div className="App-page">
                        <br></br>
                        <h1>{this.state.clubs.name}</h1>
                        <div className="small">{this.state.clubs.updatedAt}</div><br></br><br></br>
                        <img className="crossImg" src={crossfit}/><br></br><br></br>
                        <div className="crossExplanation">{this.state.clubs.description}</div><br></br>
                        <div className="right"><br></br>
                            <img className="icon" src={details}/>
                            DETAILS<br></br><br></br>
                            <div className="organizer-info">
                                {this.state.clubs.infoBox}<br></br>
                                {this.state.clubs.categories}<br></br>
                                {this.state.clubs.status}<br></br>
                                {this.state.clubs.type}<br></br>
                            </div>
                        </div>
                        <div className="left"><br></br>
                            <img className="icon" src={organizer}/>
                            ORGANIZER<br></br><br></br>
                            <div className="organizer-info">
                            {this.state.clubs.partner.name}
                            </div>
                        </div><br></br>
                        <div className="crossPlace">
                            <img className="icon" src={marker}/>
                            &nbsp; &nbsp;PLACE <br></br><br></br>
                            &nbsp;&nbsp; {this.state.clubs.street}&nbsp;
                            {this.state.clubs.zipCode}&nbsp;
                            {this.state.clubs.region}&nbsp;
                            {this.state.clubs.city}&nbsp;
                            {this.state.clubs.country}&nbsp;
                        </div>
                        <img className="map" src={map}/><br></br><br></br>
                        &nbsp;&nbsp;<img className="share-icon" src={facebook}/>&nbsp;&nbsp;&nbsp;
                        <img className="share-icon" src={twitter}/>&nbsp;&nbsp;&nbsp;
                        <img className="share-icon" src={google}/>&nbsp;&nbsp;
                        <br></br><br></br>
                        <div className="line"></div><br></br><br></br>
                        <div className="payment">
                            <div className="booking"><button onClick = {this.changeText}>{this.state.title}</button></div><br></br>
                            <div className="payment-info">
                            Booking period:  {this.state.clubs.bookingPeriod}<br></br>
                            Booking quantity: {this.state.clubs.bookingQuantity}<br></br>
                            Cancelation period: {this.state.clubs.cancelationPeriod}<br></br>
                            Reservation type: {this.state.clubs.reservationTypes[1]}<br></br><br></br>
                            Price: $180.00
                            </div>
                        </div>
                    </div>

                    <br></br><br></br><br></br><br></br>
                    <div className="App-end">
                        <img className="end-image" src={sports}/>
                        <div className="end-info">
                            <div className="companies">
                                <h3>COMPANIES</h3><br></br>
                                ABOUT<br></br><br></br>
                                PRESS<br></br><br></br>
                                JOBS
                            </div>
                            <div className="legal">
                                <h3>LEGAL</h3><br></br>
                                CONDITIONS<br></br><br></br>
                                DATA PROTECTION<br></br><br></br>
                                IMPRINT
                            </div>
                            <div className="support">
                                <h3>SUPPORT</h3><br></br>
                                FAQ<br></br><br></br>
                                CUSTOMER SERVICE<br></br><br></br>
                                CORPORATE FITNESS
                            </div>
                        </div>
                        <div className="end-logo">
                                <img className="icon" src={facebook_end}/><br></br><br></br>
                                <img className="icon" src={twitter_end}/><br></br><br></br>
                                <img className="icon" src={google_end}/>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div class="loader"></div>
            )
        }
    }
}
export default App;