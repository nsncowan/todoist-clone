import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    const tasksRef = collection(db, 'tasks');
    let updatedQuery = query(tasksRef, where('userId', '==', 'lksdjfIUEWRKksdmeiewKDKS'));

    if (selectedProject && !collatedTasksExist(selectedProject)) {
      updatedQuery = query(updatedQuery, where('projectId', '==', selectedProject));
    } else if (selectedProject === 'TODAY') {
      updatedQuery = query(updatedQuery, where('date', '==', moment().format('DD/MM/YYYY')));
    } else if (selectedProject === 'INBOX' || selectedProject === 0) {
      updatedQuery = query(updatedQuery, where('date', '==', ''));
    }

    const unsubscribe = onSnapshot(updatedQuery, snapshot => {
      const newTasks = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === 'NEXT_7'
          ? newTasks.filter(
              task =>
                moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true
            )
          : newTasks.filter(task => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter(task => task.archived !== false));
    }); 

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const projectRef =  collection(db, 'projects');
  const projectQuery = query(projectRef, where('userId', '==', 'lksdjfIUEWRKksdmeiewKDKS'));

  useEffect(() => {
      projectQuery.orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};