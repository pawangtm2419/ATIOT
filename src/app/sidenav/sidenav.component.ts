import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  userRecord: any;
  userType: any;
  userMenu: [];
  masters: any;
  dashboard: any;
  services: any;
  reports: any;
  model: any;
  machine: any;
  device: any;
  devicemachinemapping: any;
  multimapping: any;
  demonstrator: any;
  cmaster: any;
  location: any;
  maplocation: any;
  serviceengineer: any;
  testing: any;
  report: any;
  analytics: any;
  fuel: any;
  oilpressure: any;
  temperature: any;
  battery: any;
  breakdown: any;
  batch: any;
  trackvehicle: any;
  service: any;
  schedules: any;
  serviceupdate: any;
  maintainlog: any;
  shipmentlog: any;
  demo: any;
  plandemonstration: any;
  demoreport: any;
  demonstratorsreport: any;
  market: any;
  zones: any;
  states: any;
  depot: any;
  dealer: any;
  menus: any;
  users: any;
  variant: any;
  rolemanagement: any; 
  roles: any;
  subzone: any;
  bom: any;
  demolink: any;
  sharetrip: any;
  reportsedit: any;
  notiflist: any;
  rnd: any;
  iotmapping: any;
  fuelanalytics: any;
  project: any;
  projectmapping: any;
  projectreports: any;
  callback: any;
  sos: any;
  servicerequest: any;
  logs: any;

  constructor() { } 
   
  ngOnInit(): void {
    this.getUserroleRecord()
  }   
  getUserroleRecord(){
    this.userRecord = JSON.parse(localStorage.getItem('user')); 
    this.userType =  this.userRecord.role.toString();
    this.userMenu = this.userRecord.roleMenus;
    this.masters = this.userRecord.roleMenus.masters.link;
    this.dashboard = this.userRecord.roleMenus.dashboard.link;
    this.services = this.userRecord.roleMenus.services.link;
    this.reports = this.userRecord.roleMenus.reports.link;
    this.model = this.userRecord.roleMenus.model.link;
    this.machine = this.userRecord.roleMenus.machine.link;
    this.device = this.userRecord.roleMenus.device.link;
    this.devicemachinemapping = this.userRecord.roleMenus.devicemachinemapping.link;
    this.multimapping = this.userRecord.roleMenus.multimapping.link;
    this.demonstrator = this.userRecord.roleMenus.demonstrator.link;
    this.cmaster = this.userRecord.roleMenus.cmaster.link;
    this.location = this.userRecord.roleMenus.location.link;
    this.maplocation = this.userRecord.roleMenus.maplocation.link;
    this.serviceengineer = this.userRecord.roleMenus.serviceengineer.link;
    this.testing = this.userRecord.roleMenus.testing.link;
    this.report = this.userRecord.roleMenus.report.link;
    this.analytics = this.userRecord.roleMenus.analytics.link;
    this.fuel = this.userRecord.roleMenus.fuel.link;
    this.oilpressure = this.userRecord.roleMenus.oilpressure.link;
    this.temperature = this.userRecord.roleMenus.temperature.link;
    this.battery = this.userRecord.roleMenus.battery.link;
    this.breakdown = this.userRecord.roleMenus.breakdown.link;
    this.batch = this.userRecord.roleMenus.batch.link;
    this.trackvehicle = this.userRecord.roleMenus.trackvehicle.link;
    this.service = this.userRecord.roleMenus.service.link;
    this.schedules = this.userRecord.roleMenus.schedules.link;
    this.serviceupdate = this.userRecord.roleMenus.serviceupdate.link;
    this.maintainlog = this.userRecord.roleMenus.maintainlog.link;
    this.shipmentlog = this.userRecord.roleMenus.shipmentlog.link;
    this.demo = this.userRecord.roleMenus.demo.link;
    this.plandemonstration = this.userRecord.roleMenus.plandemonstration.link;
    this.demoreport = this.userRecord.roleMenus.demoreport.link;
    this.demonstratorsreport = this.userRecord.roleMenus.demonstratorsreport.link;
    this.market = this.userRecord.roleMenus.market.link;
    this.zones = this.userRecord.roleMenus.zones.link;
    this.states = this.userRecord.roleMenus.states.link;
    this.depot = this.userRecord.roleMenus.depot.link;
    this.dealer = this.userRecord.roleMenus.dealer.link;
    this.menus = this.userRecord.roleMenus.menus.link;
    this.users = this.userRecord.roleMenus.users.link;
    this.variant = this.userRecord.roleMenus.variant.link;
    this.rolemanagement = this.userRecord.roleMenus.rolemanagement.link;
    this.roles = this.userRecord.roleMenus.roles.link;
    this.subzone = this.userRecord.roleMenus.subzone.link;
    this.bom = this.userRecord.roleMenus.bom.link;
    this.demolink = this.userRecord.roleMenus.demolink.link;
    this.sharetrip = this.userRecord.roleMenus.sharetrip.link;
    this.reportsedit = this.userRecord.roleMenus.reportsedit.link;
    this.notiflist = this.userRecord.roleMenus.notiflist.link;
    this.rnd = this.userRecord.roleMenus.rnd.link;
    this.iotmapping = this.userRecord.roleMenus.iotmapping.link;
    this.fuelanalytics = this.userRecord.roleMenus.fuelanalytics.link;
    this.project = this.userRecord.roleMenus.project.link;
    this.projectmapping = this.userRecord.roleMenus.projectmapping.link;
    this.projectreports = this.userRecord.roleMenus.projectreports.link;
    this.callback = this.userRecord.roleMenus.callback.link;
    this.sos = this.userRecord.roleMenus.sos.link;
    this.servicerequest = this.userRecord.roleMenus.servicerequest.link;
    this.logs = this.userRecord.roleMenus.logs.link;
  }
}
    