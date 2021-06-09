import { Component, OnInit, Renderer2, ElementRef, ViewChild,  } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask, clear, deleteTask, editTask, taskSelector } from '../reducers/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  textNewTask: string;
  arrTask$ = this.store.select(taskSelector);
  item:string;
  

  @ViewChild('container')
  private container: ElementRef;

  constructor(private renderer: Renderer2, private store: Store ) { }

  ngOnInit(): void {
  }


  add(){
    // this.arrTask.push(this.textNewTask);

    // const newTask = this.renderer.createElement('div');
    // const textTask = this.renderer.createText(this.textNewTask);
    // this.renderer.addClass(newTask, 'task');
    // this.renderer.appendChild(newTask, textTask);
    // this.renderer.appendChild(this.container.nativeElement, newTask);
    
    // console.log(this.arrTask);

    this.store.dispatch(addTask({textNewTask: this.textNewTask}));
    // console.log(i)
  }

  clear(){
    this.store.dispatch(clear());
  }

  deleteTask(index){
    // console.log(index);
    this.store.dispatch(deleteTask({index: index}));
    // console.log(this.arrTask$);
  }

  edit(index, item){
    console.log(index + " " + item);

    this.store.dispatch(editTask({index:index, upadateTask: item}))
  }

}
