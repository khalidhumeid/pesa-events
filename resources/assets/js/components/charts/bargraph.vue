<template>
    <div>
        <bargraph :height="350" :width="800" :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: false}"></bargraph>
    </div>
</template>

<script>
    import bargraph from 'Components/charts/bargraph.js'
    export default {
        name: "BarCharts",
        components: {
            bargraph
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
                    labels: ['Normal', 'VIP', 'VVIP'],
                    datasets: [
                        {
                            label: 'Tickets sold',
                            backgroundColor: '#008080',//#619fe8
                            borderColor:'#e8674e',
                            fontFamily: '"Roboto, sans serif',
                            data: [182, 23, 12]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>
