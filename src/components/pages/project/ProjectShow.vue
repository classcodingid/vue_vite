<template>
    <layout-div>
        <h2 class="text-center mt-5 mb-3">Show Project</h2>
        <div class="card">
            <div class="card-header">
                <router-link class="btn btn-outline-info float-right" to="/">View All Projects
                </router-link>
            </div>
            <div class="card-body">
                <b className="text-muted">Name:</b>
                <p>{{ project.name }}</p>
                <b className="text-muted">Description:</b>
                <p>{{ project.description }}</p>
            </div>
        </div>
    </layout-div>
</template>

<!-- logic -->
<script>
import axios from 'axios';
import Swal from 'sweetalert2'
import LayoutDiv from '../../LayoutDiv.vue';

export default {
    name: 'ProjectShow',
    components: {
        LayoutDiv,
    },
    data() {
        return {
            project: {
                name: '',
                description: '',
            },
            isSaving: false,
        };
    },
    created() {
        this.getUser();
        if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null) {
            this.$router.push('/')
        } else {
            this.getUser();
        }
        const id = this.$route.params.id;
        axios.get(`/api/projects/${id}`)
            .then(response => {
                let projectInfo = response.data
                this.project.name = projectInfo.name
                this.project.description = projectInfo.description
                return response
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500
                })
                return error
            })
    },
    methods: {
        getUser() {
            axios.get('/api/user', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
                .then((r) => {
                    this.user = r.data;
                    return r
                })
                .catch((e) => {
                    return e
                });
        },

    },
};
</script>