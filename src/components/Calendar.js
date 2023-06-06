import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { timeLabels } from "../utils/timeLabels.js";
import "../styles/Calendar.css";

const Calendar = () => {
  const today = new Date();
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Box className="calendar-container">
      <Table className="wide-table">
        <TableHead>
          <TableRow>
            <TableCell>&nbsp;</TableCell>
            {daysOfWeek.map((day, index) => (
              <TableCell key={index}>
                <Typography variant="subtitle1" sx={{ fontSize: "0.9rem" }}>
                  {day}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
                  {today.getDate() + index}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {timeLabels.map((timeLabel, rowIndex) => (
            <TableRow className="table-row" key={rowIndex}>
              <TableCell className="dotted-cell">{timeLabel}</TableCell>
              {[...Array(7)].map((_, columnIndex) => (
                <TableCell key={columnIndex}>
                  {/* TODO: Render content */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Calendar;
