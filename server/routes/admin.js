let express = require('express')
let router = express.Router()
let auth = require('./auth')

// Require controller modules.
let adminController = require('../controllers/adminController')

// 01 - Récupérer le nombre d'articles, d'utilisateurs et de commentaires
router.get('/', auth.required, adminController.admin_count_get)

// 02 - Récupérer la liste des courses
router.get('/courses', auth.required, adminController.admin_courses_get)

// 03 - Récupérer les détails d’un course
router.get('/course/:id_course', auth.required, adminController.admin_course_get)

// 04 - Mettre à jour un course. id_course present dans body
router.post('/course/update', auth.required, adminController.admin_course_update_post)

// 05 - Suppression d'un course. id_course present dans body
router.post('/course/delete', auth.required, adminController.admin_course_delete_post)

// 06 - Récupérer la liste des projects
router.get('/projects', auth.required, adminController.admin_projects_get)

// 07 - Récupérer les détails d’un project
router.get('/project/:id_project', auth.required, adminController.admin_project_get)

// 08 - Mettre à jour d'un project. id_project present dans body
router.post('/project/update', auth.required, adminController.admin_project_update_post)

// 09 - Suppression d'un project. id_project present dans body
router.post('/project/delete', auth.required, adminController.admin_project_delete_post)

// 10 - Récupérer la liste des comments
router.get('/comments', auth.required, adminController.admin_comments_get)

// 11 - Récupérer les détails d’un comment
router.get('/comment/:id_comment', auth.required, adminController.admin_comment_get)

// 12 - Mettre à jour un comment. id_comment present dans body
router.post('/comment/update', auth.required, adminController.admin_comment_update_post)

// 13 - Suppression d'un comment. id_comment present dans body
router.post('/comment/delete', auth.required, adminController.admin_comment_delete_post)

// 14 - Récupérer la liste des users
router.get('/users', auth.required, adminController.admin_users_get)

// 15 - Récupérer les détails d’un user
router.get('/user/:id_user', auth.required, adminController.admin_user_get)

// 16 - Mettre à jour un user
router.post('/user/:id_user/update', auth.required, adminController.admin_user_update_post)

// 17 - Suppression d'un user. id_user present dans body
router.post('/user/delete', auth.required, adminController.admin_user_delete_post)

module.exports = router