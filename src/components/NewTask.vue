<template>
    <form @submit.prevent class="add-task">
        <span class="material-icons" @click="addTask">add_circle_outline</span>
        <input type="text" placeholder="New Task" v-model="newTask" @keypress.enter="addTask">
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { db, timestamp } from "../firebase/config"
export default {
    setup(){
        let newTask = ref("");

        let addTask = async()=>{
            let task = {
                task_name : newTask.value,
                created_at : timestamp(),
                isComplete : false
            }
            try{
                if(newTask.value){
                    let res = await db.collection("todo_list").add(task);
                    if(!res){
                        throw new Error ("could not add new task");
                    }
                    newTask.value = "";
                }
            }
            catch(err){
                console.log(err);
            }
        }

        return {newTask, addTask};
    }
}
</script>

<style scoped>
.add-task{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 5px;
}
.add-task input{
    flex-grow: 2;
    padding: 7px 10px;
    border: none;
}
.add-task span{
    color: #9c9c9c;
    cursor: pointer;
    user-select: none;
}
</style>