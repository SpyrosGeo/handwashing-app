<script>
import ProgressBar from './ProgressBar.svelte'

</script>

<style>
h2{
    margin: 0;
}
.start{
    background-color: rgb(96, 139, 146);
      width:100%;
    margin:10px 0;
    border: none;
	color: #fff;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	outline: none;
	flex: 1;
	cursor: pointer;
}

</style>

<div bp="grid">
<h2 bp="offset-5@md 4@md 12@sm" >Seconds Left:</h2>
</div>
<ProgressBar/>

<button class="start">
Start
</button>