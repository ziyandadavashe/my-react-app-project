import React from "react";

export default function Formatteddate(props) {
  let day = props.timestamp.getDay();
  let year = props.timestamp.getFullYear();
  let month = props.timestamp.getMonth();
  let date = props.timestamp.getDate();
  let hours = props.timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minute = props.timestamp.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <ul>
        <li>
          {days[day]} {date} {months[month]}, {year}
        </li>
        <li>
          {hours}:{minute}
        </li>
      </ul>
    </div>
  );
}
