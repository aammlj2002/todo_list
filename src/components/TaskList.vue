<template>
    <div class="task-list">
        <div class="task-flex" v-for="task in tasks" :key="task.id">
            <span class="material-icons-outlined" v-if="!task.isComplete" @click="toggleComplete(task.id, task.isComplete)">circle</span>
            <span class="material-icons-outlined" v-if="task.isComplete" @click="toggleComplete(task.id, task.isComplete)">check_circle</span>
            <span class="material-icons-outlined" @click="deleteTask(task.id)">delete</span>
            <div class="task">{{task.task_name}}</div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/runtime-core'
import { db } from '../firebase/config'
export default {
    setup(){
        let tasks = ref(null);
        let complete = ref(null);
        db.collection("todo_list").orderBy("isComplete").orderBy("created_at").onSnapshot((snap)=>{
            let results = [];
            snap.docs.forEach((doc)=>{

                let document = {id:doc.id, ...doc.data()};
                doc.data().created_at && results.push(document);
            })
            tasks.value = results;
        })
        let deleteTask = async(id)=>{
            await db.collection("todo_list").doc(id).delete();
        }
        let toggleComplete = async(id, isComplete)=>{
            complete.value = !isComplete;
            let updatedTask = {
                isComplete : complete.value
            }
            await db.collection("todo_list").doc(id).update(updatedTask);
        }
        return { tasks, deleteTask, toggleComplete};
    }
}
</script>

<style scoped>
.task-list{
    overflow: auto;
}
.task-flex{
    display: flex;
    justify-items: left;
    align-items: center;
    overflow-x: hidden;
    margin-bottom: 10px;
}
span{
    margin-right: 7px;
    cursor: pointer;
    user-select: none;
}
.task{
    text-align: left;
}
</style>