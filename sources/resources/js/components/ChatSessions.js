import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Messages from "./Messages";
import {find, clone} from "lodash";
import axios from "axios";

export default class ChatSessions extends React.Component {
    constructor(props) {
        super(props);


        this.state = {

            unreadTabs: {}
        };
    }





    render() {
        return (
            <div className="d-flex">
                {this.state.activeTab}
            </div>
        );
    }
}
