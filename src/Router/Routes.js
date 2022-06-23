import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

const Counter = React.lazy(() => import('../Counter'))
const BasicComp = React.lazy(() => import('../styledComps/BasicComp'))
const StylingComp = React.lazy(() => import('../styledComps/stylingComp'))
const PassedPropsComp = React.lazy(() => import('../styledComps/PassedProps'))
const AdditionalPropsComp = React.lazy(() => import('../styledComps/additionalProps'))
const Animation = React.lazy(() => import('../styledComps/Animation'))
const Themed = React.lazy(() => import('../styledComps/Theming'))

const appRouter = () => {
    return (
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Counter</Link>
                </li>
                <li>
                  <Link to="/page">BasicComp</Link>
                </li>
                <li>
                  <Link to="/styled">Styled Component</Link>
                </li>
                <li>
                  <Link to="/props-passed">PassedProps Component</Link>
                </li>
              </ul>
            </nav> */}

            <Routes>
              <Route path="/page" element={<BasicComp />} />
              <Route path="/styled" element={<StylingComp />} />
              <Route path="/props-passed" element={<PassedPropsComp />} />
              <Route path="/add-props-passed" element={<AdditionalPropsComp />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/theming" element={<Themed />} />
              <Route path="/" element={<Counter />} />
            </Routes>
          </div>
        </Router>
    );
}
export default appRouter;