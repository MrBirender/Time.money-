<script>
  import { isDrawerOpen } from "$lib/store";
</script>

<div class={`stats shadow bg-blue-200 p-6 content gap-8 w-full ${$isDrawerOpen ? 'sm:w-[90%] ' : 'sm:w-[80%]'} overflow-x-scroll`}>
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-10 w-10 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div class="stat-title text-blue-950 text-lg">Total Likes</div>
    <div class="stat-value text-3xl text-primary">25.6K</div>
    <div class="stat-desc text-blue-950 text-base">21% more than last month</div>
  </div>

  <div class="stat ">
    <div class="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-10 w-10 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
    <div class="stat-title text-blue-950 text-lg">Page Views</div>
    <div class="stat-value  text-3xl text-secondary">2.6M</div>
    <div class="stat-desc  text-blue-950 text-base">21% more than last month</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-20 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="avatar"
          />
        </div>
      </div>
    </div>
    <div class="stat-value text-3xl text-primary">86%</div>
    <div class="stat-title text-lg text-primary">Tasks done</div>
    <div class="stat-desc text-base text-secondary">31 tasks remaining</div>
  </div>
</div>

<style>
	.content {
		transition: margin-left 0.3s ease-in-out; /* Smooth transition */
	}
</style>