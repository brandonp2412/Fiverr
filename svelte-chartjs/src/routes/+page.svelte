<script lang="ts">
	import svelte from './svelte.svg';
	import chartjs from './chartjs-logo.svg';
	import { Chart, type ChartItem, LinearScale, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	Chart.register(...registerables);
	Chart.defaults.color = 'white';

	let barChart: HTMLCanvasElement;
	let lineChart: HTMLCanvasElement;
	let doughnutChart: HTMLCanvasElement;

	onMount(() => {
		const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

		const barContext = barChart.getContext('2d');
		const lineContext = lineChart.getContext('2d');
		const doughnutContext = doughnutChart.getContext('2d');
		if (!barContext || !lineContext || !doughnutContext) return;

		new Chart(barContext, {
			type: 'bar',
			data: {
				labels,
				datasets: [
					{
						label: 'Website sales',
						data: [65, 59, 70, 76, 70, 80, 90],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(255, 205, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(201, 203, 207, 0.2)'
						],
						borderColor: [
							'rgb(255, 99, 132)',
							'rgb(255, 159, 64)',
							'rgb(255, 205, 86)',
							'rgb(75, 192, 192)',
							'rgb(54, 162, 235)',
							'rgb(153, 102, 255)',
							'rgb(201, 203, 207)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

		new Chart(lineContext, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Average load times',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						borderColor: 'rgb(75, 192, 192)',
						tension: 0.1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});

		new Chart(doughnutContext, {
			type: 'doughnut',
			data: {
				labels: ['Red', 'Blue', 'Yellow'],
				datasets: [
					{
						label: 'My First Dataset',
						data: [300, 50, 100],
						backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
						hoverOffset: 4
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<main>
	<header>
		<img src={svelte} alt="Svelte logo" height="75" />
		<h1>Svelte + Chart.js</h1>
		<img src={chartjs} alt="Chart.js logo" height="75" />
	</header>

	<div class="charts">
		<div class="card bar">
			<canvas bind:this={barChart} />
		</div>
		<div class="card bar">
			<canvas bind:this={lineChart} />
		</div>
	</div>

	<div class="charts">
		<div class="card">
			<canvas bind:this={doughnutChart} />
		</div>
	</div>
</main>

<style>
	* {
		font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	}

	main {
		gap: 16px;
		margin: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	header {
		display: flex;
		gap: 16px;
	}

	.card {
		padding: 1em;
		display: grid;
		align-items: center;
		justify-items: center;
		max-width: 40em;
		box-shadow: 0 4px 10px 0 rgb(0 0 0), 0 4px 20px 0 rgb(0 0 0 / 19%);
	}

	.charts {
		display: flex;
		gap: 16px;
	}
</style>
