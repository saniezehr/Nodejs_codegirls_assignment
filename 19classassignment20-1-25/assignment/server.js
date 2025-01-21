import express from 'express';

const app = express();
const PORT = 3000;

// Data
const courses = [
    { id: 1, name: "Mathematics" },
    { id: 2, name: "Physics" },
    { id: 3, name: "Chemistry" }
];

const students = [
    { id: 1, name: "Sani" },
    { id: 2, name: "Fatima" },
    { id: 3, name: "Haisum" },
    { id: 4, name: "Daniyal" },
    { id: 5, name: "Jack" }
];

const attendance = [
    { id: 1, courseId: 1, studentId: 1, percentage: 90 },
    { id: 2, courseId: 2, studentId: 1, percentage: 80 },
    { id: 3, courseId: 3, studentId: 1, percentage: 85 },

    { id: 4, courseId: 1, studentId: 2, percentage: 75 },
    { id: 5, courseId: 2, studentId: 2, percentage: 89 },
    { id: 6, courseId: 3, studentId: 2, percentage: 64 },

    { id: 7, courseId: 1, studentId: 3, percentage: 85 },
    { id: 8, courseId: 2, studentId: 3, percentage: 93 },
    { id: 9, courseId: 3, studentId: 3, percentage: 76 },

    { id: 10, courseId: 1, studentId: 4, percentage: 82 },
    { id: 11, courseId: 2, studentId: 4, percentage: 69 },
    { id: 12, courseId: 3, studentId: 4, percentage: 78 },

    { id: 13, courseId: 1, studentId: 5, percentage: 90 },
    { id: 14, courseId: 2, studentId: 5, percentage: 86 },
    { id: 15, courseId: 3, studentId: 5, percentage: 78 }

];

// Function to get attendance for a specific course
function getAttendanceByCourse(courseId) {
    return new Promise((resolve, reject) => {
        const courseAttendance = attendance.filter(record => record.courseId === courseId);
        if (courseAttendance.length > 0) {
            resolve(courseAttendance);
        } else {
            reject(`No attendance records found for courseId: ${courseId}`);
        }
    });
}

// Function to get student name by ID
function getStudentNameById(studentId) {
    const student = students.find(std => std.id === studentId);
    return student ? student.name : "Unknown Student";
}

// Function to get course name by ID
function getCourseNameById(courseId) {
    const course = courses.find(crs => crs.id === courseId);
    return course ? course.name : "Unknown Course";
}

// Async function to print attendance for a course
async function printAttendance(courseId) {
    try {
        const courseAttendance = await getAttendanceByCourse(courseId);
        const courseName = getCourseNameById(courseId);

        console.log(`Attendance for Course: ${courseName}`);
        courseAttendance.forEach(record => {
            const studentName = getStudentNameById(record.studentId);
            console.log(`Student: ${studentName}, Attendance: ${record.percentage}% `);
        });
    } catch (error) {
        console.error(error);
    }
}

// Example Usage
printAttendance(1); // Mathematics
printAttendance(2); // Physics
printAttendance(3); // Chemistry

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
