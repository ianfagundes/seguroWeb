import React, { Component } from "react";
import {
  createMuiTheme,
  MuiThemeProvider,
  AppBar,
  Toolbar,
  Typography
} from "@material-ui/core";

import blue from "material-ui/colors/blue";
import DataTable from "./components/DataTable.js";
import FirebaseService from "./services/FirebaseService";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
      contrastText: "#fff"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "test key key",
          temperatura: "test key temperatura",
          umidade: "test key umidade",
          cliente: "test key cliente",
          data: "test key data"
        }
      ]
    };
  }

  componentDidMount() {
    FirebaseService.getDataList("leituras", dataReceived =>
      this.setState({ data: dataReceived })
    );
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                SSat Seguros
              </Typography>
            </Toolbar>
          </AppBar>
          <DataTable data={this.state.data} />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
