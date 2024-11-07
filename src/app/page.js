'use client'

import DashboardComponent from "@/components/DashboardComponent";
import MasterGate from "@/components/MasterGate";
import TemplateDashboard from "@/components/TemplateDashboard";
import { TrafficReport } from "@/components/TrafficReport";
import { useSelector } from "react-redux";

export default function Home() {
  const {menuIndex} = useSelector(state => state.global)

  const Component = () =>{
    switch (menuIndex) {
      case 0:
        return <DashboardComponent />
      case 1:
        return <TrafficReport />
      default:
        return <MasterGate />
    }
  }

  return (
    <TemplateDashboard> 
      <Component />
    </TemplateDashboard>
  );
}
