import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
    private courses: Course[] = [];

    findAll(): Course[] {
        return this.courses;
    }

    findOne(id: number): Course {
        return this.courses.find(course => course.id === id);
    }

    create(createCourseDto: CreateCourseDto): Course {
        const newCourse = { id: Date.now(), ...createCourseDto, students: [] };
        this.courses.push(newCourse);
        return newCourse;
    }

    update(id: number, updateCourseDto: UpdateCourseDto): Course {
        const course = this.findOne(id);
        Object.assign(course, updateCourseDto);
        return course;
    }

    remove(id: number): void {
        this.courses = this.courses.filter(course => course.id !== id);
    }
}