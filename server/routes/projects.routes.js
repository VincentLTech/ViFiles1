const CONTROLLER = require('../controllers/projects.controller')


module.exports = app => {
    app.get('/api/projects', CONTROLLER.getAllProjects)
    app.post('/api/project/create', CONTROLLER.createNewProject)
    app.get('/api/project/:id',CONTROLLER.getOneProject)
    app.put('/api/project/:id', CONTROLLER. updateProject)
    app.delete('/api/project/:id', CONTROLLER.deleteExistingProject)
    app.put('/api/project/:id/:uid', CONTROLLER. updateProjectLikes)//uid
}