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
        ]
      },
      {
        label: 'Salary Disbursment',
        items: [
          { label: 'Bulk Salary', icon: 'pi pi-money-bill', routerLink: ['/admin/billing-integrations'] },
          { label: 'Dynamic Billing', icon: 'pi pi-money-bill', routerLink: ['/admin/dynamic-billing'] },
        ]
      },
      {
        label: 'Administration',
        items: [
          {
            label: 'Users and Roles',
            icon: 'pi pi-fw pi-briefcase',
            items: [
              {
                label: 'User Management',
                icon: 'pi pi-users',
                routerLink: ['/admin/users']
              },
              {
                label: 'Role Management',
                icon: 'pi pi-fw pi-times-circle',
                routerLink: ['/admin/role']
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
