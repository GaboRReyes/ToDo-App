export function exportToExcel(tasks) {
    const wb = XLSX.utils.book_new();
    const ws_data = [["Título", "Descripción", "Completado"]];

    tasks.forEach(task => {
        ws_data.push([
            task.title,
            task.description,
            task.completed ? "Sí" : "No"
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, "Tareas");
    XLSX.writeFile(wb, "Tablas.xlsx");
}
