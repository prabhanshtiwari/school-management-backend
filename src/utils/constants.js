// User Roles
export const UserRolesEnum = {
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
  PRINCIPAL: "principal",
  VICE_PRINCIPAL: "vice_principal",
  TEACHER: "teacher",
  STUDENT: "student",
  PARENT: "parent",
  LIBRARIAN: "librarian",
  ACCOUNTANT: "accountant",
  RECEPTIONIST: "receptionist",
  HR: "hr",
};

export const AvailableUserRole = Object.values(UserRolesEnum);

// Common Statuses
export const StatusEnum = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  ARCHIVED: "archived",
};

// Attendance
export const AttendanceStatus = {
  PRESENT: "present",
  ABSENT: "absent",
  LATE: "late",
  EXCUSED: "excused",
};

// Grades
export const GradeEnum = {
  A_PLUS: "A+",
  A: "A",
  B_PLUS: "B+",
  B: "B",
  C: "C",
  D: "D",
  F: "F",
};

// Subjects
export const SubjectsEnum = {
  MATH: "Mathematics",
  SCIENCE: "Science",
  ENGLISH: "English",
  HISTORY: "History",
  GEOGRAPHY: "Geography",
  PHYSICS: "Physics",
  CHEMISTRY: "Chemistry",
  BIOLOGY: "Biology",
  COMPUTER_SCIENCE: "Computer Science",
};

// Notification Types
export const NotificationType = {
  INFO: "info",
  WARNING: "warning",
  SUCCESS: "success",
  ERROR: "error",
};

// System Constants
export const SystemConstants = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_UPLOAD_SIZE_MB: 10,
  SUPPORTED_FILE_TYPES: ["jpg", "png", "pdf", "docx"],
};
