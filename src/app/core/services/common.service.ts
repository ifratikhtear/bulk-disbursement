import { Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { QueryModel } from '../models/query.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  toQueryString(obj: any) {
    let parts = [];
    for (const property in obj) {
      const value = obj[property];
      if (value != null && value !== undefined) {
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }
    }

    return parts.join('&');
  }

  toFormData(obj: any) {
    let formData = new FormData();
    for (const property in obj) {
      const value = obj[property];
      if (value != null && value !== undefined) {
        formData.append(property, value);
      }
    }

    return formData;
  }

  getUTCDate(date: any): Date {
    const _date = new Date(date);
    return new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate()));
  };

  getPaginationQuery(event: LazyLoadEvent): QueryModel {
    const queryModel = new QueryModel(0, 10);
    queryModel.pageNumber = event?.first! > 0 ? event?.first! / 10 : 0;
    queryModel.pageSize = event?.rows || 10;
    queryModel.sortBy = event?.sortField || 'id';
    queryModel.sortOrder = (event?.sortOrder && event?.sortOrder < 0) ? 'asc' : 'desc';
    return queryModel;
  }
}
