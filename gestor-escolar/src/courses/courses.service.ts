import { Injectable, NotFoundException } from '@nestjs/common';
import { FileStorageService } from '../file-storage.service';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    constructor(private readonly fileStorageService: FileStorageService) {}

    async getAllCourses(): Promise<Course[]> {
        return await this.fileStorageService.readCoursesFile();
    }

    async getCourseById(id: number): Promise<Course> {
        const courses = await this.getAllCourses();
        const course = courses.find(c => c.id === id);
        if (!course) {
            throw new NotFoundException('Curso no encontrado');
        }
        return course;
    }

    async addCourse(course: Course): Promise<void> {
        const courses = await this.getAllCourses();
        course.id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;
        courses.push(course);
        await this.fileStorageService.writeCoursesFile(courses);
    }

    async updateCourse(id: number, updatedCourse: Course): Promise<void> {
        const courses = await this.getAllCourses();
        const index = courses.findIndex(c => c.id === id);
        if (index === -1) {
            throw new NotFoundException('Curso no encontrado');
        }
        courses[index] = { ...courses[index], ...updatedCourse };
        await this.fileStorageService.writeCoursesFile(courses);
    }

    async deleteCourse(id: number): Promise<void> {
        const courses = await this.getAllCourses();
        const updatedCourses = courses.filter(c => c.id !== id);
        if (courses.length === updatedCourses.length) {
            throw new NotFoundException('Curso no encontrado');
        }
        await this.fileStorageService.writeCoursesFile(updatedCourses);
    }
}