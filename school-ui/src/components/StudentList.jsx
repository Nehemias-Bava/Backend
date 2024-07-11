import React from 'react';
import { Table, Button } from 'react-bootstrap';

const StudentList = ({ students, onDelete, onEdit }) => (
    <Table striped bordered hover className="table table-dark mt-3">
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Curso</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        {students.map((student) => (
            <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td>
                <Button variant="warning" className="btn btn-light" onClick={() => onEdit(student)}>
                Modificar
                </Button>{' '}
                <Button variant="danger" onClick={() => onDelete(student.id)}>
                Eliminar
                </Button>
            </td>
            </tr>
        ))}
        </tbody>
    </Table>
);

export default StudentList;
