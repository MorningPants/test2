<script>
    import { base } from '$app/paths';
  </script>

<div>
	<img class="rose" src="{ base }/Rose_Icon.png" alt="Logo" height="100" />
	<img class="title" src="{ base }/Andy_Hopkins.png" alt="Andy Hopkins" height="100" />
</div>

<style>
div{
    justify-content: center;
    display: flex;
    background: linear-gradient( #c7caed, rgb(201, 201, 204));
}
.rose{
    mix-blend-mode: multiply;
}
.title{
    margin-top: 16px;
}
</style>