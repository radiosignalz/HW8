

import {Switch,Route,Link,BrowserRouter} from "react-router-dom"
import {AppBar,Toolbar, Button} from "@material-ui/core";
import {Home, Profile,Chats,Coffees }from "./routes"
import {store,persistor} from "../HW8/store/index";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";



const HW8 = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <AppBar position={"static"}>
                    <Toolbar>
                        <Button as={Link} to="/" component={Link} color="inherit">
                            Home
                        </Button>
                        <Button to="/profile" component={Link} color="inherit">
                            Profile
                        </Button>
                        <Button to="/chats" component={Link} color="inherit">
                            Chats
                        </Button>
                        <Button to="/coffees" component={Link} color="inherit">
                            Coffee Break
                        </Button>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route component={Coffees} path="/coffees" />
                    <Route component={Chats} path="/chats" />
                    <Route  component={Profile} path="/profile"/>
                    <Route component={Home} path="/"/>

                </Switch>

            </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};

export default HW8;