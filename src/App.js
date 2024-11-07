import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminDashboard from './components/AdminDashboard';
import AdminDashboard from './pages/AdminDashboard';
// import ClientDashboard from './components/ClientDashboard';
// import EmployeeDashboard from './components/EmployeeDashboard';
import AdminLogin from './components/AdminLogin';
import Sidebar from './components/Sidebar';
import ClientDashBoard from './pages/ClientDashBoard';
import ClientProjects from './pages/ClientManagement/ClientProjects';
import Employees from './pages/EmployeeManagement/Employees';
import Table from './pages/EmployeeManagement/Table';
import AttendanceTable from './pages/EmployeeManagement/AttendanceTable';
import TimeTracker from './pages/EmployeeManagement/TimeTracker';
import TaskBoard from './pages/EmployeeManagement/TaskBoard';
import Dashboardemp from './pages/EmployeeManagement/Dashboardemp';
import Sidebarsal from './pages/SalesManagement/Sidebarsal';
import Sidebaremp from './pages/EmployeeManagement/Sidebaremp';
import LeadTable from './pages/SalesManagement/LeadTable';
import Automation from './pages/SalesManagement/Automation';
import AIInsights from './pages/SalesManagement/AIInsights';
import NotificationPanel from './pages/SalesManagement/NotificationPanel';
import GanttChart from './pages/SalesManagement/GanttChart';
import DocuSign from './pages/SalesManagement/DocuSign';
import SidebarPro from './pages/ProjectManagement/SidebarPro';
import ProjectTable from './pages/ProjectManagement/ProjectTable';
import WorkScheduleTable from './pages/EmployeeManagement/WorkScheduleTable';
import PerformanceReviewTable from './pages/EmployeeManagement/PerformanceReviewTable';
import OpportunitiesTable from './pages/SalesManagement/OpportunitiesTable';
import SalesOverview from './pages/SalesManagement/SalesOverview';
import ClientTable from './pages/SalesManagement/ClientTable';
import GanttChartpro from './pages/ProjectManagement/GanttChartpro';
import Reports from './pages/ProjectManagement/Reports';
import FileUpload from './pages/ProjectManagement/FileUpload';
import ProjectModal from './pages/ProjectManagement/ProjectModal';
import BudgetManagement from './pages/ProjectManagement/BudgetManagement';
import ProjectDashboard from './pages/ProjectManagement/ProjectDashboard';
import MilestoneDashboard from './pages/ProjectManagement/MilestoneDashboard';
import AutomationDashboard from './pages/ProjectManagement/AutomationDashboard';
import RiskIssueDashboard from './pages/ProjectManagement/RiskIssueDashboard';
import ClientManagement from './pages/ClientManagement/ClientManagement';
import Sidebarclient from './pages/ClientManagement/Sidebarclient';
import CommunicationHub from './pages/ClientManagement/CommunicationHub';
import AIInsightsclient from './pages/ClientManagement/AIInsightsclient';
import ActivityLog from './pages/ClientManagement/ActivityLog';
import BulkUpload from './pages/ClientManagement/BulkUpload';
import ExportDataButton from './pages/ClientManagement/ExportDataButton';
import ClientSegmentation from './pages/ClientManagement/ClientSegmentation';
import NPSSurvey from './pages/ClientManagement/NPSSurvey';
import ReminderForm from './pages/ClientManagement/ReminderForm';
import ReportsAnalytics from './pages/ClientManagement/ReportsAnalytics';
import SidebarNotify from './pages/NotificationManagement/SidebarNotify';
import AIAlertNotification from './pages/NotificationManagement/AIAlertNotification';
import NotificationsOverview from './pages/NotificationManagement/NotificationsOverview';
import SidebarFinan from './pages/FinancialManagement/SidebarFinan';
import SidebarReport from './pages/ReportsManagement/SidebarReport';
import FinancialOverview from './pages/FinancialManagement/FinancialOverview';
import InvoicingTable from './pages/FinancialManagement/InvoicingTable';
import ExpensesTable from './pages/FinancialManagement/ExpensesTable';
import SidebarMarket from './pages/MarketingManagement/SidebarMarket';
import LeadTableMarket from './pages/MarketingManagement/LeadTableMarket';
import ROICalculator from './pages/MarketingManagement/ROICalculator';
import SidebarSettings from './pages/SettingsMangement/SidebarSettings';
import SidebarSupport from './pages/SupportManagement/SidebarSupport';
import TicketTable from './pages/SupportManagement/TicketTable';
import ChatbotIntegration from './pages/SupportManagement/ChatbotIntegration';
import KnowledgeBase from './pages/SupportManagement/KnowledgeBase';
import GeneralSettings from './pages/SettingsMangement/GeneralSettings';
import UserRoleManagement from './pages/SettingsMangement/UserRoleManagement';
import TaxManagement from './pages/FinancialManagement/TaxManagement';
import FinancialReports from './pages/FinancialManagement/FinancialReports';
import BudgetActualAnalysis from './pages/FinancialManagement/BudgetActualAnalysis';
import PaymentsOverview from './pages/FinancialManagement/PaymentsOverview';
import ReportsOverviewTab from './pages/ReportsManagement/ReportsOverviewTab';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/client-projects" element={<ClientProjects />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/client-dashboard" element={<ClientDashBoard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/sidebaremp" element={ <Sidebaremp/> } />
        <Route path='/employee-dashboard' element={<Employees />} />
        <Route path='/table' element={<Table />} />
        <Route path="/attendance" element={< AttendanceTable />} />
        <Route path="/time-tracker" element={< TimeTracker />} />
        <Route path="/taskboard" element={< TaskBoard />} />
        <Route path="/dashboard" element={< Dashboardemp />} />
        <Route path="/sidebarsale" element={< Sidebarsal />} />
        <Route path = "/salesoverview" element= {<SalesOverview/>} />
        <Route path="/leadtab" element={< LeadTable />} />
        <Route path = "/opportunities" element={ <OpportunitiesTable/>} />
        <Route path="/automation" element={< Automation />} />
        <Route path="/aiinsights" element={< AIInsights />} />
        <Route path="/notification" element = {<NotificationPanel/>} />
        <Route path="/charts" element = {< GanttChart />} />
        <Route path="/docsign" element = {< DocuSign />} />
        <Route path="/sidebarpro" element = { <SidebarPro/>} />
        <Route path="/projectdashboard" element = { <ProjectTable/>} />
        <Route path= "/workschedule" element= {< WorkScheduleTable/>} />
        <Route path = "/performance" element = {<PerformanceReviewTable/>} />
        <Route path = "/salesoverview" element= {<SalesOverview/>} />
        <Route path ="/clientmanage" element = {<ClientTable/>} />
        <Route path="/ganttchart" element = {<GanttChartpro/>} />
        <Route path="/report" element = { < Reports /> } />
        <Route path="/fileupload" element = {<FileUpload />} />
        <Route path="/projectmodal" element = {<ProjectModal/>} />
        <Route path="/budgetmanagement" element = { <BudgetManagement/> } />
        <Route path="/projectcolab" element = { < ProjectDashboard /> } />
        <Route path="/milestonetrack" element={<MilestoneDashboard/>} />
        <Route path="/automationwork" element={<AutomationDashboard />} />
        <Route path="/riskissue" element = { < RiskIssueDashboard /> } />
        <Route path="sidebarclient" element = {< Sidebarclient/>} />
        <Route path="clientmanagement" element = {< ClientManagement/>} />
        <Route path="comhub" element = {< CommunicationHub/>} />
        <Route path="aiinsights" element = {< AIInsightsclient />} />
        <Route path="activitylog" element = { <ActivityLog /> } />  
        <Route path ="bulkupload" element = {< BulkUpload/> } />
        <Route path="exportdata" element = {< ExportDataButton/>}  /> 
        <Route path="clientseg" element = {< ClientSegmentation/>} />
        <Route path="npssurvey" element = { <NPSSurvey/> } />
        <Route path="reminderform" element = {<ReminderForm/>} />
        <Route path="reportanalytics" element = {<ReportsAnalytics/>} />
        <Route path = "sidebarnotify" element = { <SidebarNotify/> } />
        <Route path = "aialertnotify" element = { < AIAlertNotification/> } />
        <Route path = "notifyoverview" element = {<NotificationsOverview/>}/>
        <Route path = "sidebarfinan" element = {< SidebarFinan/>} />
        <Route path = "sidebarreports" element = {< SidebarReport/>} />
        <Route path = "financialoverview" element = { < FinancialOverview /> } />
        <Route path = "financialinvoice" element =  { < InvoicingTable /> } />
        <Route path = "expensestab" element =  { < ExpensesTable /> } />
        <Route path = "sidebarmarket" element =  {<SidebarMarket/>} />
        <Route path = "leadtablemarket" element =  { < LeadTableMarket /> } />
        <Route path = "roical" element = { < ROICalculator/> } />
        <Route path = "sidebarsettings" element = { < SidebarSettings /> } />
        <Route path = "sidebarsupport" element =  { <SidebarSupport/> } />
        <Route path = "tickettab" element =  { < TicketTable /> } />
        <Route path = "chatbotinte" element =  { <ChatbotIntegration /> } />
        <Route path = "knowledgebase" element =  {  < KnowledgeBase /> } />
        <Route path =  "generalset" element =  {  < GeneralSettings /> } />
        <Route path = "userrole" element = { <UserRoleManagement/> } />
        <Route path = "taxmanagement" element =  {  <TaxManagement/> } />
        <Route path = "financialreport" element = {<  FinancialReports />} />
        <Route path =  "budgetact" element = { < BudgetActualAnalysis /> } />
        <Route path =  "paymentsoverview" element =  { < PaymentsOverview /> } />
        <Route path =  "reportoverview" element = { <ReportsOverviewTab />  }/>
          {/* <Route path="/workschedule" elemen = {<WorkScheduleTable/>}/> */}
        {/* <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

