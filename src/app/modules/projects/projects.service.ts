import {Injectable} from "@angular/core";
import {Project} from "../../../core/contracts/Models/Project/Project";
import {BackendDataSource} from "../../../core/modules/BackendDataSource/backendDataSource";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ProjectsService {
    private whenGetProjects = new Subject();
    private whenAddProject = new Subject<Project>();
    private whenUpdateProject = new Subject<Project>();
    private whenDeleteProject = new Subject<Project>();
    public projectsStream = new Subject<Project[]>();

    constructor(
        private backend: BackendDataSource<Project>
    ) {
        this.whenGetProjects
            .switchMap(() => this.backend.readMany({model: Project}))
            .map(next => next.data)
            .multicast(this.projectsStream)
            .connect();
        this.whenAddProject
            .switchMap((next) => this.backend.create({model: Project, data: next}))
            .map(next => next.data)
            .withLatestFrom(this.projectsStream)
            .map(([newProject, projects]) => {
                projects.push(newProject);
                return projects;
            })
            .multicast(this.projectsStream)
            .connect();
        this.whenUpdateProject
            .switchMap((next) => this.backend.update({model: Project, data: next}))
            .map(next => next.data)
            .withLatestFrom(this.projectsStream)
            .map(([updateProject, projects]) => {
                const updateIndex = projects.findIndex((project) => project.id === updateProject.id);
                projects[updateIndex] = updateProject;
                return projects;
            })
            .multicast(this.projectsStream)
            .connect();
        this.whenDeleteProject
            .switchMap((next) => this.backend.delete({model: Project, params: {id: next.id}}))
            .map(next => next.data)
            .withLatestFrom(this.projectsStream)
            .map(([deleteProject, projects]) => {
                const deleteIndex = projects.findIndex((project) => project.id === deleteProject.id);
                projects.splice(deleteIndex, 1);
                return projects;
            })
            .multicast(this.projectsStream)
            .connect();
    }

    public getProjects(): void {
        this.whenGetProjects.next();
    }

    public addProject(project: Project) {
        this.whenAddProject.next(project);
    }

    public updateProject(project: Project) {
        this.whenUpdateProject.next(project);
    }

    public deleteProject(project: Project) {
        this.whenDeleteProject.next(project);
    }
}