import React from 'react';
import TabTable from './components/Table/TabTable';
import TabMenu from './components/TabMenu/TabMenu';
 
function UrllcDashboard() {
  const greeting = 'Hello Function Component!';
 
  return(
      <div>
            <TabMenu></TabMenu>
            <TabTable></TabTable>
      </div>
  );
  
}
 
export default UrllcDashboard;