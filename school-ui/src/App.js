import React, { useState, useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import StudentForm from './components/StudentForm';

const StudentList = ({ students, onDelete, onEdit }) => (
  <Table striped bordered hover className="mt-3">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Grado</th>
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
            <Button variant="warning" onClick={() => onEdit(student)}>
              Modificar
            </Button>{' '}
            <Button
              variant="danger"
              onClick={() => onDelete(student.id)}
            >
              Eliminar
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const App = () => {
  const [students, setStudents] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3000/students');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const students = await response.json();
      setStudents(students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = () => {
    fetchStudents();
  };

  const handleDeleteStudent = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/students/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchStudents();
      } else {
        console.error('Error deleting student:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleSort = async (order) => {
    try {
      const response = await fetch(`http://localhost:3000/students/sort/${order}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const sortedStudents = await response.json();
      setStudents(sortedStudents);
      setSortOrder(order);
    } catch (error) {
      console.error('Error sorting students:', error);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <Container>
      <h1 className="mt-4">Gestión de Estudiantes</h1>
      <StudentForm onSubmit={handleAddStudent} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <Button
        className="mt-3"
        onClick={() => handleSort(sortOrder === 'asc' ? 'desc' : 'asc')}
      >
        Ordenar por Grado ({sortOrder === 'asc' ? 'Descendente' : 'Ascendente'})
      </Button>
      <StudentList students={students} onDelete={handleDeleteStudent} onEdit={handleEditStudent} />
    </Container>
  );
};

export default App;
