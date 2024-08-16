export class CreateStudentDto {
    readonly nombre: string;
    readonly apellido: string;
    readonly edad: number;
    readonly dni: number;
    readonly curso: string;
    readonly celularResponsable: number;
}