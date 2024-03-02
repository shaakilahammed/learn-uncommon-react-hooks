import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DebugValue from './pages/DebugValue';
import Home from './pages/Home';

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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
