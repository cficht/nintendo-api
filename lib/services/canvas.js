const request = require('superagent');

const getStudents = (courseId) => {
  return request
    .get(`https://canvas.instructure.com/api/v1/courses/${courseId}/users?per_page=100&include%5B%5D=enrollments`)
    .set('Authorization', `Bearer ${process.env.CANVAS_TOKEN}`)
    .then(({ body }) => body
      .filter(person => person.enrollments[0].role === 'StudentEnrollment'));
};

module.exports = {
  getStudents
}
;
