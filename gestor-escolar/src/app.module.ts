import { Module } from '@nestjs/common';
import { StudentModule } from './students/student.module';

@Module({
    imports: [StudentModule],
})
export class AppModule {}
