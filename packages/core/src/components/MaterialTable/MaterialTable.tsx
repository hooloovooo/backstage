/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC, forwardRef } from 'react';
import MTable, { MTableCell, MTableHeader, Column } from 'material-table';
import { makeStyles } from '@material-ui/core';

// Material-table is not using the standard icons available in in material-ui. https://github.com/mbrn/material-table/issues/51
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

const tableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ArrowUpward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

const useCellStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[500],
    padding: theme.spacing(0, 2, 0, 2),
    height: '56px',
  },
}));

const useHeaderStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(1, 2, 1, 2),
    borderTop: '1px solid #dddddd',
    borderBottom: '1px solid #d9d9d9',
    color: '#757575',
    fontWeight: 'bold',
    position: 'static',
  },
}));

type TableProps = {
  columns: any;
  data: any;
  options?: any;
};

const convertColumns = columns => {
  return columns.map(column => {
    const headerStyle: React.CSSProperties = {};

    if (column.highlight) {
      headerStyle.color = '#000000';
    }

    return {
      ...column,
      headerStyle,
    };
  });
};

const MaterialTable: FC<TableProps> = ({ columns, ...props }) => {
  const cellClasses = useCellStyles();
  const headerClasses = useHeaderStyles();

  const MTColumns = convertColumns(columns);

  return (
    <MTable
      components={{
        Cell: props => <MTableCell className={cellClasses.root} {...props} />,
        Header: props => <MTableHeader classes={headerClasses} {...props} />,
      }}
      columns={MTColumns}
      icons={tableIcons}
      {...props}
    />
  );
};

type SubvalueCellProps = {
  value: React.ReactNode;
  subvalue: React.ReactNode;
};

export const SubvalueCell: FC<SubvalueCellProps> = ({ value, subvalue }) => (
  <>
    <div>{value}</div>
    <div>{subvalue}</div>
  </>
);

export default MaterialTable;
