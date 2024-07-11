import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.model';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    getAllCourses(): Course[] {
        return this.coursesService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string): Course {
        return this.coursesService.getCourseById(+id);
    }

    @Post()
    addCourse(@Body() course: Course) {
        this.coursesService.addCourse(course);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() updatedCourse: Course) {
        this.coursesService.updateCourse(+id, updatedCourse);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string) {
        this.coursesService.deleteCourse(+id);
    }
}
