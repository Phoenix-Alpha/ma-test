import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

import './datagrid.scss';

export default function DataGridPage() {
  const customDateFormat = "MMMM dd, yyyy"

  const priorityCellRender = (cellData) => {
    return (
      <div style={{
        backgroundColor:
          cellPriorityColors[cellData.data?.Task_Priority - 1]
            ? cellPriorityColors[cellData.data.Task_Priority - 1]
            : '#000',
        color: 'white',
        borderRadius: 50,
        padding: '2px 7px',
        width: 60,
        textAlign: 'center'
      }}>
        {cellData.text}
      </div>
    )
  }

  return (
    <>
      <h2 className={'content-block'}>Tasks</h2>
      <DataGrid
        className={'dx-card wide-card'}
        dataSource={dataSource}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
      >
        <Paging defaultPageSize={50} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
        <Column dataField={'Task_ID'} width={90} hidingPriority={2} />
        <Column
          dataField={'Task_Subject'}
          width={190}
          caption={'Subject'}
          hidingPriority={8}
        />
        <Column
          dataField={'Task_Status'}
          caption={'Status'}
          hidingPriority={6}
        />
        <Column
          dataField={'Task_Priority'}
          caption={'Priority'}
          hidingPriority={5}
          cellRender={priorityCellRender}
        >
          <Lookup
            dataSource={priorities}
            valueExpr={'value'}
            displayExpr={'name'}
          />
        </Column>
        <Column
          dataField={'ResponsibleEmployee.Employee_Full_Name'}
          caption={'Assigned To'}
          allowSorting={false}
          hidingPriority={7}
        />
        <Column
          dataField={'Task_Start_Date'}
          caption={'Start Date'}
          dataType={'date'}
          hidingPriority={3}
          format={customDateFormat}
        />
        <Column
          dataField={'Task_Due_Date'}
          caption={'Due Date'}
          dataType={'date'}
          hidingPriority={4}
          format={customDateFormat}
        />
        <Column
          dataField={'Task_Priority'}
          caption={'Priority'}
          name={'Priority'}
          hidingPriority={1}
        />
        <Column
          dataField={'Task_Completion'}
          caption={'Completion'}
          hidingPriority={0}
        />
      </DataGrid>
    </>
)}

const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'Task_Priority',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name'
  ]
};

const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];

const cellPriorityColors = [
  '#000',
  '#0c0',
  '#f90',
  '#f40'
]
