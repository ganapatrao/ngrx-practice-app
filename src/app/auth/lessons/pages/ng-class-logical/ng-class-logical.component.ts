import { NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
interface student {
  id:number,
  name:string,
  age:number,
  grade: string
}

@Component({
  selector: 'app-ng-class-logical',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './ng-class-logical.component.html',
  styleUrl: './ng-class-logical.component.css'
})



export class NgClassLogicalComponent {

  selectedUserId = 0;
  sortedData :student[]=[]
  selectedUser(id: number){
    if (this.selectedUserId === id) {
      this.selectedUserId = 0;
      return;
    }
    this.selectedUserId = id;

  }

  studentsrecords =[
    { id: 1, name : 'rock', age: 22, grade: 'B'  
  },
  { id: 2, name : 'jack', age: 25, grade: 'B'  
  },
  {
    id: 3, name : 'John', age: 21, grade: 'A' 
  },
  { id: 4, name : 'Jane', age: 15, grade: 'B'  
  }]


  sortBy(columnName: 'name' | 'age' | 'grade'){ {
    console.log("gt")

    this.sortedData = [...this.studentsrecords]
    this.sortedData.sort((a,b)=>{
      if(a[columnName] < b[columnName]) return -1;
      if(a[columnName] > b[columnName]) return 1;
      return 0;
    })

    this.studentsrecords = this.sortedData;
  }

}
}
