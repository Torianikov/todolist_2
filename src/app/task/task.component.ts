
import { Component, OnInit, Renderer2, ElementRef, ViewChild,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask, clear, deleteTask, editTask, taskSelector, executionSelector } from '../reducers/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  textNewTask: string;

  arrTask$ = this.store.select(taskSelector);
  execuion$ = this.store.select(executionSelector);


  execuionClient: string;

  @ViewChild('container')
  private container: ElementRef;

  constructor(private renderer: Renderer2, private store: Store ) { }

  ngOnInit(): void {
  }


  add(){

    this.store.dispatch(addTask({textNewTask: this.textNewTask, executionClient: this.execuionClient }));
    this.textNewTask = '';
    console.log(this.arrTask$)

  }

  clear(){

    this.store.dispatch(clear());
    this.textNewTask = '';

  }

  deleteTask(index){
    
    this.store.dispatch(deleteTask({index: index}));
   
  }

  edit(index, item, b1, b2, b3){
    
    let upadateExecution;

    if(b1) upadateExecution = 'not_performed';
    if(b2) upadateExecution = 'doing';
    if(b3) upadateExecution = 'done';

    this.store.dispatch(editTask({index:index, upadateTask: item, upadateExecution: upadateExecution  }))
  }

  

}
