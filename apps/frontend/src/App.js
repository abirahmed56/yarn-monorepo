import "./App.css";

// Import the shared function into the `create-react-app` application
import {
  getSiteInfo,
  addNumber,
  subNumber,
  mulNumber,
  divNumber,
} from "site-info";

export default function App() {
  //Define a variable to get the values
  let siteInfo = getSiteInfo();
  let add = addNumber(4, 2);
  let div = divNumber(4, 2);
  let sub = subNumber(4, 2);
  let mul = mulNumber(4, 2);
  return (
    <div className="App">
      {/*Output the site title and subtitle to the screen*/}
      <header className="App-header">
        <h1>{siteInfo.title}</h1>
        <p>{siteInfo.subtitle}</p>
        <p>
          For 4 and 2 your result is: add= {add}, sub = {sub}, mul = {mul}, div
          = {div}
        </p>
      </header>
    </div>
  );
}
