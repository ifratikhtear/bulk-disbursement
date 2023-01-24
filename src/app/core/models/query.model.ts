interface IQueryModel {
    pageNumber: number; 
    pageSize: number;
    sortBy:string;
    sortOrder: string;
}

export class QueryModel implements IQueryModel{
    pageNumber: number = 0; 
    pageSize: number = 10;
    sortBy:string = 'id';
    sortOrder: string = 'desc';
    constructor(pageNo:number, size:number, sortby:string ='id', sortOder:string ='desc') {
        this.pageNumber = pageNo;
        this.pageSize = size;
        this.sortBy = sortby;
        this.sortOrder = sortOder;
    }
}