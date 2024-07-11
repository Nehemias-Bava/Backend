import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { FileStorageService } from '../file-storage.service';

@Module({
    providers: [StudentsService, FileStorageService],
    controllers: [StudentsController],
})
export class StudentsModule {}

// src/courses/courses.module.ts
import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { FileStorageService } from '../file-storage.service';

@Module({
    providers: [CoursesService, FileStorageService],
    controllers: [CoursesController],
})
export class CoursesModule {}