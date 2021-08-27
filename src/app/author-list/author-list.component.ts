import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor
  }

  onDelete(id: number) {
    this.authors = this.authors.filter(author => {
      // check ID
      return author.id !== id;
    })
    // Sau khi xóa phải cập nhật lại author selected
    if(this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }

}
