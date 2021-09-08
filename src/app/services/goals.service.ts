import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goal } from '../models/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  goalUrl: string = 'http://localhost:3004/goals';
  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
  errorMessage: string;

  constructor(private readonly http: HttpClient) { }

  getGoals(): Observable<Goal[]> {
    const results: Observable<Goal[]> = this.http.get<Goal[]>(this.goalUrl);
    console.log('Got all Goals');
    return results;
  }

  getGoalById(goalId: number): Observable<Goal> {
    const results: Observable<Goal> = this.http.get<Goal>(`${this.goalUrl}/${goalId}`);
    console.log('Got Goal by ID');
    return results;
  }

  addGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> = this.http.post<Goal>(this.goalUrl, goal, this.jsonContentTypeHeaders);
    console.log('Goal Added');
    return results;
  }

  updateGoal(goal: Goal): Observable<Goal> {
    const results: Observable<Goal> = this.http.put<Goal>(`${this.goalUrl}/${goal.id}`, goal, this.jsonContentTypeHeaders);
    console.log('Update Goal')
    return results;
  }

  deleteGoal(goalId: number): Observable<Goal> {
    const results: Observable<Goal> = this.http.delete<Goal>(`${this.goalUrl}/${goalId}`);
    console.log('Goal Deleted');
    return results;
  }


}
