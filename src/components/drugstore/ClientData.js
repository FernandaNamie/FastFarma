import React from "react";
import "./ClientData.css";

export default function ClientData(props) {
  return (
    <div
      className={`col-3 ClientData ${props.selected}`}
      style={{ paddingLeft: "1%" }}
      onClick={(e) => {
        props.onClick(props.id);
      }}
    >
      <span>
        <span className="ClientName">
          {props.name} <br />
          <span className="ClientCode">#{props.id}</span>
        </span>
        <span
          className={`Status ${props.status}`}
          style={{
            marginLeft: "4%",
            textAlign: "center",
            padding: "1px",
          }}
        >
          {props.status}
        </span>
      </span>
      <br />
      <span className="Message">{props.message}</span>
    </div>
  );
}
