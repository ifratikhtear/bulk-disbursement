import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
          { label: 'Customer', icon: 'pi pi-fw pi-users', routerLink: ['/admin/customers'] }
        ]
      },
      {
        label: 'Billing',
        items: [
          { label: 'Billing Integrations', icon: 'pi pi-fw pi-home', routerLink: ['/admin/billing-integrations'] },
          { label: 'Dynamic Billing', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dynamic-billing'] },
          {
            label: 'Biller Management',
            icon: 'uil-bill',
            items: [
              {
                label: 'Biller Category',
                icon: 'uil-bill',
                routerLink: ['/admin/biller-management/category-list']
              },
              {
                label: 'Billers',
                icon: 'uil-bitcoin-circle',
                routerLink: ['/admin/biller-management/biller-list']
              },
            ]
          },
        ]
      },
      {
        label: 'Administration',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {
            label: 'Users and Roles',
            icon: 'uil-users-alt',
            items: [
              {
                label: 'User Management',
                icon: 'uil-users-alt',
                routerLink: ['/admin/users']
              },
              {
                label: 'Role Management',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/admin/role']
              },

            ]
          },
          {
            label: 'Charges and Fees',
            icon: 'uil-bill',
            items: [
              {
                label: 'Charge Configuration',
                icon: 'uil-dollar-sign',
                routerLink: ['/admin/charges-and-gl']
              },
              {
                label: 'Limit Configuration',
                icon: 'uil-traffic-barrier',
                routerLink: ['/admin/limit']
              },

            ]
          },
          {
            label: 'Transaction',
            icon: 'uil-invoice',
            items: [
              {
                label: 'Transaction Category',
                icon: 'pi pi-fw pi-lock',
                routerLink: ['/admin/transaction-category']
              },
              {
                label: 'Transaction Type',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/admin/transaction-feature']
              },
            ]
          },
          

        ]
      },
      {
        label: '',
        items: [
          { label: 'Logout', icon: 'pi pi-fw pi-sign-out', routerLink: ['/auth'] }
        ]
      },
    ];
  }
}
