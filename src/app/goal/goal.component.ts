import { Component, OnInit,} from '@angular/core';
import {Goal} from '../goal'
import { from } from 'rxjs';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal (1, 'watch mancity vs real madrid game tonight.','on supersport 5', new Date(2020,3,14)),
    new Goal (2, 'Buy Mandazi.', 'from the canteen', new Date(2020,9,4)),
    new Goal (3, 'Call your friend.', 'using a telecom line', new Date(2019,9,1)),
    new Goal (4, 'Remember to do a bible study.','use Good News Bible', new Date(2010,11,19)),
    new Goal (5, 'Check notifications', 'on social media', new Date(2020,3,20)),
  ];
 
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
