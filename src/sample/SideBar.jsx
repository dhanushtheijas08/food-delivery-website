import { useState, useEffect } from "react";
const sideBar = ["Sample 1", "Sample 2", "Sample 3", "Sample 4", "Sample 5"];
function SideBar() {
  const [links, setLinks] = useState([]);
  const renderSideBar = function () {
    setLinks(() =>
      sideBar.map((item) => (
        <label onClick={renderUpdatedSideBar} className="p-5">
          {item}
        </label>
      ))
    );
  };

  const renderUpdatedSideBar = function (clickedLink) {
    setLinks(() =>
      sideBar.map((item) =>
        clickedLink === item ? (
          <label
            onClick={renderUpdatedSideBar}
            className="p-5 translate-x-8 border-l-4 border-l-lime-400"
          >
            {item}
          </label>
        ) : (
          <label onClick={renderUpdatedSideBar} className="p-5">
            {item}
          </label>
        )
      )
    );
  };
  useEffect(renderSideBar, []);
  return <div className="flex flex-col">{links}</div>;
}

export default SideBar;
