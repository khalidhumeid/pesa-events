<template>
    <div>
        <doughnutgraph :height="350" :width="800" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></doughnutgraph>
    </div>
</template>

<script>
    import doughnutgraph from 'Components/charts/doughnutgraph.js'
    export default {
        name: "doughnutCharts",
        components: {
            doughnutgraph
        },
        data() {
            return {
                datacollection: null
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: ['Sold', 'Not-sold'],
                    datasets: [
                        {
                            label: 'Tickets sold',
                            backgroundColor:['#008080','#e8674e'] ,//#619fe8
                            borderColor:'#FFF',
                            fontFamily: '"Roboto, sans serif',
                            data: [150, 100]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</styldoughnut