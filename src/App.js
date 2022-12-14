import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Users from 'pages/Users';
import User from 'pages/User';
import Therapist from 'pages/Therapist';
import Therapists from 'pages/Therapists';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/therapists" component={Therapists} />
                    <Route exact path="/therapist" component={Therapist} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/tables" component={Tables} />
                    <Route exact path="/maps" component={Maps} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
