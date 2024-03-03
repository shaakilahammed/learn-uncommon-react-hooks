import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IdForm from './components/id/IdForm';
import DebugValue from './pages/DebugValue';
import DefferedValue from './pages/DefferedValue';
import Home from './pages/Home';
import ImperativeHandle from './pages/ImperativeHandle';
import InsertionEffect from './pages/InsertionEffect';
import LayoutEffect from './pages/LayoutEffect';
import Transition from './pages/Transition';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route
                        element={
                            <h2 className="text-center text-xl">
                                React Uncommon Hooks
                            </h2>
                        }
                        index
                    />
                    <Route path="/debug-value" element={<DebugValue />} />
                    <Route path="/id" element={<IdForm />} />
                    <Route path="/transition" element={<Transition />} />
                    <Route path="/deferred-value" element={<DefferedValue />} />
                    <Route
                        path="/insertion-effect"
                        element={<InsertionEffect />}
                    />
                    <Route
                        path="/imperative-handle"
                        element={<ImperativeHandle />}
                    />
                    <Route path="/layout-effect" element={<LayoutEffect />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
