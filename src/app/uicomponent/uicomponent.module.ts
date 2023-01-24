import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng component
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import {MultiSelectModule} from 'primeng/multiselect';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    DropdownModule,
    SelectButtonModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    MultiSelectModule,
    OverlayPanelModule,
    CalendarModule,
    ToggleButtonModule,
  ],
  exports:[
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    DropdownModule,
    SelectButtonModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    ConfirmDialogModule,
    MultiSelectModule,
    OverlayPanelModule,
    CalendarModule,
    ToastModule,
    MultiSelectModule,
    ToggleButtonModule,
  ]
})
export class UIComponentModule { }
