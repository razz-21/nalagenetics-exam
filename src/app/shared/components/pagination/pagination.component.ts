import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() page!: number;
  @Input() totalSize!: number;
  @Input() pageSize!: number;
  @Output() selectPageNumber: EventEmitter<number> = new EventEmitter();

  totalPage = 0;
  totalPageInArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeTotalPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPageInArray = [];
      this.initializeTotalPage();
  }

  initializeTotalPage(): void {
    this.totalPage = Math.ceil((this.totalSize / this.pageSize));
    for (let i = 0; i <= this.totalPage - 1; i++) {
      this.totalPageInArray.push(i +  1);
    }
  }

  selectPage(pageNumber: number): void {
    this.selectPageNumber.emit(pageNumber)
  }

}
