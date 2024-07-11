import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class FileStorageService {
    private readonly studentsFilePath = path.join(__dirname, '..', 'data', 'students.json');
    private readonly coursesFilePath = path.join(__dirname, '..', 'data', 'courses.json');

    async readStudentsFile() {
        return this.readFile(this.studentsFilePath);
    }

    async readCoursesFile() {
        return this.readFile(this.coursesFilePath);
    }

    async writeStudentsFile(data: any) {
        await this.writeFile(this.studentsFilePath, data);
    }

    async writeCoursesFile(data: any) {
        await this.writeFile(this.coursesFilePath, data);
    }

    private async readFile(filePath: string) {
        try {
            const data = await fs.readFile(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            } else {
                throw error;
            }
        }
    }

    private async writeFile(filePath: string, data: any) {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    }
}