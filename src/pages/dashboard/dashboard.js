import React from 'react';
import DashboardControl, { AjaxRemoteService } from 'devexpress-dashboard-react';

import './dashboard.scss';


export const handleBeforeSend = (jqXHR, settings) => {
  // Sets custom HTTP header here...
  // jqXHR.setRequestHeader('x-my-custom-header', 'my-customer-header-value')
}

export default function DashboardPage() {
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl
        style={{ height: '100%' }}
        workingMode="Viewer"
        endpoint="https://demos.devexpress.com/services/dashboard/api"
      >
        <AjaxRemoteService beforeSend={handleBeforeSend} />
      </DashboardControl>
    </div>
)}
