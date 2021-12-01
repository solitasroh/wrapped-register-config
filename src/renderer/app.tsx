import React, { FunctionComponent } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Button, Icon } from "@blueprintjs/core";
import { Cell, Column, Table } from "@blueprintjs/table";
import "@blueprintjs/table/lib/css/table.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  * {
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    :focus {
      outline: none;
    }
  }
  a {
      text-decoration: none;
      color: inherit;
  };
  body {
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const App: FunctionComponent = () => {
  const dollarCellRenderer = (rowIndex: number) => (
    <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
  );
  const euroCellRenderer = (rowIndex: number) => (
    <Cell>{`€${(rowIndex * 10 * 0.85).toFixed(2)}`}</Cell>
  );

  return (
    <>
      {/* <GlobalStyle /> */}
      <div>
        <Icon icon="cross" />
        <Icon icon="globe" size={20} />
        <Button icon="refresh">This is button</Button>

        <Table numRows={10}>
          <Column name="Dollars" cellRenderer={dollarCellRenderer} />
          <Column name="Euros" cellRenderer={euroCellRenderer} />
        </Table>
      </div>
    </>
  );
};
export default App;
