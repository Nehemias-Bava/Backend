import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    findAll(): Course[] {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Course {
        return this.courseService.findOne(Number(id));
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto): Course {
        return this.courseService.create(createCourseDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto): Course {
        return this.courseService.update(Number(id), updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): void {
        this.courseService.remove(Number(id));
    }
}