<template>
    <div>
        <linegraph :height="350" :width="800" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></linegraph>
    </div>
</template>

<script>
    import linegraph from 'Components/charts/linegraph.js'
    export default {
        name: "LineCharts",
        components: {
            linegraph
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
                    labels: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01', '08/01','09/01'],
                    datasets: [
                        {
                            label: 'Tickets sold',
                            backgroundColor: '#e8674e',//#619fe8
                            borderColor:'#008080',
                            fontFamily: '"Roboto, sans serif',
                            data: [12, 23, 34, 34, 45, 52, 30, 20, 5]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>
