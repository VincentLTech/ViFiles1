const Project = require("../models/project.model");

const createNewProject = (req, res) => {
    Project.create(req.body)
        .then((newProject) => {
            res.json({ newProject });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

    const getAllProjects = (req, res) => {
    Project.find()
        .then((allProjects) => {
            res.json(allProjects);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

    const getOneProject = (req, res) => {
    Project.findOne({ _id: req.params.id })
        .then((queriedProject) => {
            res.json(queriedProject);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

    const updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedProject) => {
            res.json({ updatedProject });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };

    const deleteExistingProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
    };
    //intersting many to many likes system
    const updateProjectLikes = (req, res) => {
        Project.updateOne({ _id: req.params.id },{ $push: {likes: req.params.uid}})//{ $push: {likes: req.params.uid} like system
            .then((updatedProject) => {
                res.json({ updatedProject });
            })
            .catch((err) => {
                res.status(400).json({ err });
            });
        };


    module.exports = {
        createNewProject,
        getOneProject,
        getAllProjects,
        updateProject,
        deleteExistingProject,
        updateProjectLikes,
    };