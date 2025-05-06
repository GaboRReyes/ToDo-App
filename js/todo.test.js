/**
 * @jest-environment jsdom
 */

import Model from './model.js';

describe('Clase Model - método addTodo', () => {
  let model;
  let mockStorage;

  beforeEach(() => {
    // Mock de localStorage
    mockStorage = {
      getItem: jest.fn(() => JSON.stringify([])), // Devuelve un array vacío como string
      setItem: jest.fn(), // Función mock para setItem
    };

    // Crear nueva instancia con el mock
    model = new Model(mockStorage);
  });

  test('Agrega una tarea correctamente', () => {
    const title = 'Nueva tarea';
    const description = 'Descripción de la tarea';
  
    const nuevoTodo = model.addTodo(title, description);

    // Validar que el objeto regresado tiene los datos esperados
    expect(nuevoTodo).toMatchObject({
      title,
      description,
      completed: false
    });
    
  
    // Validar que se incrementó la lista interna
    const todos = model.getTodos();
    expect(todos.length).toBeGreaterThan(1);
    expect(todos[todos.length - 1]).toMatchObject({
      title,
      description,
      completed: false
    });
  
    // Verificar que se guardó en localStorage
    console.log('mockStorage.setItem mock calls:', mockStorage.setItem.mock.calls);  // Aquí agregas el console.log
  
    // Asegurarse de que setItem fue llamado con los parámetros correctos
    expect(mockStorage.setItem).toHaveBeenCalledTimes(1);  // Verifica que se haya llamado una vez
    expect(mockStorage.setItem).toHaveBeenCalledWith(
      'todos',  // El nombre de la clave
      JSON.stringify(todos)  // La lista de todos convertida a JSON
    );

    // Verificar el contenido de todos para asegurarse de que está correcto
    console.log('Contenido de todos:', todos);
  });
  test('2. Borra una tarea correctamente', () => {
    const tarea = model.addTodo('Leer libro', 'Capítulo 1');
    model.removeTodo(tarea.id);
    const todos = model.getTodos();

    expect(todos).not.toContainEqual(expect.objectContaining({ id: tarea.id }));
    expect(mockStorage.setItem).toHaveBeenCalled();
  });
});
