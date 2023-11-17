import React from "react";
import { collection, query, where } from "firebase/firestore";
import { db, auth } from "../firebase";
// import { firebase } from '../firebase';


export const Checkbox = ({ id }) => {
  const tasksRef =  collection(db, 'tasks');
  const taskQuery = query(tasksRef, where('userId', '==', 'lksdjfIUEWRKksdmeiewKDKS'));

  const archiveTask = () => {
    taskQuery.doc(id).update({
        archived: true,
      });
  };

  return (
    <div  
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox" />
    </div>
  )
};