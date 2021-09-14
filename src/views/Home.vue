<template>
    <div class="body-flex">
        <div class="container">
            <h1>Todo List</h1>
            <NewTask/>
            <TaskList/>
        </div>
    </div>
</template>

<script>
import TaskList from '../components/TaskList'
import NewTask from '../components/NewTask'
export default {
    components: {
        TaskList,
        NewTask
    },
}
</script>
<style scoped>

.body-flex{
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    margin: 10px 0 5px 0;
}
</style>