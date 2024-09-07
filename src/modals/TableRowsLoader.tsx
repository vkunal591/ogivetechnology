import React from "react";
import { TableRow, TableCell } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { ITableRowsLoaderProps } from "../interfaces/i-tableLoader";

const TableRowsLoader: React.FC<ITableRowsLoaderProps> = ({
  rowsNum = 4,
  cellsNum
}) => {
  return (
    <>
      {[...Array(rowsNum)].map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {[...Array(cellsNum)].map((_, cellIndex) => (
            <TableCell
              key={cellIndex}
              component={cellIndex === 0 ? "th" : undefined}
              scope={cellIndex === 0 ? "row" : undefined}
            >
              <Skeleton animation="wave" variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default TableRowsLoader;
