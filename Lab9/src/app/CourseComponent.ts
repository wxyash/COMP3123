
import { Component } from '@angular/core';

@Component({
    selector: 'courses', // <courses></courses>
    template: `
        <h2> {{ title }} </h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent {
    title: string = "List of courses";
    courses = ["course", "course2", "course2"];
}