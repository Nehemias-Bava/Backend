import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('/api/students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post()
    async create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto);
    }

    @Get()
    async findAll() {
        return this.studentService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.studentService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
        return this.studentService.update(id, updateStudentDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.studentService.remove(id);
    }
}
