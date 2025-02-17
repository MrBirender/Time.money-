<script>
	import Logo from '../../lib/assets/logo.png';
	import Facebook from '../../lib/assets/facebook.svg';
	import Google from '../../lib/assets/google.svg';
	import Carousel from '../../lib/assets/crousel1.jpg';
	import Crousel2 from '../../lib/assets/crousel2.jpg';
	import Crousel3 from '../../lib/assets/crousel3.jpg';
	import { goto } from '$app/navigation';
    import { isLoggedIn } from '$lib/store';
	

	function handleLogin(event) {
		event.preventDefault();
        isLoggedIn.set(true);
		goto('/');
	}

	let images = [Carousel, Crousel2, Crousel3];
	let currentImageIndex = $state(0);

	setInterval(() => {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}, 5000);
</script>
<div class="flex min-h-screen w-full items-center justify-center bg-white px-4 py-4">
	<div
		class="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:flex-row"
	>
		<!-- Carousel Section -->
		<div class="relative h-64 w-full md:h-[500px] md:w-1/2">
			{#each images as image, index}
				<img
					src={image}
					alt="Carousel"
					class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
					class:hidden={index !== currentImageIndex}
				/>
			{/each}

			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-6 text-center text-white"
			>
				<h2 class="text-lg font-bold md:text-3xl">Welcome Back!</h2>
				<p class="mt-2 text-sm leading-relaxed md:mt-4 md:text-lg">
					"Join us and explore new opportunities. Stay connected, stay secure."
				</p>
				<div class="mt-4 md:mt-6">
					<img src={Logo} alt="Company Logo" class="h-6 md:h-10" />
				</div>
			</div>
		</div>

		<!-- Login Section -->
		<div class="flex w-full max-w-lg flex-col items-center justify-center p-6 md:w-1/2 md:p-8">
			<h2 class="text-center text-lg font-bold text-gray-900 md:text-2xl">
				Log in to your Account
			</h2>
			<p class="mt-2 text-center text-sm text-gray-500">Welcome back! Please enter your details.</p>

			<div class="mt-6 flex w-full flex-col gap-4 md:flex-row">
				<button
					type="button"
					class="btn flex items-center justify-center gap-2 border-[#e5e5e5] bg-white px-8 text-black"
				>
					<img class="w-5 md:w-7" src={Google} alt="Google login" /> Google
				</button>

				<button
					type="button"
					class="btn flex items-center justify-center gap-2 border-[#005fd8] bg-blue-600 px-6 text-white"
				>
					<img class="w-5 md:w-7" src={Facebook} alt="Facebook login" /> Facebook
				</button>
			</div>

			<div class="divider my-4 w-full text-center text-xs text-gray-400">OR LOGIN WITH</div>

			<form onsubmit={handleLogin} class="flex w-full flex-col gap-4 text-gray-900">
				<label class="form-control w-full">
					<span class="label-text text-gray-700">Email</span>
					<input
						type="email"
						class="input w-full border-gray-400 bg-gray-100 placeholder-gray-600"
						placeholder="Enter your email"
						required
						autocomplete="email"
					/>
				</label>

				<label class="form-control w-full">
					<span class="label-text text-gray-700">Password</span>
					<input
						type="password"
						class="input w-full border-gray-400 bg-gray-100 placeholder-gray-600"
						placeholder="Enter your password"
						required
						autocomplete="current-password"
					/>
				</label>

				<div class="flex w-full flex-col justify-between text-sm text-gray-600 md:flex-row">
					<label class="flex cursor-pointer items-center gap-2">
						<input type="checkbox" class="checkbox checked:bg-blue-600" />
						Remember me
					</label>
					<button type="button" class="mt-2 text-blue-600 hover:underline md:mt-0"
						>Forgot password?</button
					>
				</div>

				<button type="submit" class="btn w-full border-none bg-blue-600 py-2 text-white"
					>Log in</button
				>
			</form>

			<p class="mt-4 text-center text-sm text-gray-600">
				Don't have an account? <button type="button" class="text-blue-600 hover:underline"
					>Sign up</button
				>
			</p>
		</div>
	</div>
</div>

